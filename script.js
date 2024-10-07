const form = document.querySelector(".fale-conosco");
const mascaraFormulario = document.querySelector(".mascara-formulario")
const button = document.querySelector(".contato")
const logoMario = document.querySelector('.imagem_mario')
const audio = document.querySelector(".audio")
const audio2 = document.querySelector('.audio2')
const audio3 = document.querySelector('.audio3')
const audio4 = document.querySelector('.audio4')

function abrirFormulario() {
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascaraFormulario.style.visibility = "visible"
  audio.play()
}

function fecharFormulario() {
  form.style.left = "-300px"
  mascaraFormulario.style.visibility = "hidden"
  audio2.play()
}

function nossosServiços() {
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascaraFormulario.style.visibility = "visible"
  audio.play()
}

function playAudio3() {
  audio3.play()
}

function playAudio4() {
 audio4.play()
}

function playAudioZap() {
  const audioZap = document.querySelector('.zap-mp3')
  audioZap.play()
}