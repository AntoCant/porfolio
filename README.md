# Portafolio Personal - Antonio Canteros

Este proyecto es mi portafolio personal, diseñado para mostrar mis proyectos, habilidades y experiencia profesional como desarrollador. La web está construida con tecnologías modernas, permitiendo una navegación rápida y una presentación clara de mi perfil profesional.

## Descripción del Proyecto

Este portafolio está pensado para destacar mis trabajos y permitir a potenciales empleadores y colaboradores conocer más sobre mis competencias técnicas y proyectos personales. La interfaz es intuitiva y está optimizada para una experiencia fluida tanto en dispositivos de escritorio como móviles.

Visítalo en <a href="https://antoniocanteros.com">antoniocanteros.com</a>.

## Características Principales

<ul>
  <li><strong>Página de proyectos</strong>: Explora los proyectos que he desarrollado.</li>
  <li><strong>Sección de contacto</strong>: Posibilidad de contacto directo para oportunidades laborales o colaboraciones.</li>
  <li><strong>Presentación de habilidades</strong>: Detalle de mis competencias en frontend, backend y tecnologías relacionadas.</li>
</ul>

## Tecnologías Utilizadas

El portafolio está construido con las siguientes tecnologías:

<ul>
  <li><strong>Astro</strong>: Framework para el desarrollo de sitios estáticos rápidos y eficientes.</li>
  <li><strong>JavaScript</strong>: Lenguaje principal para la interacción y funcionalidades del frontend.</li>
  <li><strong>CSS</strong>: Diseño y estilización del sitio.</li>
  <li><strong>Docker</strong>: Para facilitar la contenedorización y despliegue del proyecto.</li>
</ul>

## Requisitos Previos

Antes de ejecutar el proyecto localmente, asegúrate de tener instaladas las siguientes herramientas:

<ul>
  <li><strong>Node.js (v16 o superior)</strong>: <a href="https://nodejs.org">Descargar Node.js</a></li>
  <li><strong>Docker</strong> (opcional, solo si deseas usar contenedores): <a href="https://www.docker.com/">Instalar Docker</a></li>
</ul>

## Instalación y Configuración Local

Sigue los siguientes pasos para configurar y ejecutar el proyecto en tu máquina local:

<ol>
  <li><strong>Clonar el repositorio:</strong>
    <pre><code>git clone https://github.com/AntoCant/porfolio.git</code></pre>
  </li>

  <li><strong>Navegar al directorio del proyecto:</strong>
    <pre><code>cd porfolio</code></pre>
  </li>

  <li><strong>Instalar dependencias:</strong>
    <p>Ejecuta el siguiente comando para instalar todas las dependencias necesarias:</p>
    <pre><code>npm install</code></pre>
  </li>

  <li><strong>Ejecutar el entorno de desarrollo:</strong>
    <p>Inicia el servidor local para ver el proyecto en tu navegador:</p>
    <pre><code>npm run dev</code></pre>
  </li>

  <li><strong>Acceder al proyecto:</strong>
    <p>El proyecto estará disponible en <a href="http://localhost:3000">http://localhost:3000</a>.</p>
  </li>
</ol>

## Uso con Docker

Si prefieres usar Docker para ejecutar el proyecto en un contenedor, sigue estos pasos:

<ol>
  <li><strong>Construir la imagen de Docker:</strong>
    <pre><code>docker build -t porfolio .</code></pre>
  </li>

  <li><strong>Ejecutar el contenedor:</strong>
    <pre><code>docker run -p 3000:3000 porfolio</code></pre>
  </li>

  <li><strong>Acceder al proyecto:</strong>
    <p>El proyecto estará disponible en <a href="http://localhost:3000">http://localhost:3000</a> usando el navegador.</p>
  </li>
</ol>

## Estructura del Proyecto

<pre><code>
/porfolio
│
├── /.astro           # Configuraciones generadas por Astro
├── /.vscode          # Configuraciones específicas de Visual Studio Code
├── /dist             # Archivos generados para producción
├── /nginx            # Configuraciones para el servidor Nginx
├── /node_modules     # Dependencias del proyecto (manejadas por npm)
├── /public           # Archivos estáticos públicos (imágenes, íconos, etc.)
├── /src              # Código fuente del proyecto
│   ├── /assets       # Archivos multimedia como imágenes, fuentes, etc.
│   ├── /collections  # Colecciones de datos, posiblemente para CMS o markdown
│   ├── /components   # Componentes reutilizables en la web
│   ├── /layouts      # Plantillas de diseño para páginas
│   └── /pages        # Páginas de la web
│
├── env.d.ts          # Definiciones de tipos para TypeScript
├── .dockerignore     # Ignora archivos en el contexto de Docker
├── .editorconfig     # Configuración de estilo de código
├── .gitignore        # Archivos y carpetas ignorados por Git
├── .node-version     # Versión de Node.js utilizada en el proyecto
├── astro.config.mjs  # Configuración principal de Astro
├── biome.json        # Configuración de Biome (linter/formateador)
├── Dockerfile        # Instrucciones para construir la imagen Docker del proyecto
├── LICENSE           # Licencia del proyecto
├── package.json      # Configuración del proyecto y sus dependencias
├── package-lock.json # Bloqueo de versiones de las dependencias
├── pnpm-lock.yaml    # Bloqueo de versiones para el manejador pnpm
├── tailwind.config.mjs # Configuración de Tailwind CSS
└── tsconfig.json     # Configuración de TypeScript
</code></pre>


## Testing

<p>Actualmente el proyecto no incluye tests automatizados. Sin embargo, se recomienda añadir tests unitarios y de integración para futuras mejoras.</p>

## Despliegue

<p>El proyecto puede ser desplegado en cualquier servicio que soporte aplicaciones estáticas como Vercel, Netlify o a través de Docker en un servidor propio. A continuación te indico los pasos básicos para despliegue:</p>

<ol>
  <li><strong>Generar la versión de producción:</strong>
    <pre><code>npm run build</code></pre>
  </li>

  <li><strong>Subir los archivos generados</strong> en la carpeta <code>dist/</code> al servidor o plataforma de hosting estático de tu elección.</li>
</ol>

## Contacto

<p>Si tienes alguna pregunta, sugerencia o propuesta de colaboración, no dudes en contactarme a través de mi página de contacto o por correo electrónico: <a href="mailto:antonio.canteros.alberto@gmailcom">Mi Mail</a>.</p>

## Licencia

<p>Este proyecto está licenciado bajo la Licencia Apache 2.0.</p>
