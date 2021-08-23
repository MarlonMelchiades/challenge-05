// ---- code validar campos de numeros ---- //

function somenteNumeros(num) {
  var er = /[^-,|^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

// ----- code step 41 ----- //

const botaoStep41 = document.getElementById("botao-step41");
const textoResposta41 = document.getElementById("text-response-step41");

botaoStep41.addEventListener("click", (e) => {
  e.preventDefault();
  let count = 55;
  let counter = setInterval(timer, 1000);

  function timer() {
    count = count - 5;
    if (count <= 0) {
      clearInterval(counter);
      return;
    }
  }

  function timer() {
    count = count - 5;
    if (count <= 0) {
      textoResposta41.innerHTML = '<h5 class="mt-3 mb-0">Acabou!</h5>';
      clearInterval(counter);
      return;
    }
    textoResposta41.innerHTML = '<h5 class="mt-3 mb-0">' + count + "</h5>";
  }
});

// ----- code step 42 ----- //

const botaoStep42 = document.getElementById("botao-step42");
const inputNumeroStep42 = document.getElementById("numero-step42");
const textoResposta42 = document.getElementById("text-response-step42");

botaoStep42.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputNumeroStep42.value.length === 0) {
    textoResposta42.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    let numero = parseInt(inputNumeroStep42.value);
    for (var i = 1; i <= numero + 1; i++) {
      setTimeout(
        (a) => {
          textoResposta42.innerHTML = '<h5 class="mt-3 mb-0">' + a + "</h5>";
          if (a === numero + 1) {
            textoResposta42.innerHTML =
              '<h5 class="mt-3 mb-0">É isso! Contei até ' +
              numero +
              " pra você.</h5>";
          }
        },
        i * 0700,
        i
      );
    }
  }
});

// ----- code step 43 ----- //

const botaoStep43 = document.getElementById("botao-step43");
const textoResposta43 = document.getElementById("text-response-step43");

botaoStep43.addEventListener("click", (e) => {
  e.preventDefault();
  let count = 40;
  let counter = setInterval(timer, 1000);

  function timer() {
    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
      return;
    }
  }

  function timer() {
    count = count - 1;
    if (count === 0) {
      textoResposta43.innerHTML =
        '<p class="mt-3 mb-0">Acabou! Foram esses os divisíveis!</p>';
      clearInterval(counter);
      return;
    } else if (count % 4 === 0) {
      textoResposta43.innerHTML =
        '<h5 class="mt-3 mb-0">' + count + " é divisível!</h5>";
      return;
    }
    textoResposta43.innerHTML = '<h5 class="mt-3 mb-0">' + count + "</h5>";
  }
});

// ----- code step 44 ----- //

const botaoStep44 = document.getElementById("botao-step44");
const inputInicio = document.getElementById("n1-step44");
const inputFim = document.getElementById("n2-step44");
const inputIncremento = document.getElementById("n3-step44");
const textoResposta44 = document.getElementById("text-response-step44");

botaoStep44.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputInicio.value.length === 0 ||
    inputFim.value.length === 0 ||
    inputIncremento.value.length === 0
  ) {
    textoResposta44.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    let nInicio = parseInt(inputInicio.value);
    let nFim = parseInt(inputFim.value);
    let nIncremento = parseInt(inputIncremento.value);
    for (var i = nInicio; i <= nFim + nIncremento; i = i + nIncremento) {
      setTimeout(
        (a) => {
          textoResposta44.innerHTML = '<h5 class="mt-3 mb-0">' + a + "</h5>";
          if (a > nFim) {
            textoResposta44.innerHTML =
              '<h5 class="mt-3 mb-0">É isso! Contei até ' +
              nFim +
              " pra você.</h5>";
          }
        },
        i * 0700,
        i
      );
    }
  }
});

// ----- code step 45 ----- //

const botaoStep45 = document.getElementById("botao-step45");
const inputInicio45 = document.getElementById("n1-step45");
const inputFim45 = document.getElementById("n2-step45");
const inputIncremento45 = document.getElementById("n3-step45");
const textoResposta45 = document.getElementById("text-response-step45");

botaoStep45.addEventListener("click", (e) => {
  e.preventDefault();
  let nInicio = parseInt(inputInicio45.value);
  let nFim = parseInt(inputFim45.value);
  let nIncremento = parseInt(inputIncremento45.value);
  if (
    inputInicio45.value.length === 0 ||
    inputFim45.value.length === 0 ||
    inputIncremento45.value.length === 0
  ) {
    textoResposta45.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else if (nInicio < nFim) {
    for (var i = nInicio; i <= nFim + nIncremento; i = i + nIncremento) {
      setTimeout(
        (a) => {
          textoResposta45.innerHTML = '<h5 class="mt-3 mb-0">' + a + "</h5>";
          if (a > nFim) {
            textoResposta45.innerHTML =
              '<h5 class="mt-3 mb-0">É isso! Contei até ' +
              nFim +
              " pra você.</h5>";
          }
        },
        i * 0700,
        i
      );
    }
  } else if (nInicio > nFim) {
    let count = nInicio + nIncremento;
    let counter = setInterval(timer, 0700);

    function timer() {
      count = count - nIncremento;
      if (count <= nFim) {
        clearInterval(counter);
        return;
      }
    }

    function timer() {
      count = count - nIncremento;
      if (count < nFim) {
        textoResposta45.innerHTML =
          '<h5 class="mt-3 mb-0">É isso! Contei de ' +
          nInicio +
          " até " +
          nFim +
          " pra você.</h5>";
        clearInterval(counter);
        return;
      }
      textoResposta45.innerHTML = '<h5 class="mt-3 mb-0">' + count + "</h5>";
    }
  }
});

// ----- code step 46 ----- //

const botaoStep46 = document.getElementById("botao-step46");
const textoResposta46 = document.getElementById("text-response-step46");

botaoStep46.addEventListener("click", (e) => {
  e.preventDefault();
  let soma = 0;
  for (var i = 2; i <= 100; i += 2) {
    soma += i;
  }
  textoResposta46.innerHTML =
    '<p class="mt-3 mb-0"> A soma desses pares será de ' + soma + "!</p>";
});

// ----- code step 47 ----- //

const botaoStep47 = document.getElementById("botao-step47");
const textoResposta47 = document.getElementById("text-response-step47");

botaoStep47.addEventListener("click", (e) => {
  e.preventDefault();
  let soma = 0;
  for (var i = 500; i > 0; i -= 50) {
    soma += i;
  }
  textoResposta47.innerHTML =
    '<p class="mt-3 mb-0"> A soma dessa sequência deu ' + soma + "!</p>";
});

// ----- code step 48 ----- //

const botaoStep48 = document.getElementById("botao-step48");
const textoResposta48 = document.getElementById("text-response-step48");

var counterVal = 0;

function incrementClick() {
  const click = ++counterVal;
  if (click == 6) {
    botaoStep48.textContent = "Calcular soma";
  }
}

const numerosStep48 = [];

botaoStep48.addEventListener("click", (e) => {
  e.preventDefault();
  let inputNumeroStep48 = document.getElementById("numero-step48");
  let numero = parseInt(inputNumeroStep48.value);
  if (inputNumeroStep48.value.length === 0) {
    textoResposta48.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    numerosStep48.push(numero);
    inputNumeroStep48.value = "";
    if (botaoStep48.textContent === "Calcular soma") {
      e.preventDefault();
      botaoStep48.addEventListener("click", (e) => {
        let total = 0;
        for (let i = 0; i < numerosStep48.length; i++) {
          total += numerosStep48[i];
        }
        textoResposta48.innerHTML =
          '<p class="mt-3 mb-0">A soma entre ' +
          numerosStep48[0] +
          ", " +
          numerosStep48[1] +
          ", " +
          numerosStep48[2] +
          ", " +
          numerosStep48[3] +
          ", " +
          numerosStep48[4] +
          ", " +
          numerosStep48[5] +
          ", e " +
          numerosStep48[6] +
          " é " +
          total +
          "!</p>";
        inputNumeroStep48.setAttribute("disabled", "disabled");
        botaoStep48.textContent = "Iniciar outra soma";
      });
    }
  }
  if (botaoStep48.textContent === "Iniciar outra soma") {
    location.reload();
  }
});

// ----- code step 49 ----- //

const botaoStep49 = document.getElementById("botao-step49");
const textoResposta49 = document.getElementById("text-response-step49");

var counterValStep49 = 0;

function incrementClickStep49() {
  const clickStep49 = ++counterValStep49;
  if (clickStep49 == 5) {
    botaoStep49.textContent = "Mostrar números";
  }
}

const numerosStep49 = [];

botaoStep49.addEventListener("click", (e) => {
  e.preventDefault();
  let inputNumeroStep49 = document.getElementById("numero-step49");
  let numero = parseInt(inputNumeroStep49.value);
  if (inputNumeroStep49.value.length === 0) {
    textoResposta49.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    numerosStep49.push(numero);
    inputNumeroStep49.value = "";
    if (botaoStep49.textContent === "Mostrar números") {
      e.preventDefault();
      let pares = [];
      let impares = [];
      botaoStep49.addEventListener("click", (e) => {
        for (let i = 0; i < numerosStep49.length; i++) {
          const numerosInput = numerosStep49[i];
          if (numerosInput % 2 === 0) {
            pares.push(numerosInput);
          } else {
            impares.push(numerosInput);
          }
        }
        textoResposta49.innerHTML =
          '<p class="mt-3 mb-0"> Os números ' +
          pares +
          " são pares! </br> E os números " +
          impares +
          " são ímpares!</p>";
        inputNumeroStep49.setAttribute("disabled", "disabled");
        botaoStep49.textContent = "Iniciar outra verificação";
      });
    }
  }
  if (botaoStep49.textContent === "Iniciar outra verificação") {
    location.reload();
  }
});

// ----- code step 50 ----- //

const botaoStep50 = document.getElementById("botao-step50");
const textoResposta50 = document.getElementById("text-response-step50");

botaoStep50.addEventListener("click", (e) => {
  e.preventDefault();
  const numerosPadrao = [];
  const arraySorteados = [];
  const maioresQue20 = [];
  const divisiveisPor3 = [];
  for (let i = 1; i <= 30; i++) {
    numerosPadrao.push(i);
  }
  for (let i = 0; i < 15; i++) {
    const numerosRandom = Math.floor(Math.random() * numerosPadrao.length);
    let numerosSorteados = numerosPadrao[numerosRandom];
    arraySorteados.push(numerosSorteados);
  }
  for (let i = 0; i < arraySorteados.length; i++) {
    const element = arraySorteados[i];
    if (element > 20) {
      maioresQue20.push(element);
    } else if (element % 3 === 0) {
      divisiveisPor3.push(element);
    }
  }
  textoResposta50.innerHTML =
    '<p class="mt-3 mb-0">Os números sorteados foram: </br>' +
    arraySorteados +
    ".</br> Os números maiores de 20 são: </br>" +
    maioresQue20 +
    ". </br>E os números divisíveis por 3 são: </br>" +
    divisiveisPor3 +
    "</p>";
});
