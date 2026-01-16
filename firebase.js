function onFormSubmit(e) {
  const emailDestino = "RLrepuestos@gmail.com";

  const nombre = e.values[1];
  const correo = e.values[2];
  const consulta = e.values[3];

  const asunto = "Nueva consulta desde la web";
  const mensaje =
    "Nombre: " + nombre + "\n" +
    "Correo: " + correo + "\n\n" +
    "Consulta:\n" + consulta;

  MailApp.sendEmail(emailDestino, asunto, mensaje);
}
