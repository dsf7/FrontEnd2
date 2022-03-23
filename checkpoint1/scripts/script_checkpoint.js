let botaoCriar = document.getElementById("criar");

function criar() {
  let nomeLugar = document.getElementById("nomeLugar").value;
  let textoLugar = document.getElementById("textoLugar").value;
  let linkImagem = document.getElementById("linkImagem").value;
  let checkbox = document.getElementById("checkbox");
  let cardsPai = document.querySelector("div");
  let novoNo = document.createElement("div");
  let novoCard = document.createElement("div");
  let newImg = document.createElement("img");
  let newTitle = document.createElement("h5");
  newTitle.classList.add("card-title");
  newTitle.innerHTML = nomeLugar;
  newImg.setAttribute("src", linkImagem);
  newImg.classList.add("card-img-top");
  let newParagraph = document.createElement("p");
  newParagraph.classList.add("card-text");
  newParagraph.innerHTML = textoLugar;
  let imgParagraph = document.createElement("p");
  let imgLink = document.createElement("a");
  imgParagraph.appendChild(imgLink);
  imgLink.setAttribute("href", linkImagem);
  imgLink.innerHTML = "Link para imagem.";
  imgLink.classList.add("img-link");
  let buttonInfo = document.createElement("a");
  buttonInfo.classList.add("btn");
  buttonInfo.classList.add("btn-primary");
  buttonInfo.innerHTML = "Saiba mais sobre esse lugar.";
  novoCard.classList.add("card-body");
  novoNo.appendChild(newImg);
  novoCard.appendChild(newTitle);
  novoCard.appendChild(newParagraph);
  novoCard.appendChild(imgParagraph);
  novoCard.appendChild(buttonInfo);
  novoNo.appendChild(novoCard);
  novoNo.classList.add("card");
  novoNo.classList.add("col-{breakpoint}-auto");
  novoNo.classList.add("col-sm-4");
  novoNo.classList.add("col-12");

  //   novoNo.innerHTML = newCard;
  cardsPai.insertBefore(novoNo, cardsPai.childNodes[7]);
}

botaoCriar.addEventListener("click", function (evento) {
  evento.preventDefault();

  console.log(nomeLugar.value);
  console.log(textoLugar.value);
  console.log(linkImagem.value);

  console.log(checkbox.checked);

  criar();
});