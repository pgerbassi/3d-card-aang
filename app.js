
// Moviment animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Moviment itens
const aang = document.querySelector('.aang img');
const circle = document.querySelector('.circle');
const title = document.querySelector('.title');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');

// Moving Animation event
container.addEventListener('mousemove', (e)=>{
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 14;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 14;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = `none`;
    //Popout event
    title.style.transform = 'translateZ(120px)';
    aang.style.transform = 'translateZ(150px) rotateY(15deg)';
    description.style.transform = 'translateZ(90px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(100px)';
});

// Animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease"; 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = 'translateZ(0px)';
    aang.style.transform = 'translateZ(0px) rotateY(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});