
let botaoCriar = document.getElementById('criar');

function criar () {
    let nomeLugar = document.getElementById('nomeLugar').value;
    let textoLugar = document.getElementById('textoLugar').value;
    let linkImagem = document.getElementById('linkImagem').value;
    let checkbox = document.getElementById('checkbox');
    let cardsPai = document.getElementById("cardsPai");
    let newCard = `<div class="card col-{breakpoint}-auto col-sm-4 col-12">
    <img src="${linkImagem}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${nomeLugar}</h5>
    <p class="card-text">${textoLugar}</p>
    <p class="img-link">${linkImagem}</p>
    <a href="#" class="btn btn-primary">Saiba mais sobre esse lugar</a>
    </div>
    </div>`;
    let novoNo = document.createElement('div');
    novoNo.innerHTML = newCard;
    cardsPai.appendChild(novoNo);
}

botaoCriar.addEventListener('click', function(evento) {
    evento.preventDefault(); 
    
    console.log(nomeLugar.value);
    console.log(textoLugar.value);
    console.log(linkImagem.value);

    console.log(checkbox.checked);

    criar();
} )

