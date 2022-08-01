window.onload= ()=>{
    let cardImage = document.querySelectorAll('.card-photo');
    for(let x=0; x< cardImage.length;x++){
        cardImage[x].setAttribute('src', `images/persona-${x}.jpg`);
    }
}