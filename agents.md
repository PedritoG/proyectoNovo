# 🤖 Guía de Agentes y Arquitectura de Inteligencia Artificial (agents.md)

Este documento define las directrices, roles de subagentes, restricciones técnicas y estándares de desarrollo para cualquier asistente o agente de Inteligencia Artificial que colabore en el mantenimiento y evolución de **proyectoNovo**.

---

## 📌 1. Visión General del Proyecto

- **Nombre del Proyecto:** `proyectoNovo`
- **Naturaleza:** Plataforma web y landing page de alta gama para una agencia de soluciones digitales.
- **Servicios Ofrecidos:**
  1. Invitaciones Digitales Interactivas (RSVP, mapas, cuenta regresiva, audio).
  2. Sitios Web Interactivos (landing pages, portafolios, diseño a medida).
  3. Tiendas Online / E-Commerce (catálogos dinámicos, pasarelas de pago).
  4. Menús Digitales QR (restaurantes, bares, actualización en tiempo real).
  5. Tarjetas de Presentación Digitales (NFC / QR para networking profesional).
- **Filosofía de Implementación:** **Vanilla Web First**. Cero dependencias pesadas, carga ultrarrápida, SEO técnico impecable y estética cinematográfica minimalista inspirada en SpaceX.

---

## 🎨 2. Sistema de Diseño y Reglas Estéticas

Cualquier agente que modifique la capa de interfaz debe respetar estrictamente el sistema de diseño:

### Paleta de Colores y Superficies
- **Fondo Principal:** `#0a0a0a` (Negro profundo, no `#000000` puro para evitar fatiga visual).
- **Superficies Secundarias:** `#111111` (Fondos de tarjetas y secciones alternas).
- **Tipografía y Textos:** Sistema de opacidades con base blanco frío:
  - `rgba(240, 240, 250, 1)` — Títulos y textos principales.
  - `rgba(240, 240, 250, 0.7)` — Subtítulos y descripciones.
  - `rgba(240, 240, 250, 0.4)` — Etiquetas secundarias y placeholders.
  - `rgba(240, 240, 250, 0.08)` a `0.15` — Bordes sutiles y separadores de 1px.
- **Acento:** `#a855f7` (Utilizado con extrema moderación para detalles funcionales).

### Tipografía
- **Fuente Principal:** `Inter` (Google Fonts).
- **Etiquetas y Badges:** Mayúsculas con tracking/espaciado amplio (`letter-spacing: 0.25em` a `0.4em`).
- **Escala Fluida:** Uso de `clamp()` para tamaños de fuente responsivos sin saltos bruscos.

### Patrones Visuales Prohibidos
- ❌ No utilizar Tailwind CSS ni librerías de componentes externas.
- ❌ No usar gradientes de texto excesivos ni botones con brillo de neón.
- ❌ No sobrecargar con sombras pronunciadas o efectos de vidrio esmerilado (*glassmorphism*) fuera de contexto.
- ❌ No utilizar imágenes de placeholder genéricas o vacías.

---

## 🛠️ 3. Arquitectura Técnica y Convenciones de Código

### Estructura del Repositorio
```text
proyectoNovo/
├── index.html          # Estructura semántica HTML5 y puntos de anclaje i18n
├── index.css           # Sistema de diseño, variables CSS (:root) y media queries
├── index.js            # Motor i18n, observadores de scroll, carrusel y modales
├── DOCUMENTACION.md    # Memoria técnica del proyecto y registro de evolución
├── agents.md           # Protocolos y arquitectura para agentes de IA
├── nombres.md          # Archivo de branding y banco de nomenclaturas
└── assets/             # Imágenes y recursos multimedia optimizados
```

### Protocolo de Internacionalización (i18n)
- Todo texto visible en el DOM debe contar con el atributo `data-i18n="modulo.clave"`.
- Los textos deben registrarse de forma síncrona tanto en `translations.es` como en `translations.en` en `index.js`.
- La persistencia de idioma en el navegador debe utilizar la clave `localStorage.getItem('proyectonovo-lang')`.

### Interacciones y JavaScript
- **Scroll Reveal:** Manejado exclusivamente con la API nativa `IntersectionObserver`.
- **Modales de Detalle:** Controlados vía el objeto estructurado `projectsData` en `index.js`, garantizando soporte bilingüe en tiempo real al alternar idiomas.
- **Formularios:** Sanitización en cliente y retroalimentación accesible mediante mensajes de estado visual.

---

## 👥 4. Matriz de Roles para Subagentes (Multi-Agent Protocol)

Cuando una tarea compleja sea delegada entre múltiples agentes o subagentes, cada uno asumirá una especialidad:

| Rol de Agente | Responsabilidad Principal | Archivos Foco |
| :--- | :--- | :--- |
| **Architect / Lead Agent** | Coordinación, coherencia global, semántica HTML5, metadatos SEO y accesibilidad (`aria-*`). | `index.html`, `agents.md` |
| **UI & Styling Agent** | Mantenimiento del CSS, variables de diseño, responsividad móvil (`clamp`, media queries) y micro-animaciones. | `index.css` |
| **Logic & Interactive Agent** | Manejo de eventos del DOM, motor i18n, filtrado de portafolio, carrusel touch y modales. | `index.js` |
| **Copywriting & i18n Agent** | Redacción persuasiva, traducciones precisas (ES/EN) y coherencia de tono elegante y profesional. | `index.js`, `DOCUMENTACION.md` |
| **QA & Performance Agent** | Validación de compatibilidad entre navegadores, rendimiento de carga, optimización de assets y testing. | Todos |

---

## 🚀 5. Flujo de Trabajo Git y Despliegue

1. **Ramas Principales:**
   - `main`: Rama de producción estable.
   - `pedro`: Rama de desarrollo y trabajo activo.
2. **Mensajes de Commit:** Claros, imperativos y orientados a la funcionalidad agregada o corregida.
3. **Verificación Previa a Commit:**
   - Validar que no existan errores de sintaxis en `index.js`.
   - Asegurar que todas las etiquetas `data-i18n` tengan traducción correspondiente en ambos idiomas.
   - Comprobar que los assets referenciados existan en `assets/`.
