import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    homepage: singleton({
      label: 'Página de Inicio',
      path: 'src/content/homepage',
      schema: {
        heroTitle: fields.text({
          label: 'Título Hero (puedes usar HTML básico)',
          defaultValue: 'Multiplica tus ventas en Meta Ads con IA Proactiva',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo Hero',
          defaultValue: 'Consigue más clientes y ventas en Meta Ads sin complicarte con el Administrador de Anuncios. Nuestra IA crea tus campañas, segmenta a tu cliente ideal y cuida tu presupuesto las 24 horas.',
          multiline: true,
        }),
        ctaPrimaryText: fields.text({
          label: 'Texto del Botón Principal',
          defaultValue: 'Activar cuenta gratis',
        }),
        ctaSecondaryText: fields.text({
          label: 'Texto del Botón Secundario',
          defaultValue: 'Ver casos de estudio',
        }),
        testimonials: fields.array(
          fields.object({
            quote: fields.text({ label: 'Cita / Testimonio', multiline: true }),
            author: fields.text({ label: 'Nombre del Autor' }),
            role: fields.text({ label: 'Puesto / Cargo' }),
            avatarLetter: fields.text({ label: 'Inicial del Avatar', defaultValue: 'A' }),
          }),
          {
            label: 'Testimonios',
            itemLabel: (item) => item.fields.author.value || 'Testimonio',
          }
        ),
      },
    }),
  },
  collections: {
    features: collection({
      label: 'Funcionalidades / Ventajas',
      slugField: 'title',
      path: 'src/content/features/*',
      schema: {
        title: fields.text({ label: 'Título' }),
        description: fields.text({ label: 'Descripción / Subtexto' }),
      },
    }),
  },
});
