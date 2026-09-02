export const openclawContact = {
  name: "Santiago Arreche",
  email: "sarreche@gmail.com",
  updatedAt: "2 de septiembre de 2026",
};

export const openclawPrivacySections = [
  {
    title: "Responsable y alcance",
    paragraphs: [
      "Santiago Arreche administra OpenClaw Personal, una instalación de OpenClaw para asistirlo con su propio correo y calendario. Esta integración es de uso personal y no ofrece registro público ni acceso a cuentas de terceros.",
      "Esta política describe esa instalación y sus conexiones. No es la política del proyecto OpenClaw ni representa a Google, OpenRouter o Telegram.",
    ],
  },
  {
    title: "Datos de Google y finalidad del acceso",
    paragraphs: [
      "La cuenta se conecta mediante la autorización OAuth de Google. La integración puede acceder a la dirección de correo de la cuenta, mensajes, remitentes, destinatarios, asuntos, contenido y etiquetas de Gmail; también a calendarios y a los datos de sus eventos, como títulos, horarios, descripciones y participantes. El acceso efectivo depende de los permisos concedidos y de las herramientas utilizadas.",
      "Estos datos se utilizan para buscar y resumir mensajes, consultar la agenda y realizar las acciones de correo o calendario que solicite el titular. Los permisos concedidos pueden permitir modificaciones: una consulta de lectura no convierte la integración en una herramienta técnicamente limitada a solo lectura.",
      "La aplicación utiliza credenciales OAuth y tokens de acceso y renovación. No solicita ni almacena la contraseña de la cuenta de Google. La contraseña local que protege las credenciales de la integración es independiente de la contraseña de Google.",
    ],
  },
  {
    title: "Procesamiento con inteligencia artificial y otros servicios",
    paragraphs: [
      "OpenClaw se ejecuta en el equipo del titular. Para responder a una solicitud, puede enviar instrucciones, fragmentos de correos, información de eventos y resultados de herramientas al proveedor de inteligencia artificial seleccionado. La configuración contempla Google Gemini y OpenRouter; cuando se utiliza OpenRouter, también puede intervenir el proveedor que atiende el modelo elegido, incluidas las alternativas configuradas.",
      "Si la conversación se mantiene por Telegram, los mensajes y los resultados que se compartan por ese canal también se transmiten a Telegram. Por lo tanto, ejecutar el asistente en un equipo propio no significa que todo el procesamiento sea local.",
      "La información obtenida de Google se utiliza para las funciones solicitadas por el titular. Esta integración no tiene como finalidad vender esos datos, utilizarlos para publicidad ni entrenar modelos de propósito general. Su uso debe respetar la Política de Datos de Usuario de los Servicios de API de Google, incluidas sus restricciones de Uso Limitado. El titular debe elegir proveedores y ajustes de tratamiento compatibles con estas condiciones.",
      "Las condiciones de almacenamiento y tratamiento de los servicios externos dependen del proveedor y de la configuración elegidos. Esta política no garantiza que todos los proveedores o modelos tengan la misma retención ni que ofrezcan retención cero.",
    ],
  },
  {
    title: "Almacenamiento y conservación",
    paragraphs: [
      "Las credenciales de la integración se guardan en el equipo del titular mediante el almacén cifrado de gog. El servicio local recibe la contraseña necesaria para abrirlo. Los archivos de configuración y el acceso al equipo deben mantenerse protegidos.",
      "Las conversaciones, resultados y registros pueden conservar copias de información consultada según la configuración de OpenClaw. Los mensajes enviados por Telegram y los datos procesados por proveedores externos quedan sujetos, además, a las opciones de historial y retención de esos servicios. No se establece un plazo único que cubra todos esos sistemas.",
      "Este sitio web es informativo: no aloja el gateway de OpenClaw, no recibe las credenciales OAuth de esta instalación y no ofrece un formulario para subir correos, eventos o tokens.",
    ],
  },
  {
    title: "Revocar el acceso y eliminar información",
    paragraphs: [
      "El titular puede revocar la conexión desde la sección de conexiones con aplicaciones de terceros de su cuenta de Google, seleccionando OpenClaw Personal. Esto impide que la integración renueve el acceso, pero no elimina por sí solo las copias ya guardadas.",
      "Para eliminar esas copias es necesario revisar las credenciales, conversaciones y registros locales, el historial del canal utilizado y las opciones de eliminación de los proveedores que hayan intervenido. Para consultas sobre acceso, rectificación o eliminación, se puede contactar al responsable mediante el correo indicado en esta página.",
    ],
  },
  {
    title: "Visitas a esta web",
    paragraphs: [
      "El sitio personal utiliza Vercel Web Analytics y, en producción, Microsoft Clarity para analizar visitas e interacciones. Clarity puede registrar sesiones de navegación. Estos servicios corresponden a la web informativa, no son una conexión a Gmail o Calendar y tienen sus propias políticas de privacidad.",
      "No introduzcas credenciales, códigos de autorización ni contenido privado del asistente en las direcciones o formularios del sitio.",
    ],
  },
  {
    title: "Cambios y contacto",
    paragraphs: [
      "Esta política debe actualizarse si cambian las funciones, los proveedores o el tratamiento de los datos de la instalación. La fecha de actualización se muestra al inicio de la página. Las consultas pueden dirigirse a Santiago Arreche en sarreche@gmail.com.",
    ],
  },
] as const;
