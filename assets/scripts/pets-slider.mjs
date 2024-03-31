const cards_container = document.querySelector('.pets__cards');
const pets_modal = document.querySelector('.pets__modal');
const pets_modal_content = pets_modal.querySelector('.pets__modal-content');
const pets_pagination = document.querySelector('.pets__pagination');
pets_modal.querySelector('.pets__modal-close').addEventListener('click', ()=>{
    pets_modal.style.display='none';
    pets_modal_content.innerHTML='';
})
let pets = ([
    {
        image: 'pets-katrine.png',
        name: 'Katrine',
        type: 'Cat',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Cat - British Shorthair',
        about: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.'
    },
    {
        image: 'pets-jennifer.png',
        name: 'Jennifer',
        type: 'Dog',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Dog - Labrador',
        about: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.'
    },
    {
        image: 'pets-woody.png',
        name: 'Woody',
        type: 'Dog',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Dog - Golden Retriever',
        about: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.'
    },
    {
        image: 'pets-sophia.png',
        name: 'Sophia',
        type: 'Dog',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Dog - Shih tzu',
        about: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.'
    },
    {
        image: 'pets-timmy.png',
        name: 'Timmy',
        type: 'Cat',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Cat - British Shorthair',
        about: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.'
    },
    {
        image: 'pets-charly.png',
        name: 'Charly',
        type: 'Dog',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Dog - Jack Russell Terrier ',
        about: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.'
    },
    {
        image: 'pets-scarlet.png',
        name: 'Scarlett',
        type: 'Dog',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Dog - Jack Russell Terrier',
        about: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.'
    },
    {
        image: 'pets-freddie.png',
        name: 'Freddie',
        type: 'Cat',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'Cat - British Shorthair',
        about: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.'
    },

    {
        image: 'missing_image.png',
        name: 'Test',
        type: 'TEST',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'TEST - Test',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, deserunt doloremque doloribus eligendi esse maiores maxime nihil nostrum odit possimus quasi quia repellendus sint soluta tempora vel veniam vitae? Vel.'
    },
    {
        image: 'missing_image.png',
        name: 'Test',
        type: 'TEST',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'TEST - Test',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, deserunt doloremque doloribus eligendi esse maiores maxime nihil nostrum odit possimus quasi quia repellendus sint soluta tempora vel veniam vitae? Vel.'
    },    
    {
        image: 'missing_image.png',
        name: 'Test',
        type: 'TEST',
        age: Math.random() < 0.5? Math.floor(Math.random()*10+1).toString()+' years':Math.floor(Math.random()*12+1).toString()+' months',
        breed: 'TEST - Test',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, deserunt doloremque doloribus eligendi esse maiores maxime nihil nostrum odit possimus quasi quia repellendus sint soluta tempora vel veniam vitae? Vel.'
    },
]).sort(() => Math.random() - 0.5);

function genCard(i) {
    return `<div class="pets__card splide__slide">
                <div class="pets__image"><img src="./assets/images/${pets[i].image}" alt="${pets[i].type} ${pets[i].name}"/></div>
                <div class="pets__name">${pets[i].name}</div>
                <button class="pets__card-button-${i} pets__card-button">Learn more</button>
            </div>`;
}
function genModal(i){
    return `<div class="pets__modal-image">
            <img src="./assets/images/${pets[i].image}" alt="${pets[i].type} ${pets[i].name}"/>
          </div>
          <div class="pets__modal-info">
            <div class="pets__modal-title">
              ${pets[i].name}
            </div>
            <div class="pets__modal-subtitle">
              ${pets[i].breed}
            </div>
            <div class="pets__modal-text">
              ${pets[i].about}
            </div>
            <ul class="pets__modal-other">
              <li class="pets__modal-other-item">
                <span>Age:</span> ${pets[i].age};
              </li>
              <li class="pets__modal-other-item">
                <span>Inoculations:</span> none
              </li>
              <li class="pets__modal-other-item">
                <span>Diseases:</span> none
              </li>
              <li class="pets__modal-other-item">
                <span>Parasites:</span> none
              </li>
            </ul>
          </div>`
}

function showModal(i) {
    pets_modal.style.display='block';
    pets_modal_content.innerHTML=genModal(i);
}

for (let i = 0; i < pets.length; i++) {
    cards_container.innerHTML += genCard(i);
}
document.addEventListener('DOMContentLoaded', () => {
    let splidePets = new Splide( '.splide', {
        type: 'slide',
        perMove: 1,
        perPage: 4,
        gap: '40px',
        arrows: false,
        pagination: false,
        grid: {
            rows: 2,
            cols: 1,
            gap : {
                row: '30px',
                col: '0rem',
            },
        },
        breakpoints:{
            1230:{
                perPage: 2,
                grid:{
                    rows: 3,
                }
            },
            768:{
                perPage: 1,  
            }
        }
    } ).mount(window.splide.Extensions);
    function getMaxPage(){
        let opt = splidePets.options;
        return Math.ceil((pets.length-opt.perPage*opt.grid.rows)/opt.grid.rows);
    }
    document.querySelector('.pets__arrow-left').addEventListener('click', ()=>{
        splidePets.go('-1');
        let page = Number(pets_pagination.innerHTML);
        if(page>1){
            page--;
            pets_pagination.innerHTML=page.toString();
        }
    })
    document.querySelector('.pets__arrow-right').addEventListener('click', ()=>{
        splidePets.go('+1');
        let page = Number(pets_pagination.innerHTML);
        if(page<=getMaxPage()){
            page++;
            pets_pagination.innerHTML=page.toString();
        }
    })
    document.querySelector('.pets__arrow-begin').addEventListener('click', ()=>{
        splidePets.go(0);
        pets_pagination.innerHTML=1;
    })
    document.querySelector('.pets__arrow-end').addEventListener('click', ()=>{
        splidePets.go(getMaxPage());
        pets_pagination.innerHTML=(getMaxPage()+1).toString();
    })
    for(let i =0;i<pets.length; i++){
        cards_container.querySelector(`.pets__card-button-${i}`).addEventListener('click', ()=>{
            showModal(i);
        })
    }
    splidePets.on('resize', ()=>{
        let page=Number(pets_pagination.innerHTML);
        if(page>getMaxPage()+1){
            pets_pagination.innerHTML=(getMaxPage()+1).toString();
            splidePets.go(getMaxPage());
        }
    })
})
