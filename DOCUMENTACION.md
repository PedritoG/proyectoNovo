# Documentación del Proyecto: proyectoNovo

Este documento detalla el proceso de pensamiento, las decisiones de diseño, la arquitectura técnica y la evolución de **proyectoNovo** (nombre definitivo tras la transición del demo conceptual inicial *Auria*), una plataforma web para una agencia de servicios digitales de alta gama.

---

## 1. Proceso de Pensamiento y Metodología de Desarrollo

Mi proceso como asistente de IA para abordar proyectos de desarrollo web sigue una estructura sistemática:

### Fase 1: Comprensión y Planificación
- **Análisis de Requerimientos:** Entender el objetivo principal (una web para vender servicios digitales), los servicios específicos (invitaciones, webs, tiendas, menús, tarjetas) y los requerimientos funcionales (bilingüe, precios estimativos, contacto).
- **Definición de Identidad (Branding):** Inicialmente se utilizó el nombre demo *Auria* como placeholder conceptual. Posteriormente se consolidó la marca oficial definitiva **proyectoNovo**, reflejando innovación, modernidad y un nuevo estándar en creación de productos digitales.
- **Estrategia Tecnológica:** Optar por **Vanilla HTML/CSS/JS**. Para un sitio tipo landing page enfocado en diseño y rendimiento, evitar frameworks pesados (como React/Next.js) garantiza una carga ultrarrápida, menor complejidad de mantenimiento y control total sobre el DOM y las animaciones.

### Fase 2: Construcción Incremental
- **Desarrollo en Módulos (Subagentes):** Para acelerar la creación inicial (V1), dividí el trabajo en especialistas:
  - Estructura semántica (HTML).
  - Sistema de diseño y estilos (CSS).
  - Lógica e interactividad (JavaScript).
- **Generación de Assets:** Utilicé herramientas de generación de imágenes por IA para crear mockups de alta calidad para el portafolio, evitando usar placeholders genéricos vacíos y dando una sensación de producto terminado.

### Fase 3: Refinamiento e Iteración
- **Adaptabilidad:** La iteración es clave. Cuando se solicitó un cambio radical de diseño (de un estilo vibrante y colorido a uno minimalista inspirado en SpaceX), fui capaz de reescribir la capa de presentación completa manteniendo la estructura funcional subyacente intacta.

---

## 2. Evolución del Diseño

El proyecto pasó por dos fases de diseño muy marcadas:

### Versión 1: Estética "Vibrante" (Rechazada)
- **Concepto:** Moderno, alegre, estilo "startup tecnológica".
- **Visuales:** Fondos claros (lavanda), acentos en múltiples tonos de morado y rosa, gradientes de texto, formas flotantes de fondo, tarjetas con efecto *glassmorphism* (vidrio esmerilado) y sombras pronunciadas.
- **Animaciones:** Rebotes, escalas, parallax en el mouse, contadores numéricos dinámicos.

### Versión 2: Estética "Cinematográfica Minimalista" (Estilo SpaceX - Actual)
- **Concepto:** Premium, serio, enfocado, restrictivo.
- **Inspiración:** Se analizó el código y el lenguaje visual del sitio oficial de SpaceX.
- **Visuales:**
  - **Fondo:** Negro oscuro (`#0a0a0a`), no negro puro, para reducir la fatiga visual.
  - **Texto:** Un sistema de opacidades de blanco azulado (`rgba(240, 240, 250, alpha)`) para establecer jerarquía visual sin usar grises genéricos.
  - **Tipografía:** Se reemplazó la fuente decorativa por **Inter** (una fuente geométrica y limpia, similar a D-DIN usada por SpaceX). Mucho uso de mayúsculas con espaciado amplio (*tracking*) para etiquetas.
  - **Estructura:** Eliminación total de sombras, gradientes y decoraciones superfluas. Las separaciones se hacen con bordes ultra finos (1px con baja opacidad) o con espacio en blanco.
  - **Secciones:** Diseño *Full-Viewport* (cada sección ocupa exactamente el alto de la pantalla, dando una sensación de presentación o diapositiva).
- **Animaciones:** Restringidas únicamente a *fade-ins* (apariciones suaves) manejadas por `IntersectionObserver`.

---

## 3. Arquitectura Técnica

El proyecto está construido sin dependencias externas, utilizando tecnologías web estándar (Vanilla).

### Estructura de Archivos
- `index.html`: Estructura semántica (HTML5).
- `index.css`: Sistema de diseño, variables CSS y media queries.
- `index.js`: Lógica del lado del cliente.
- `assets/`: Carpeta para imágenes (mockups del portafolio).

### Características Clave Implementadas

#### 1. Sistema Bilingüe (i18n) sin recargar la página
- **Cómo funciona:** Utiliza un atributo de datos personalizado `data-i18n` en el HTML.
- **Lógica:** El archivo `index.js` contiene un diccionario de traducciones (objeto `translations` con claves `es` y `en`). Al cambiar el idioma, un script recorre todos los elementos con el atributo `data-i18n` y reemplaza su `innerHTML` con el valor correspondiente del diccionario.
- **Persistencia:** La preferencia de idioma se guarda en el `localStorage` del navegador, por lo que el usuario mantiene su elección al recargar o volver a visitar la página.

#### 2. Animaciones al hacer Scroll (Scroll Reveal)
- **Tecnología:** `IntersectionObserver` API.
- **Implementación:** Los elementos tienen una clase base `.reveal` (opacidad 0, ligeramente desplazados hacia abajo). Cuando el observador detecta que entran en la ventana de visualización (*viewport*), les añade la clase `.visible`, desencadenando la transición CSS que los hace aparecer suavemente.
- **Staggering:** Se utilizan clases adicionales (`.reveal-delay-1`, etc.) para hacer que elementos contiguos (como las tarjetas de servicios) aparezcan uno tras otro, creando un efecto de cascada.

#### 3. Filtrado de Portafolio
- **Lógica:** Cada botón de filtro tiene un `data-filter` y cada tarjeta tiene un `data-category`. Al hacer clic, JavaScript añade o quita una clase `.hidden` a las tarjetas que no coinciden con la categoría seleccionada. CSS maneja la transición de ocultamiento usando escala y opacidad.

#### 4. Carrusel de Testimonios
- **Implementación:** Construido desde cero en JS. Contiene lógica para avanzar/retroceder manualmente mediante botones, navegar directamente a un testimonio usando los indicadores (puntos), y *Autoplay* (se pausa al pasar el mouse por encima y se reanuda al quitarlo). También incluye soporte para desplazamiento táctil (*swipe*) en dispositivos móviles midiendo eventos `touchstart` y `touchend`.

#### 5. Menú de Navegación "Pegajoso" (Sticky Header)
- **Lógica:** Detecta el evento `scroll`. Si se baja de cierta cantidad de píxeles, añade una clase `.nav--scrolled` que aplica un fondo semitransparente con desenfoque de fondo (`backdrop-filter: blur`).
- **Resaltado de Sección Activa:** A medida que el usuario hace scroll, calcula en qué sección se encuentra la ventana actual y añade la clase `.active` al enlace correspondiente en el menú.

#### 6. Diseño Responsivo
- **Enfoque:** Uso intensivo de `clamp()` en CSS para tamaños de fuentes adaptables dinámicamente según el ancho de pantalla.
- **Breakpoints:** Se definen *media queries* convencionales para ajustar grillas (CSS Grid) de 3 a 2, o a 1 columna en dispositivos móviles.
- **Menú Móvil:** Implementación de un menú tipo "hamburguesa" que despliega un menú a pantalla completa en pantallas pequeñas.

---

## 4. Conclusión

El proyecto demuestra cómo se puede construir una aplicación web de alto rendimiento y diseño premium utilizando exclusivamente herramientas web nativas. La transición de un diseño genérico a uno inspirado en SpaceX subraya la importancia del sistema de variables en CSS (Custom Properties) y cómo una estructura HTML semántica y limpia permite reescribir la capa visual por completo sin afectar la lógica o funcionalidad del sitio.

---

## 5. Registro de Cambios: Transición de Marca (Rebranding)

- **Nombre Demo Reemplazado:** *Auria* ➔ **`proyectoNovo`**.
- **Archivos Modificados:**
  - `index.html`: Actualización de etiquetas `<title>`, Open Graph tags (`og:title`), logo en el header (`proyectoNovo`), testimonios, correos de contacto (`info@proyectonovo.digital`) y copyright en el footer.
  - `index.js`: Actualización del diccionario de internacionalización (i18n), textos de testimonios en español e inglés, copyright de pie de página y claves de almacenamiento en navegador (`localStorage.getItem('proyectonovo-lang')`).
  - `index.css`: Actualización del encabezado del sistema de diseño y visualización sin text-transform uppercase para preservar el casing `proyectoNovo`.
  - `DOCUMENTACION.md`: Registro de la identidad de marca definitiva.
  - `agents.md`: Creación de la guía operativa y de arquitectura para asistentes y agentes de desarrollo IA.
