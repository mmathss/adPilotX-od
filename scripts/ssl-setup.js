import fs from 'fs';
import path from 'path';
import { execSync, spawn } from 'child_process';
import selfsigned from 'selfsigned';

const KEY_FILE = path.join(process.cwd(), 'localhost-key.pem');
const CERT_FILE = path.join(process.cwd(), 'localhost.pem');

// 1. Generar certificados SSL locales si no existen
if (!fs.existsSync(KEY_FILE) || !fs.existsSync(CERT_FILE)) {
  console.log('🔑 Generando certificado SSL autofirmado para localhost...');
  
  const attrs = [{ name: 'commonName', value: 'localhost' }];
  const pems = await selfsigned.generate(attrs, {
    keySize: 2048,
    days: 365,
    algorithm: 'sha256',
    extensions: [{
      name: 'basicConstraints',
      cA: true
    }, {
      name: 'keyUsage',
      keyCertSign: true,
      digitalSignature: true,
      nonRepudiation: true,
      keyEncipherment: true,
      dataEncipherment: true
    }, {
      name: 'subjectAltName',
      altNames: [
        { type: 2, value: 'localhost' },
        { type: 7, value: '127.0.0.1' }
      ]
    }]
  });

  const privateKey = pems.private || pems.privateKey;
  const certificate = pems.cert || pems.certificate;

  if (!privateKey || !certificate) {
    throw new Error('No se pudo extraer la clave privada o el certificado del objeto generado.');
  }

  fs.writeFileSync(KEY_FILE, privateKey);
  fs.writeFileSync(CERT_FILE, certificate);
  console.log('✅ Certificados generados correctamente: localhost.pem y localhost-key.pem');
}

// 2. Levantar el proxy local-ssl-proxy en segundo plano
console.log('🚀 Iniciando túnel HTTPS seguro (https://localhost:4322 -> http://localhost:4321)...');

const proxy = spawn('npx', [
  'local-ssl-proxy',
  '--source', '4322',
  '--target', '4321',
  '--cert', CERT_FILE,
  '--key', KEY_FILE
], {
  shell: true,
  stdio: 'inherit'
});

proxy.on('close', (code) => {
  console.log(`Proxy finalizado con código ${code}`);
});
