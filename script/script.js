window.addEventListener("load", sidenVises);

//konstanter
const tema2 = document.querySelector("#temamenu02");
const tema3 = document.querySelector("#temamenu03");
const tema4 = document.querySelector("#temamenu04");
const tema5 = document.querySelector("#temamenu05");
const tema6 = document.querySelector("#temamenu06");

const tema2Knap = document.querySelector("#buttonTema02");
const tema3Knap = document.querySelector("#buttonTema03");
const tema4Knap = document.querySelector("#buttonTema04");
const tema5Knap = document.querySelector("#buttonTema05");
const tema6Knap = document.querySelector("#buttonTema06");

function sidenVises() {
  console.log("sidenVises");
  tema02();
}

function tema02() {
  console.log("tema02 vises");

  //Gør tab synlig
  tema2.style.display = "inherit";
  tema3.style.display = "none";
  tema4.style.display = "none";
  tema5.style.display = "none";
  tema6.style.display = "none";

  //Styling af knappen
  tema2Knap.classList.add("cta2_selected");
  tema3Knap.classList = "cta2 ";
  tema4Knap.classList = "cta2 ";
  tema5Knap.classList = "cta2 ";
  tema6Knap.classList = "cta2 ";
}

function tema03() {
  console.log("tema03 vises");

  //Gør tab synlig
  tema2.style.display = "none";
  tema3.style.display = "inherit";
  tema4.style.display = "none";
  tema5.style.display = "none";
  tema6.style.display = "none";

  //Styling af knappen
  tema2Knap.classList = "cta2";
  tema3Knap.classList.add("cta2_selected");
  tema4Knap.classList = "cta2";
  tema5Knap.classList = "cta2";
  tema6Knap.classList = "cta2";
}

function tema04() {
  console.log("tema04 vises");

  //Gør tab synlig
  tema2.style.display = "none";
  tema3.style.display = "none";
  tema4.style.display = "inherit";
  tema5.style.display = "none";
  tema6.style.display = "none";

  //Styling af knappen
  tema2Knap.classList = "cta2";
  tema3Knap.classList = "cta2";
  tema4Knap.classList.add("cta2_selected");
  tema5Knap.classList = "cta2";
  tema6Knap.classList = "cta2";
}

function tema05() {
  console.log("tema05 vises");

  //Gør tab synlig
  tema2.style.display = "none";
  tema3.style.display = "none";
  tema4.style.display = "none";
  tema5.style.display = "inherit";
  tema6.style.display = "none";

  //Styling af knappen
  tema2Knap.classList = "cta2";
  tema3Knap.classList = "cta2";
  tema4Knap.classList = "cta2";
  tema5Knap.classList.add("cta2_selected");
  tema6Knap.classList = "cta2";
}

function tema06() {
  console.log("tema06 vises");

  //Gør tab synlig
  tema2.style.display = "none";
  tema3.style.display = "none";
  tema4.style.display = "none";
  tema5.style.display = "none";
  tema6.style.display = "inherit";

  //Styling af knappen
  tema2Knap.classList = "cta2";
  tema3Knap.classList = "cta2";
  tema4Knap.classList = "cta2";
  tema5Knap.classList = "cta2";
  tema6Knap.classList.add("cta2_selected");
}
