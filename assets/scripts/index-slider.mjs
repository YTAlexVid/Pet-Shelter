// <div className="pets__card">
//     <div className="pets__image"><img src="./assets/images/pets-katrine.png" alt="Cat Katrine"/></div>
//     <div className="pets__name">Katrine</div>
//     <button className="pets__card-button">Learn more</button>
// </div>

const cards_container = document.querySelector('.pets__cards');
let pets=([
    {image: 'pets-katrine.png',
        name:'Katrine',
        type:'Cat'},
    {image: 'pets-jennifer.png',
        name:'Jennifer',
        type:'Dog'},
    {image: 'pets-woody.png',
        name:'Woody',
        type:'Dog'},
    {image: 'pets-sophia.png',
        name:'Sophia',
        type:'Dog'},
    {image: 'pets-timmy.png',
        name:'Timmy',
        type:'Cat'},
    {image: 'pets-charly.png',
        name:'Charly',
        type:'Dog'},
    {image: 'pets-scarlet.png',
        name:'Scarlett',
        type:'Dog'},
    {image: 'pets-freddie.png',
        name:'Freddie',
        type:'Cat'},
]).sort(() => Math.random() - 0.5);
function genBlock(i){
    return `<div class="pets__card splide__slide">
                <div class="pets__image"><img src="./assets/images/${pets[i].image}" alt="${pets[i].type} ${pets[i].name}"/></div>
                <div class="pets__name">${pets[i].name}</div>
                <button class="pets__card-button-${i} pets__card-button">Learn more</button>
            </div>`;
}

for(let i = 0; i<8;i++){
    cards_container.innerHTML+=genBlock(i);
}
document.addEventListener('DOMContentLoaded', ()=>{
    let splidePets = new Splide('.splide', {
        type: 'slide',
        perMove: 1,
        perPage: 1+(window.innerWidth>1230)+(window.innerWidth>768),
        pagination: false,
        arrows: false,
        gap: (window.innerWidth>768?'9%':'0'),
    }).mount();
    document.querySelectorAll('.pets__arrow-right').forEach(e => e.addEventListener('click', () => splidePets.go('+1')));
    document.querySelectorAll('.pets__arrow-left').forEach(e => e.addEventListener('click', () => splidePets.go('-1')));
    splidePets.on('resize', ()=>{
        splidePets.options = {
            perPage: 1+(window.innerWidth>1230)+(window.innerWidth>768),
            gap: (window.innerWidth>768?'9%':'0'),
        };
    })
})
