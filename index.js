const chk = document.getElementById("chk__tggl");
const body = document.getElementById("body");
const userLink = document.getElementById("ricocondee");
const h1 = document.querySelector("h1");
const aside = document.querySelector("aside");
const h3 = document.querySelectorAll("h3");
const p = document.querySelectorAll("p");
const strong = document.querySelectorAll("strong");
const li = document.querySelectorAll("li");
const footer = document.getElementById("footer");
const toggleIcon = document.getElementById("toggle__icon");
let myStorage = window.localStorage;

const handle__toggle = () => {
  if (chk.checked) {
    body.style.backgroundColor = "#303135";
    body.style.color = "#ffffffd0";
    toggleIcon.innerText = "light_mode";
    h1.style.color = "#ffffffd0";
    aside.style.backgroundColor = "#35363a";
    h3.forEach((h3) => {
      h3.style.color = "#ffffffd0";
    });
    p.forEach((p) => {
      p.style.color = "#ffffffd0";
    });
    li.forEach((li) => {
      li.style.color = "#ffffffd0";
    });
    strong.forEach((strong) => {
      strong.style.color = "#ff7f50";
    });
    footer.style.color = "#ffffffd0";
    userLink.style.color = "#ffffffd0";
  } else {
    body.style.backgroundColor = "#f4f4f4";
    body.style.color = "#333333";
    toggleIcon.innerText = "dark_mode";
    h1.style.color = "#333333";
    aside.style.backgroundColor = "#f4f4f4";
    h3.forEach((h3) => {
      h3.style.color = "#333333";
    });
    p.forEach((p) => {
      p.style.color = "#333333";
    });
    li.forEach((li) => {
      li.style.color = "#333333";
    });
    strong.forEach((strong) => {
      strong.style.color = "#333333";
    });
    footer.style.color = "#333333";
    userLink.style.color ="#333333"
  }
};
