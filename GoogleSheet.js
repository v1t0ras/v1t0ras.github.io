const scriptURL = 'https://script.google.com/macros/s/AKfycby3oBzDQTkjcTOJ1EuyEpkkD77EtdIcpH5HC5YBHv4pcIqQh28HfBp8Y5XnvaJobnU/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => { 
    alert("Mensagem enviada com sucesso!" );
    form.reset();

    window.location.reload();
    console.log("Olá, mundo!");
  })
  .catch(error => console.error('Error!', error.message))
})