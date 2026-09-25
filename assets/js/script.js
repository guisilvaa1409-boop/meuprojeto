const imgsDestaques = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq7im23YtYaeJPmCbQN98DDajLrkscKgL-OcguvlFaA&s=10" , "./assets/img/image.png"]


let ImagemAtual = 0 ;

const imagem = document.querySelector("#imagemDestaque")



setInterval(function (){
    ImagemAtual++;
    if(ImagemAtual >= imgsDestaques.length){
        ImagemAtual = 0;
    }

    imagem.src = imgsDestaques[ImagemAtual]


}, 5000)   