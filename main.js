const numTicket = document.getElementById('num-tickets');
const category = document.getElementById('category-input');
const price = document.getElementById('price');
const label = document.createElement('label');
const junior = document.getElementById('junior');
const traine = document.getElementById('traine');
const student = document.getElementById('students');
let value = 200;
let i = 0;

junior.addEventListener('click', ()=>{category.value = "junior";});
traine.addEventListener('click', ()=>{ category.value = "trainee"})
student.addEventListener('click', ()=>{ category.value = "estudiante" });

function createMenuItem() {
    let p = document.createElement('p');
    p.textContent = value;
    p.classList.add('precio')
    return p;
}


function actValue(){
    let ticket = numTicket.value;
    let off = category.value;
    let offValue = 0;

    if(off == "estudiante"){
        offValue = 0.8;
    } else if(off == "trainee"){
        offValue = 0.5;
    } else if(off == "junior"){
        offValue = 0.15;
    }else{
        offValue = 0;
    }

    value = 200 * ticket;
    value = value - (value * offValue)
    
}

function actPrice(){
    actValue();
    if(i == 0){
    price.appendChild(createMenuItem());
    i++;
    }else{
        let newchild = price.appendChild(createMenuItem());
        parrafo = price.getElementsByTagName('p')[1];
        price.replaceChild(newchild, parrafo);
    }
}

category.addEventListener('input', ()=>{
    actPrice();
})
numTicket.addEventListener('input', ()=>{
    actPrice();
})
