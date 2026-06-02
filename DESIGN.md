# Design

## Theme
- **Base Style**: Dark Mode Premium / Tactical Command Console
- **Background**: `#030305` (con gradiente radial azulado de opacidad `0.22` superior y patrón grid táctico de `24px` con color de línea `rgba(255, 255, 255, 0.003)`).
- **Core Intent**: Proporcionar una cabina táctica cibernética ("docking bay") que se sienta estética, profesional y no invasiva, priorizando la legibilidad y la operatividad de los formularios.

## Color Palette (OKLCH & Hex)
- **Background**: `#030305` (Dark Ink)
- **Surface**: `rgba(10, 11, 20, 0.5)` (Bento glass cards with `25px` blur and border `rgba(56, 189, 248, 0.12)`)
- **Primary / Brand**: `#2f62f6` (Tactical Blue)
- **Secondary / Accent**: `#38bdf8` (Cyan Tech Glow)
- **Success**: `#10b981` (Terminal Green)
- **Muted / Ink**: `#f4f4f5` (Foreground white) / `#a1a1aa` (Muted captions) / `#71717a` (Sidebar links)

## Typography
- **Display & UI Interface**: `Geist` (Modern grotesque geometric sans-serif)
- **Technical & Command Data**: `Geist Mono` (Monospaced font for clocks, prompts, metrics, buttons, and labels)
- **Base Body Size**: `0.88rem (~14px)` for main inputs and text.
- **Labels / Headers**: `0.65rem` uppercase for labels, with letter spacing `0.08em` for a tactical terminal look.

## Components & Layout
- **Tactical Navbar**: Fixed header at `top: 0`, height `48px`, background `rgba(5, 5, 8, 0.85)` with blur `20px` and border-bottom `1px solid rgba(56, 189, 248, 0.15)`.
- **Bento Card Containers**: Form groups utilize `div[class*="ControlContainer"]` with a `border-top` accent of `3px solid #2f62f6` for visual anchoring, rounding of `12px` and a transition translate of `-2px` on hover.
- **Form Fields**: Custom command-line prompt `❯` prepended to inputs. Inputs have a background of `#050508`, borders `rgba(255, 255, 255, 0.08)`, text style `Geist Mono`, and inner shadow inset.
- **Buttons**: Action buttons feature linear gradients `linear-gradient(135deg, #2f62f6, #38bdf8)` with high-contrast text and interactive lift/glow shadows.
