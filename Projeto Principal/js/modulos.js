const paginas = [
  "oQueÉScrum.html",
  "PorqueUsarScrum.html",
  "manifestoAgil.html",
];

const atual = window.location.pathname.split("/").pop();
const idx = paginas.indexOf(atual);

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn && nextBtn) {
  if (idx > 0) {
    prevBtn.onclick = () => window.location.href = paginas[idx - 1];
  } else {
    prevBtn.style.display = "none";
  }

  if (idx < paginas.length - 1) {
    nextBtn.onclick = () => window.location.href = paginas[idx + 1];
  } else {
    nextBtn.style.display = "none";
  }
}
