const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const links = [...document.querySelectorAll('li')];

function lerp(start, end, t){
    return start * (1 - t) * end * t;
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseover', () => {
        for(let j = 0; j < links.length; j++){
            if(j !== i){
                links[j].style.opacity = 0.2;
                links[j].style.zIndex = 0;
            } else {
                links[j].style.opacity = 1;
                links[j].style.zIndex = 3;
            }
        }
    })

    links[i].addEventListener('mouseleave', () => {
        for(let i = 0; i < links.length; i++){
            links[i].style.opacity = 1;
        }
    })
}

let imgIndex = 0;
// Load Images into an array for reference
const images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
]

let imgArr = [];

// Canvas mousemove variables

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
})

images.forEach((image, idx) => {
    let elImage = newImage(300);
    elImage.src = image;
    elImage.classList.add('project-image');
    document.body.appendChild(elImage);
    imgArr.push(elImage)
})

// Draw images to the canvas

function drawImage(idx){
    let {width, height} = imgArr[idx].getBoundingClientRect();

    // makes images clearer for all screens
    canvas.width = width * window.devicePixelRatio; 
    canvas.width = height * window.devicePixelRatio; 
    
}