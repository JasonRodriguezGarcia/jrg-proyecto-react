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