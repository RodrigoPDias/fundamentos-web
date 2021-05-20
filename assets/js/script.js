// Js Contato
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa =document.querySelector('#mapa')
const btnMobile = document.getElementById('btn-mobile');

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length <3){
       txt.innerHTML = 'Nome Invalido'
       txt.style.color = 'Red'
    }else {
        txt.innerHTML = 'Nome Valido'
        txt.style.color = '#F7E59D'
        nomeOk = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail invalido '
        txtEmail.style.color = 'Red'
    }else {
        txtEmail.innerHTML = 'E-mail Valido'
        txtEmail.style.color = '#F7E59D'
        emailOK = true
    }
}
function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
     } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
     }
}

function enviar() {
    if( nomeOk == true && emailOK == true && assuntoOK == true){
        alert ('Formulário enviado com sucesso!')
    }else if (nomeOk == false && emailOK == true && assuntoOK == true){
        alert('Preencha o nome')
    }else if (nomeOk == true && emailOK == false && assuntoOK == true){
        alert('Preencha o E-mail')
    }else if (nomeOk == true && emailOK == true && assuntoOK == false){
        alert('Preencha o assunto')
    }else {
        alert('Preencha o formulario corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}
//menujs
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);