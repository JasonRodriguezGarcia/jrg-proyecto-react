import React from "react";

// Implementar este componente. ¿Porqué esta usando 'dangerouslySetInnerHTML'?
// El uso de dangerouslySetInnerHTML en React se utiliza para inyectar HTML sin procesar directamente 
// en el DOM. Esto puede ser útil si quieres incluir contenido HTML que proviene de una fuente externa
// o dinámica, como un CMS (Sistema de Gestión de Contenidos) o datos JSON, pero necesitas tener 
// cuidado con este enfoque debido a riesgos de seguridad.

// ¿Por qué se llama "dangerouslySetInnerHTML"?
// El nombre "dangerously" se refiere a los riesgos de seguridad involucrados al usarlo, especialmente
// en términos de ataques de inyección de código, como XSS (Cross-Site Scripting). Si se inyecta 
// contenido malicioso dentro del HTML, un atacante podría ejecutar scripts JavaScript maliciosos
// que roben información o alteren el comportamiento de la página.

// En React, dangerouslySetInnerHTML es una propiedad que se utiliza para insertar HTML sin procesar directamente dentro de 
// un componente. React, por defecto, sanitiza cualquier contenido HTML para evitar inyecciones de código malicioso (como 
// ataques XSS), lo que hace que no puedas incluir HTML crudo en los elementos sin que sea escapado.

// Cuando usas dangerouslySetInnerHTML, React no escapará el contenido HTML, y el contenido HTML se renderizará tal como está, 
// lo que puede ser útil en algunos casos, como mostrar contenido dinámico o contenido HTML que proviene de una fuente confiable.
// El uso de dangerouslySetInnerHTML se marca como "peligroso" porque, si no se controla adecuadamente, puede dar lugar a 
// vulnerabilidades de seguridad. Por ejemplo, si el contenido HTML proviene de una fuente no confiable (como un usuario o 
// una base de datos), podría contener JavaScript malicioso que se ejecute en el navegador.

// En tu caso, el código muestra cómo insertar HTML crudo dentro del componente HtmlDisplay, permitiendo que el texto con HTML 
// (como las etiquetas <h2>, <p>, y <strong>) se renderice correctamente.
// Si el contenido que estás mostrando proviene de una fuente confiable, puedes usar dangerouslySetInnerHTML, pero siempre 
// asegúrate de que el contenido es seguro.

function Dangerously() {
  const rawHtml = "<h2 style='color:blue'>Hola testing</h2><p>Este texto es <strong>bold</strong>.</p>";

  return (
    <div>
      <h1>Displaying Raw HTML</h1>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </div>
  );
}

export default Dangerously;