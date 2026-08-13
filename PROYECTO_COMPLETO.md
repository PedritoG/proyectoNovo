# 🌐 CONTEXTO MAESTRO DEL PROYECTO: `proyectoNovo`

> **Instrucciones para la Inteligencia Artificial (Prompting Context):**  
> Este documento contiene la arquitectura completa, el código conceptual, las reglas de diseño, la estructura técnica y las directrices de desarrollo de **`proyectoNovo`**. Si estás leyendo esto como una IA general (ChatGPT, Claude, Gemini, DeepSeek, etc.), utilízalo como la **única fuente de verdad** (*Single Source of Truth*) para continuar desarrollando, refactorizando, añadiendo funcionalidades o creando nuevos componentes sin alterar la identidad ni la filosofía técnica del proyecto.

---

## 📑 Tabla de Contenidos
1. [Identidad de Marca y Naming](#1-identidad-de-marca-y-naming)
2. [Propuesta de Valor y Servicios Activos](#2-propuesta-de-valor-y-servicios-activos)
3. [Filosofía Tecnológica (Vanilla First)](#3-filosofía-tecnológica-vanilla-first)
4. [Sistema de Diseño (Estética SpaceX / Cinematic Dark)](#4-sistema-de-diseño-estética-spacex--cinematic-dark)
5. [Estructura del Proyecto y Archivos](#5-estructura-del-proyecto-y-archivos)
6. [Desglose Técnico de Archivos](#6-desglose-técnico-de-archivos)
   - [6.1. HTML Semántico (`index.html`)](#61-html-semántico-indexhtml)
   - [6.2. Sistema de Estilos (`index.css`)](#62-sistema-de-estilos-indexcss)
   - [6.3. Lógica del Cliente e i18n (`index.js`)](#63-lógica-del-cliente-e-i18n-indexjs)
7. [Mecanismos y Motores Clave](#7-mecanismos-y-motores-clave)
   - [Motor de Internacionalización (i18n)](#motor-de-internacionalización-i18n)
   - [Animaciones de Aparición (Scroll Reveal)](#animaciones-de-aparición-scroll-reveal)
   - [Sistema de Filtrado de Portafolio y Modal Interactivo](#sistema-de-filtrado-de-portafolio-y-modal-interactivo)
   - [Formulario de Contacto en Tarjeta Contenida](#formulario-de-contacto-en-tarjeta-contenida)
8. [Reglas y Convenciones de Desarrollo para la IA](#8-reglas-y-convenciones-de-desarrollo-para-la-ia)
9. [Guía de Extensión y Próximos Pasos](#9-guía-de-extensión-y-próximos-pasos)
10. [Plantillas de Prompts para Continuar el Proyecto](#10-plantillas-de-prompts-para-continuar-el-proyecto)

---

## 1. Identidad de Marca y Naming

- **Nombre Oficial:** **`proyectoNovo`**
- **Regla Estricta de Casing:**
  - `proyecto` siempre en **minúsculas**.
  - `Novo` siempre con la primera letra **N mayúscula**.
  - Todo junto sin espacios: **`proyectoNovo`**.
  - En CSS, las clases del logotipo (`.nav__logo` y `.footer__logo`) tienen `text-transform: none;` para evitar que el navegador lo fuerce a mayúsculas.
- **Historial de Naming:** En la fase demo inicial se utilizó temporalmente el nombre de fantasía *Auria*. Toda referencia a ese nombre fue sustituida y el proyecto quedó 100% unificado bajo `proyectoNovo`.
- **Repositorio Oficial de GitHub:** `https://github.com/PedritoG/proyectoNovo.git`
- **Contacto de Ejemplo:** `info@proyectonovo.digital`

---

## 2. Propuesta de Valor y Servicios Activos

`proyectoNovo` es una agencia digital boutique orientada a crear experiencias web interactivas, minimalistas, fluidas y de alto impacto visual.

### 🛠️ Los 4 Servicios Principales (Alineados en 1 sola fila en Desktop):
1. **Invitaciones Digitales Interactivas:**
   - Para bodas, eventos corporativos, aniversarios y celebraciones.
   - Incluye confirmación de asistencia en tiempo real (RSVP), mapa interactivo, cuenta regresiva, código de vestimenta y música de fondo.
2. **Sitios Web Interactivos:**
   - Landing pages, sitios institucionales y portafolios a medida.
   - Animaciones cinematográficas, navegación fluida, diseño responsive y SEO optimizado.
3. **Menús Digitales QR:**
   - Solución para bares, restaurantes y cafeterías.
   - Carga instantánea por código QR sin necesidad de descargar aplicaciones, menú categorizado y actualización 24/7.
4. **Tarjetas de Presentación Digitales:**
   - Tarjetas virtuales para networking profesional con integración NFC y código QR.

> **Nota sobre Servicios Descartados:**
> - **Tiendas Online (E-Commerce):** Fueron descartadas del alcance del proyecto para enfocarse exclusivamente en los 4 servicios anteriores.
> - **Testimonios:** La sección de testimonios fue removida temporalmente para mantener la propuesta 100% auténtica hasta contar con casos de clientes reales.

---

## 3. Filosofía Tecnológica (Vanilla First)

El proyecto está construido bajo una arquitectura **Vanilla pura**:
- **HTML5 nativo y semántico.**
- **Vanilla CSS3 con Variables (Custom Properties) y `clamp()`.**
- **JavaScript nativo (ES6+) sin frameworks ni transpiladores.**

### ¿Por qué esta decisión técnica?
1. **Rendimiento Máximo:** Carga instantánea (0.1s), sin tiempo de inicialización de frameworks como React, Vue o Next.js.
2. **Cero Dependencias:** No hay `node_modules`, no hay vulnerabilidades de paquetes, no hay necesidad de `npm install` ni herramientas de compilación como Vite o Webpack.
3. **Portabilidad Absoluta:** El proyecto funciona abriendo directamente `index.html` en cualquier navegador o mediante cualquier servidor web estático (GitHub Pages, Vercel, Netlify, Live Server).
4. **Control Total del DOM y CSS:** Control milimétrico de las animaciones, transiciones, accesibilidad y eventos táctiles.

---

## 4. Sistema de Diseño (Estética SpaceX / Cinematic Dark)

El lenguaje visual está inspirado en interfaces espaciales y cinematográficas (como el sitio oficial de SpaceX): fondos oscuros profundos, líneas divisorias ultra finas de 1px, tipografía nítida con espaciado amplio y acentos sutiles.

### 🎨 Tokens y Variables CSS (`:root`)
```css
:root {
  --black: #0a0a0a;          /* Fondo principal (negro profundo para evitar fatiga visual) */
  --surface: #111111;        /* Superficie de tarjetas y secciones alternas */
  --white: rgba(240, 240, 250, 1);       /* 100% blanco frío */
  --white-90: rgba(240, 240, 250, 0.9);  /* Textos de alto contraste */
  --white-70: rgba(240, 240, 250, 0.7);  /* Párrafos y subtítulos */
  --white-50: rgba(240, 240, 250, 0.5);  /* Textos secundarios */
  --white-30: rgba(240, 240, 250, 0.3);  /* Etiquetas, íconos y placeholders */
  --white-15: rgba(240, 240, 250, 0.15); /* Bordes de inputs */
  --white-08: rgba(240, 240, 250, 0.08); /* Separadores y bordes de tarjetas (1px) */
  --white-04: rgba(240, 240, 250, 0.04); /* Hover suave */
  --accent: #a855f7;         /* Púrpura cósmico (utilizado con moderación) */
  --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --ease: cubic-bezier(0.16, 1, 0.3, 1); /* Curva de aceleración cinematográfica */
}
```

### 📐 Principios de Tipografía y Layout
- **Fuente Principal:** `Inter` importada desde Google Fonts.
- **Labels / Badges:** Mayúsculas con *tracking* amplio (`letter-spacing: 0.25em` a `0.4em`).
- **Títulos:** Escala fluida con `clamp()` (ejemplo: `font-size: clamp(2.2rem, 5vw, 4.2rem)`).
- **Separadores:** No se usan sombras ni colores llamativos. La separación visual se logra mediante bordes de `1px solid var(--white-08)` y espacio negativo.
- **Patrones Prohibidos:**
  - ❌ No utilizar Tailwind CSS ni Bootstrap.
  - ❌ No usar gradientes de texto de arcoíris ni bordes brillantes con neón.
  - ❌ No sobrecargar con sombras difusas (*box-shadow* excesivo).
  - ❌ No usar placeholders vacíos o genéricos.

---

## 5. Estructura del Proyecto y Archivos

```text
proyectoNovo/
├── index.html          # Estructura semántica HTML5 y puntos de anclaje i18n
├── index.css           # Sistema de diseño completo, CSS variables y media queries
├── index.js            # Lógica cliente: i18n, scroll reveal, modal de proyectos y form
├── PROYECTO_COMPLETO.md # Este documento de contexto maestro
├── DOCUMENTACION.md    # Memoria técnica del proyecto y registro de decisiones
├── agents.md           # Guía operativa para asistentes y subagentes de IA
├── nombres.md          # Archivo de branding con selección oficial de la marca
└── assets/             # Recursos multimedia de portafolio
    ├── portfolio-invitacion.jpg
    ├── portfolio-restaurante.jpg
    └── portfolio-menu.jpg
```

---

## 6. Desglose Técnico de Archivos

### 6.1. HTML Semántico (`index.html`)

El HTML está estructurado en secciones modulares con atributos `id` para navegación suave y atributos `data-i18n` para traducción instantánea:

1. **`<nav id="nav" class="nav">`:**
   - Logotipo: `<a class="nav__logo" href="#">proyectoNovo</a>`
   - Enlaces: Servicios, Portafolio, Proceso, Precios, Contacto.
   - Botón selector de idioma: `#langToggle` (`EN` / `ES`).
   - Botón hamburguesa móvil: `#hamburger`.

2. **Hero Section (`#hero`):**
   - Etiqueta: `EXPERIENCIAS DIGITALES`
   - Título: `Transformamos ideas en <em>experiencias digitales</em>`
   - Subtítulo y botón CTA hacia `#contacto`.
   - Indicador animado de scroll.

3. **Servicios (`#servicios`):**
   - Contenedor `.services__grid` con 4 artículos (`.service-card`):
     - `Invitaciones Digitales`
     - `Sitios Web Interactivos`
     - `Menús Digitales QR`
     - `Tarjetas de Presentación Digitales`

4. **Portafolio (`#portafolio`):**
   - Botones de filtro: `Todos`, `Invitaciones`, `Sitios Web`, `Menús`.
   - Tarjetas interactivas con imágenes en `assets/` y atributo `data-category`. Al hacer clic en cualquier tarjeta, se abre el modal `#projectModal`.

5. **Proceso (`#proceso`):**
   - 4 pasos numerados: `01 Consulta`, `02 Diseño`, `03 Desarrollo`, `04 Entrega`.

6. **Precios (`#precios`):**
   - 3 planes:
     - `Esencial` ($29 USD) — Invitación digital.
     - `Profesional` ($99 USD - Más popular) — Sitio web interactivo completo.
     - `Premium` ($249 USD+) — Solución digital completa / personalizada.
   - Bloque adicional de presupuesto a medida.

7. **Contacto en Tarjeta Contenida (`#contacto`):**
   - Enmarcado dentro de `.contact__card` (ancho máximo `1040px`, centrado).
   - Formulario (`#contactForm`) con campos: Nombre, Email, Servicio (Select) y Mensaje.
   - Panel lateral de información directa: Email (`info@proyectonovo.digital`), Teléfono, Ubicación y enlaces a redes sociales.

8. **Footer (`.footer`):**
   - Logotipo `proyectoNovo`, enlaces de navegación y copyright dinámico.

9. **Modal de Detalle (`#projectModal`):**
   - Contenedor flotante accesible con backdrop, botón de cierre (`#modalClose`), imagen, categoría, título, descripción extendida, etiquetas de características y botón CTA que preselecciona el servicio en el formulario de contacto.

---

### 6.2. Sistema de Estilos (`index.css`)

El CSS está organizado en bloques lógicos y limpios:
- **Resets y Variables:** `:root` con sistema de escala cromática y tipográfica.
- **Navegación Sticky:** `.nav--scrolled` aplica `backdrop-filter: blur(30px)` y fondo semitransparente al hacer scroll.
- **Grilla de Servicios (1 Fila en Desktop):**
  ```css
  .services__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 72px;
  }
  .service-card {
    padding: 44px 28px;
    border-top: 1px solid var(--white-08);
    border-right: 1px solid var(--white-08);
    transition: background 0.5s ease;
  }
  .service-card:nth-child(4n) {
    border-right: none;
  }
  ```
- **Tarjeta de Contacto Contenida:**
  ```css
  .contact {
    background: var(--black);
    min-height: auto;
    padding: 80px clamp(24px, 4vw, 64px) 120px;
  }
  .contact__card {
    max-width: 1040px;
    margin: 0 auto;
    background: var(--surface);
    border: 1px solid var(--white-08);
    padding: clamp(40px, 6vw, 72px);
    position: relative;
  }
  .contact__wrapper {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(40px, 6vw, 80px);
  }
  ```
- **Media Queries:**
  - `@media (max-width: 1024px)`: Servicios pasan a 2 columnas (`repeat(2, 1fr)`), contacto a 1 columna.
  - `@media (max-width: 768px)`: Servicios pasan a 1 columna, menú móvil full-screen desplegable.

---

### 6.3. Lógica del Cliente e i18n (`index.js`)

El archivo JavaScript se encarga de toda la reactividad del sitio sin librerías externas:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNavigation();
  initScrollReveal();
  initPortfolioFilter();
  initProjectModal();
  initContactForm();
});
```

---

## 7. Mecanismos y Motores Clave

### Motor de Internacionalización (i18n)
- **Estructura del Diccionario:** Objeto `translations` con ramas completas `es` y `en`.
- **Atributo HTML:** Cualquier elemento con `data-i18n="clave.subclave"` es traducido dinámicamente.
- **Persistencia:** Se almacena en `localStorage` con la clave `proyectonovo-lang`.
- **Función de Aplicación:**
  ```javascript
  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    currentLang = lang;
    localStorage.setItem('proyectonovo-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'OPTION') {
          el.textContent = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });
  }
  ```

### Animaciones de Aparición (Scroll Reveal)
Utiliza la API moderna `IntersectionObserver`:
- Los elementos tienen la clase `.reveal` (opacidad 0, `translateY(16px)`).
- Al entrar en el viewport, se les añade `.visible`, ejecutando la transición con la curva `--ease`.
- Soporta retrasos escalonados con `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3`, `.reveal-delay-4`.

### Sistema de Filtrado de Portafolio y Modal Interactivo
- **Filtrado:** Compara el `data-filter` del botón activo con el `data-category` de cada tarjeta, aplicando o retirando la clase `.hidden`.
- **Modal Dinámico (`projectsData`):** Al hacer clic en un proyecto, extrae los datos del objeto `projectsData[id]`, inyecta el contenido según el idioma actual (`es` o `en`), y permite solicitar un proyecto similar preseleccionando el dropdown en el formulario de contacto.

---

## 8. Reglas y Convenciones de Desarrollo para la IA

Cuando le pidas a una IA general que agregue código o edite el proyecto, la IA **debe seguir estas reglas obligatorias**:

1. **Respetar el Naming Estricto:** Nunca escribir `PROYECTONOVO`, `ProyectoNovo` ni `Auria`. Usar **`proyectoNovo`**.
2. **No Añadir Frameworks:** No importar React, Vue, Tailwind CDN ni librerías pesadas de animaciones (como GSAP o Three.js) a menos que se solicite explícitamente. Mantener la ligereza Vanilla.
3. **Mantener la Sincronización Bilingüe:** Todo nuevo texto agregado en el HTML debe tener su correspondiente clave `data-i18n` y estar presente tanto en `translations.es` como en `translations.en` de `index.js`.
4. **Respetar el Esquema de Color:** Toda superficie debe ser `#0a0a0a` o `#111111`, y todo borde debe usar las variables `--white-08` o `--white-15`.

---

## 9. Guía de Extensión y Próximos Pasos

Si deseas continuar el desarrollo, estos son los módulos más recomendados para implementar:

### 1. Conexión Real del Formulario de Contacto
Actualmente el formulario simula el envío con un `setTimeout`. Puedes conectar fácilmente:
- **Formspree / Formsubmit:** Reemplazando el atributo `action="https://formspree.io/f/TU_ID"`.
- **EmailJS / Resend API:** Mediante una función `fetch()` en `index.js`.

### 2. Agregar Nuevos Proyectos al Portafolio
1. Añadir la imagen en `assets/`.
2. Crear la tarjeta `<div class="portfolio-card reveal" data-category="..." data-id="N">` en `index.html`.
3. Agregar la entrada correspondiente en el objeto `projectsData` en `index.js` con sus descripciones en español e inglés.

### 3. Implementación de un Blog o Casos de Estudio
Crear una subcarpeta `/blog` o páginas individuales de estudio de caso respetando las mismas variables de `index.css`.

---

## 10. Plantillas de Prompts para Continuar el Proyecto

Copia y pega cualquiera de estos prompts en ChatGPT, Claude o cualquier otra IA junto con este documento:

### 📋 Prompt 1: Para Agregar una Nueva Funcionalidad
> *"Estoy trabajando en el proyecto `proyectoNovo`, un sitio web Vanilla HTML/CSS/JS con diseño minimalista oscuro estilo SpaceX. Adjunto el archivo `PROYECTO_COMPLETO.md` con el contexto del proyecto. Quiero que agregues [DESCRIBE LA FUNCIONALIDAD AQUÍ, ej: integración con Formspree / un nuevo filtro en el portafolio]. Asegúrate de mantener la estructura bilingüe i18n, los estilos Vanilla CSS y las convenciones del documento."*

### 📋 Prompt 2: Para Crear una Nueva Página Secundaria
> *"Basándote en el archivo `PROYECTO_COMPLETO.md` de `proyectoNovo`, genera una nueva página HTML (`servicios-detalle.html`) que detalle a fondo el servicio de 'Invitaciones Digitales'. Debe reutilizar las clases y variables de `index.css`, mantener la navegación fija, el soporte bilingüe `data-i18n` y la estética cinematográfica minimalista."*
