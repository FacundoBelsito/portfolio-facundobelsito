const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_lfrltif';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado');
      document.getElementById('form').reset(); // Reset del formulario
    })
    .catch((err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
