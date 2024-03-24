// <div className="pets__card">
//     <div className="pets__image"><img src="./assets/images/pets-katrine.png" alt="Cat Katrine"/></div>
//     <div className="pets__name">Katrine</div>
//     <button className="pets__card-button">Learn more</button>
// </div>

const cards_container = document.querySelector('.pets__cards');
let pets=([
    {image: 'pets-katrine.png',
        name:'Katrine',
        type:'Cat',
        breed:'Cat - British Shorthair',
        about:'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.'},
    {image: 'pets-jennifer.png',
        name:'Jennifer',
        type:'Dog',
        breed:'Dog - Labrador',
        about:'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.'},
    {image: 'pets-woody.png',
        name:'Woody',
        type:'Dog',
        breed:'Dog - Golden Retriever',
        about:'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.'},
    {image: 'pets-sophia.png',
        name:'Sophia',
        type:'Dog',
        breed:'Dog - Shih tzu',
        about:'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.'},
    {image: 'pets-timmy.png',
        name:'Timmy',
        type:'Cat',
        breed:'Cat - British Shorthair',
        about:'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.'},
    {image: 'pets-charly.png',
        name:'Charly',
        type:'Dog',
        breed:'Dog - Jack Russell Terrier ',
        about:'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.'},
    {image: 'pets-scarlet.png',
        name:'Scarlett',
        type:'Dog',
        breed:'Dog - Jack Russell Terrier',
        about:'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.'},
    {image: 'pets-freddie.png',
        name:'Freddie',
        type:'Cat',
        breed:'Cat - British Shorthair',
        about:'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.'},
]).sort(() => Math.random() - 0.5);
function genBlock(i){
    return `<div class="pets__card splide__slide">
                <div class="pets__image"><img src="./assets/images/${pets[i].image}" alt="${pets[i].type} ${pets[i].name}"/></div>
                <div class="pets__name">${pets[i].name}</div>
                <button class="pets__card-button-${i} pets__card-button">Learn more</button>
            </div>`;
}
function showModal(i){
    console.log(i);
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
    for(let i=0;i<8;i++){
        cards_container
            .children.item(i)
            .children.item(2)
            .addEventListener('click', ()=>{
                showModal(i);
            })
    }
})
