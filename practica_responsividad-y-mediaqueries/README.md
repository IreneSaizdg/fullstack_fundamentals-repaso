## Responsividad y Media Queries en CSS
Prácticas realizada por Irene Saiz Lodoso para el bootcamp de FullStack Developer.


---
### Diseño de una Página Web Responsive con HTML Semántico y CSS

#### **Objetivo:**
Crear una página web responsive que muestre información sobre un restaurante ficticio. La página debe adaptarse correctamente a diferentes tamaños de pantalla (móvil, tablet y escritorio) y utilizar etiquetas HTML semánticas. El diseño deberá incluir una cabecera con navegación, una sección de bienvenida, un menú de platos, una galería de imágenes y un pie de página.

#### **Instrucciones:**

1. **Estructura HTML:**
   - Utiliza etiquetas HTML semánticas para organizar el contenido.
   - La estructura básica de la página debe incluir las siguientes secciones:
     - `header`: Contendrá el logo del restaurante y un menú de navegación.
     - `main`: Dividido en varias secciones:
       - `section` (bienvenida): Un mensaje de bienvenida con una breve descripción del restaurante.
       - `section` (menú): Una lista de los platos principales ofrecidos, con sus descripciones y precios.
       - `section` (galería): Una galería de imágenes de los platos o el ambiente del restaurante.
     - `footer`: Incluirá la información de contacto y enlaces a redes sociales.

2. **Contenido Detallado:**
   - **Cabecera (`header`):**
     - Incluye el nombre del restaurante a la izquierda como un `h1`.
     - Un menú de navegación con enlaces a las diferentes secciones de la página: "Inicio", "Menú", "Galería", "Contacto".
   - **Sección de Bienvenida (`section`):**
     - Un mensaje de bienvenida dentro de un `article`, con un `h2` y un párrafo describiendo el restaurante.
   - **Sección del Menú (`section`):**
     - Utiliza una lista no ordenada (`ul`) para mostrar al menos 5 platos. Cada plato debe tener un nombre en `h3`, una breve descripción en un `p` y un precio.
   - **Sección de la Galería (`section`):**
     - Inserta al menos 4 imágenes en una cuadrícula utilizando `figure` y `figcaption` para cada una.
   - **Pie de Página (`footer`):**
     - Incluye la dirección del restaurante, un número de teléfono, un correo electrónico y enlaces a redes sociales (puedes usar íconos como placeholders).

3. **Estilos CSS:**
   - Aplica estilos básicos a la página (colores, tipografía, espaciado) para que se vea profesional y atractiva.
   - **Diseño Responsive con Media Queries:**
     - **Pantalla Móvil (max-width: 600px):**
       - El menú de navegación debe colapsar en un menú tipo hamburguesa.
       - Las secciones deben apilarse una sobre la otra en una sola columna.
       - La galería de imágenes debe mostrarse en una sola columna.
     - **Pantalla de Tablet (max-width: 900px):**
       - El menú de navegación debe mostrarse en línea.
       - Las secciones pueden mostrarse en dos columnas donde sea apropiado.
       - La galería de imágenes debe mostrarse en dos columnas.
     - **Pantalla de Escritorio (min-width: 901px):**
       - El contenido debe estar centrado y con un ancho máximo de 1200px.
       - El menú debe mostrarse en línea horizontal.
       - La galería de imágenes debe mostrarse en una cuadrícula de tres columnas.

4. **Interactividad Básica:**
   - Añade un efecto hover a los elementos de navegación.
   - Añade una transición suave para el cambio de tamaño de las imágenes en la galería al hacer hover.

#### **Resultado Esperado:**

Al finalizar, los estudiantes deben haber creado una página web que:

- **Es semánticamente correcta**: Usa etiquetas como `header`, `nav`, `section`, `article`, `footer`, etc.
- **Es completamente responsive**: Se adapta bien a pantallas de móviles, tablets y escritorios utilizando media queries.
- **Tiene un diseño atractivo y funcional**: Los elementos de la página están bien organizados y los estilos son coherentes.
- **Incluye interactividad básica**: Efectos de hover en los elementos interactivos para mejorar la experiencia del usuario.

Este ejercicio permitirá a los estudiantes aplicar conceptos clave de diseño web responsive y practicar la utilización de HTML semántico, dos habilidades fundamentales en el desarrollo web moderno.