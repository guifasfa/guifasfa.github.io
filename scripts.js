


let item = 0;
const max = 79;

function proxImagem ( img ){
    fetch(`img/${img}.jpg`)
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            console.log(imageObjectURL);
            const proxImgTag = document.createElement("img");
            proxImgTag.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImgTag);
        })
}
window.onload = function(){
    for(let i=0; i<5; i++){
        proxImagem(i);
    }
}

window.onscroll = function(){
    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrollY + window.innerHeight;
    if (scrollPoint >= altura){
        proxImagem( item++ % max);
    }
}