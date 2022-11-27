const elenco = [
  {
    nome: "James Cameron",
    caracter: "Diretor",
    foto: "./assets/jamecameron-PNG.webp",
  },
  {
    nome: "Sam Worthington",
    caracter: "Jake Sully",
    foto: "./assets/Sam.worthington.png",
  },
  {
    nome: "Zoe Saldana",
    caracter: "Neytiri",
    foto: "./assets/5480352.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg",
  },
  {
    nome: "Sigourney Weaver",
    caracter: "Kiri",
    foto: "./assets/image-w856.webp",
  },
  {
    nome: "Kate Winslet",
    caracter: "Ronal",
    foto: "./assets/Kate-winslet-medium.webp",
  },
  {
    nome: "Giovanni Ribisi",
    caracter: "Parker Selfridge",
    foto: "./assets/Wikia_MWC_-_Giovanni_Ribisi.webp",
  },
];

for (person of elenco) {
  geraCardElenco(person);
}

function geraCardElenco({ nome, caracter, foto }) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("elenco-card", "no-visible-blur");

  const fotoDiv = document.createElement("div");
  fotoDiv.classList.add("elenco-foto");
  fotoDiv.innerHTML = `<img src="${foto}" alt="Foto de ${nome}" />`;
  cardDiv.appendChild(fotoDiv);

  const nomeDiv = document.createElement("div");
  nomeDiv.classList.add("elenco-nome");
  nomeDiv.innerHTML = `<p>${nome}</p>
  <span class="elenco-cargo">${caracter}</span>`;
  cardDiv.appendChild(nomeDiv);

  document.getElementById("elenco-container").appendChild(cardDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  const timer = setInterval(trocaVisibilidadeCards, 13 * 1000);
});

const cards = document.querySelectorAll(".elenco-card");
let index = 0;

function trocaVisibilidadeCards() {
  if (index > cards.length - 1) index = 0;
  let anterior = index - 1;
  if (index === 0) anterior = cards.length - 1;
  cards[anterior].classList.add("no-visible-blur");
  cards[index].classList.remove("no-visible-blur");

  index++;
}
