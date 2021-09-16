let initCards = new Promise((res, rej) => {
    let shopCardTemplate = document.getElementById(card);
    let wrapper = document.getElementsByClassName('wrapper')[0];

    for (let index = 0; index < 3; index++) {
        let cardClone = card.content.cloneNode(true);
        wrapper.appendChild(cardClone);   
    }
    res('done')
});

initCards
    .then(res => {
        let addToCartButtonArr = document.querySelectorAll('#addToCart');

        addToCartButtonArr.forEach(el => {
            el.onclick = () => {
                alert('Предмет успешно добавлен в корзину!');
            } 
        })
    },
    error => {
        alert('Error on click function!');
    }
);


