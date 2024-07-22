function codificar() {
  let texto = document.getElementById("texto").value;
  let tituloTexto = document.getElementById("titulo-texto");
  let paragrafo = document.getElementById("paragrafo");
  let boneco = document.getElementById("boneco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloTexto.textContent = "Texto codificado com exito";
    paragrafo.textContent = "";
    boneco.src = "./img/encriptado.jpg";
  } else {
    boneco.src = "./img/boneco.png";
    tituloTexto.textContent = "Texto nao encontrado";
    paragrafo.textContent = "Digite o texto para codificar ou descodificar";
    swal("Ooops!", "Digite um Texto", "warning");
  }
}

function descodificar() {
  let texto = document.getElementById("texto").value;
  let tituloTexto = document.getElementById("titulo-texto");
  let paragrafo = document.getElementById("paragrafo");
  let boneco = document.getElementById("boneco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloTexto.textContent = "Texto descodificado com exito";
      paragrafo.textContent = "";
      boneco.src = "./img/desencriptado.jpg";
    } else {
      boneco.src = "./img/boneco.png";
      tituloTexto.textContent = "Texto nao encontrado";
      paragrafo.textContent = "Digite o texto para codificar ou descodificar";
      swal("Ooops!", "Digite um Texto", "warning");
    }
}
