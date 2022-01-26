const title = document.querySelector('.nft-title');
const creatorName = document.querySelector('.name')
const image = document.querySelector('.equilibrium')

title.addEventListener('mouseover', highlight);
title.addEventListener('mouseout', unhighlight);
creatorName.addEventListener('mouseover', highlight);
creatorName.addEventListener('mouseout', unhighlight)

equilibrium.addEventListener('mousover', highlight);

function highlight(e) {
    e.target.style.color = 'turquoise';
}

function unhighlight(e) {
    e.target.style.color = 'white'
}