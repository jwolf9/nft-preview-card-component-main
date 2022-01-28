const title = document.querySelector('.nft-title');
const creatorName = document.querySelector('.name');
const mask = document.querySelector('.mask');
const eye = document.querySelector('.eye');
const equilibrium = document.querySelector('.container');

title.addEventListener('mouseover', highlight);
title.addEventListener('mouseout', unhighlight);
creatorName.addEventListener('mouseover', highlight);
creatorName.addEventListener('mouseout', unhighlight);

equilibrium.addEventListener('mouseover', activateImage);
equilibrium.addEventListener('mouseout', deactivateImage);

function activateImage(e) {
    mask.style.display = 'block';
    eye.style.display = 'block';
}

function deactivateImage(e) {
    mask.style.display = 'none';
    eye.style.display = 'none';
}

function highlight(e) {
    e.target.style.color = 'turquoise';
}

function unhighlight(e) {
    e.target.style.color = 'white';
}