window.onload= ()=>{
    let cardImage = document.querySelectorAll('.card-image');
    for(let x=0; x< cardImage.length;x++){
        cardImage[x].setAttribute('src', `images/destino-${x}.jpg`);
    }
}


let card = document.querySelectorAll('.card');
for(let x=0; x< card.length;x++){
    let title= document.querySelectorAll('#show');
    card[x].addEventListener('mouseover', ()=>{ 
        title[x].style.display='block';
    });

    card[x].addEventListener('mouseout', ()=>{ 
        title[x].style.display='none';
        
    });

    card[x].addEventListener('click',()=>{
        alert();
    })
}
