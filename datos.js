/* =====================================================================
   BEAUTY CENTER · DATOS DEL SITIO
   ---------------------------------------------------------------------
   Este es el único archivo que hay que editar para actualizar
   servicios, precios, horarios y videos. No hace falta tocar index.html.

   REGLAS PARA EDITAR (importante, si no el sitio no carga):
   - Todo texto va entre comillas dobles:  "así"
   - Cada elemento de una lista termina con coma, excepto el último
   - No borrar llaves { } ni corchetes [ ]
   - Después de editar, guardar el archivo y recargar la página
   ===================================================================== */


/* ---------- DATOS DEL NEGOCIO ---------- */
const NEGOCIO = {
  nombre: "Beauty Center",

  // WhatsApp con código de país, sin "+" ni espacios
  whatsapp: "59173058812",
  telefono: "73058812",

  direccion: "Calacoto-Montenegro: Calle Jaime Mendoza, esquina Enrique Peñaranda Nro 992, Torre Chronos, La Paz, Bolivia",

  // Texto que se usa para ubicar el punto en Google Maps
  mapa: "Torre Chronos, Calle Jaime Mendoza, Calacoto, La Paz, Bolivia",
  // Opcional: pegar aquí el enlace "Compartir" de Google Maps para que "Abrir en Google Maps" vaya al punto exacto
  mapaEnlace: "",

  horario: "9:00 am a 7:00 pm",
  dias: "",                       // Ejemplo: "Lunes a sábado". Dejar vacío si no se quiere mostrar.
  atencion: "Previa cita",

  facebook: "https://www.facebook.com/profile.php?id=61552184340074",
  tiktok: "https://www.tiktok.com/@beautycenterbolivia",

  // Mensaje que aparece escrito cuando el cliente toca un botón de WhatsApp
  mensajeWhatsapp: "Hola, quisiera agendar una cita en Beauty Center."
};


/* ---------- SECCIÓN "NOSOTROS" ---------- */
const SOBRE = {
  titulo: "Un solo lugar para tu sonrisa y tu imagen",
  parrafos: [
    "En Beauty Center reunimos servicio dental, armonización facial y estética en un mismo centro, en Calacoto.",
    "Atendemos previa cita para dedicar a cada paciente el tiempo que necesita. Escríbenos por WhatsApp y coordinamos el día y la hora que mejor te acomode."
  ],
  // Opcional: nombre y especialidad de la profesional. Ejemplo: "Dra. Nombre Apellido, Odontóloga"
  profesional: ""
};


/* ---------- SERVICIOS Y PRECIOS ----------
   Cada bloque es una categoría. Dentro de "items" se agregan los servicios.

   Cada servicio se escribe así (copiar y pegar la línea completa):
     { nombre: "Limpieza dental", precio: "Bs. 150", detalle: "Incluye pulido" },

   - "precio" es opcional: si se omite, se muestra "Consultar".
   - "detalle" es opcional: es una línea corta debajo del nombre.
   - Si "items" queda vacío [], la categoría muestra "Consulta el detalle y los
     precios por WhatsApp".
   - "icono" puede ser: "sonrisa", "rostro" o "brillo".
*/
const SERVICIOS = [
  {
    icono: "sonrisa",
    titulo: "Servicio dental",
    descripcion: "Atención odontológica para el cuidado y la estética de tu sonrisa.",
    items: [
      // { nombre: "Nombre del servicio", precio: "Bs. 000", detalle: "" },
    ]
  },
  {
    icono: "rostro",
    titulo: "Armonización facial",
    descripcion: "Tratamientos para equilibrar y realzar las facciones de tu rostro.",
    items: [
      // { nombre: "Nombre del servicio", precio: "Bs. 000", detalle: "" },
    ]
  },
  {
    icono: "brillo",
    titulo: "Estética",
    descripcion: "Tratamientos estéticos personalizados.",
    items: [
      // { nombre: "Nombre del servicio", precio: "Bs. 000", detalle: "" },
    ]
  }
];


/* ---------- FOTOS DEL CONSULTORIO ----------
   Para agregar una foto: subirla a la carpeta "assets" y añadir una línea así:
     { archivo: "assets/nombre-de-la-foto.jpg", descripcion: "Texto breve que describe la foto" },
   Recomendado: formato JPG, de 800 a 1200 píxeles de ancho, menos de 500 KB.
*/
const FOTOS = [
  { archivo: "assets/consultorio-recepcion.jpg", descripcion: "Recepción de Beauty Center con el letrero dorado del centro" },
];


/* ---------- VIDEOS DEL CONSULTORIO ----------
   OPCIÓN A · Videos de TikTok incrustados
   Pegar el enlace COMPLETO de cada video (debe contener "/video/" y un número).
   Ejemplo:
     "https://www.tiktok.com/@beautycenterbolivia/video/7301234567890123456",
   Los enlaces cortos (vm.tiktok.com) no funcionan: abrir el video en el
   navegador y copiar la dirección larga.
*/
const VIDEOS_TIKTOK = [
];

/* OPCIÓN B · Videos propios (MP4 guardados en la carpeta "assets")
   Recomendado: verticales, de 10 a 30 segundos y menos de 10 MB cada uno.
   Ejemplo:
     { archivo: "assets/consultorio.mp4", portada: "assets/consultorio.jpg" },
   ("portada" es una foto opcional que se ve antes de reproducir.)
*/
const VIDEOS_PROPIOS = [
];
