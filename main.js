const title = document.querySelector('.nft-title');
const creatorName = document.querySelector('.name')

title.addEventListener('mouseover', highlight);
title.addEventListener('mouseout', unhighlight);
creatorName.addEventListener('mouseover', highlight);
creatorName.addEventListener('mouseout', unhighlight)

function highlight(e) {
    e.target.style.color = 'turquoise';
}

function unhighlight(e) {
    e.target.style.color = 'white'
}