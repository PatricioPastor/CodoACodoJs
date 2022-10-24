
const input = document.getElementById('name');
const last = document.getElementById('lastname');
const email = document.getElementById('email');
const numTicket = document.getElementById('num-tickets');
const category = document.getElementById('category-input');
const price = document.getElementById('price');
const label = document.createElement('label');
let value = 200;
let i = 0;

function createMenuItem() {
    let p = document.createElement('p');
    p.textContent = value;
    p.classList.add('precio')
    return p;
}

function actPrice(){
    if(i == 0){
    price.appendChild(createMenuItem());
    value = value + 200;
    i++;
    }else{
        let newchild = price.appendChild(createMenuItem());
        parrafo = price.getElementsByTagName('p')[1];
        value = value + 200;
        price.replaceChild(newchild, parrafo);
    }
}

input.addEventListener('input', ()=>{
    actPrice();
});

last.addEventListener('input', ()=>{
    actPrice();
})
email.addEventListener('input', ()=>{
    actPrice();
})
category.addEventListener('input', ()=>{
    actPrice();
})
numTicket.addEventListener('input', ()=>{
    actPrice();
})
