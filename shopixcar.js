let moedasshopix = document.querySelector('#moedashopix');

//buttons
let btnadd1 = document.querySelector('#add1');
let btnadd2 = document.querySelector('#add2');
let btnadd3 = document.querySelector('#add3');
let btnadd4 = document.querySelector('#add4');
let btnadd5 = document.querySelector('#add5');
let btncomprar = document.querySelector('#comprar');

let carrinho = document.querySelector('.todosp');

let produtosComprados = document.querySelector('.prodcomprados');

//cards
let card1 = document.querySelector('#cardid1');
let card2 = document.querySelector('#cardid2');
let card3 = document.querySelector('#cardid3');
let card4 = document.querySelector('#cardid4');
let card5 = document.querySelector('#cardid5');

//criador e divs
let div3 = document.createElement('div');
let divcar = document.querySelector('#valcomp');

depositado = 0;

let meuCarrinho = 0;
parseFloat(card1);
parseFloat(card2);
parseFloat(card3);
parseFloat(card4);
parseFloat(card5);
card1 = 150.00;
card2 = 98.00;
card3 = 68.50;
card4 = 200.00;
card5 = 1000.00;



btnadd1.addEventListener('click', function(){
    meuCarrinho = meuCarrinho + card1;
    
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let btnremov = document.createElement('button');
    
    btnremov.classList.add('btnremove');
    div2.classList.toggle('cards1js');
    
   
    carrinho.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(btnremov);
    divcar.textContent = 'R$'+meuCarrinho;
    btnremov.addEventListener('click', ()=> {
        meuCarrinho = meuCarrinho - card1;
        divcar.textContent = 'R$'+meuCarrinho; 
        div1.setAttribute('style', 'display: none');  
        div2.setAttribute('style', 'display: none');  
    });
    

})
btnadd2.addEventListener('click', function(){
    meuCarrinho = meuCarrinho + card2;
    
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let btnremov = document.createElement('button');
    
    btnremov.classList.add('btnremove');
    div2.classList.toggle('cards2js');
    
    carrinho.appendChild(div1); 
    div1.appendChild(div2);
    div1.appendChild(btnremov);
    divcar.textContent = 'R$'+meuCarrinho;

    btnremov.addEventListener('click', ()=> {
        meuCarrinho = meuCarrinho - card2;
        divcar.textContent = 'R$'+meuCarrinho; 
        div1.setAttribute('style', 'display: none');  
        div2.setAttribute('style', 'display: none');  
    });  
})
btnadd3.addEventListener('click', function(){
    meuCarrinho = meuCarrinho + card3;
    
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let btnremov = document.createElement('button');
    
    btnremov.classList.add('btnremove');
    div2.classList.toggle('cards3js');
    
    carrinho.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(btnremov);
    divcar.textContent = 'R$'+meuCarrinho;

    btnremov.addEventListener('click', function() {
        meuCarrinho = meuCarrinho - card3;
        divcar.textContent = 'R$'+meuCarrinho; 
        div1.setAttribute('style', 'display: none');  
        div2.setAttribute('style', 'display: none');  
    });   
})
btnadd4.addEventListener('click', function(){
    meuCarrinho = meuCarrinho + card4;
    
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let btnremov = document.createElement('button');
    
    btnremov.classList.add('btnremove');
    div2.classList.toggle('cards4js');
    
    carrinho.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(btnremov);
    divcar.textContent = 'R$'+meuCarrinho;

    btnremov.addEventListener('click', ()=> {
        meuCarrinho = meuCarrinho - card4;
        divcar.textContent = 'R$'+meuCarrinho; 
        div1.setAttribute('style', 'display: none');  
        div2.setAttribute('style', 'display: none');  
    });   
})
btnadd5.addEventListener('click', function(){
    meuCarrinho = meuCarrinho + card5;
    
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let btnremov = document.createElement('button');
    
    btnremov.classList.add('btnremove');
    div2.classList.toggle('cards5js');
    
   
    carrinho.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(btnremov);
    divcar.textContent = 'R$'+meuCarrinho;
    btnremov.addEventListener('click', ()=> {
        meuCarrinho = meuCarrinho - card5;
        divcar.textContent = 'R$'+meuCarrinho; 
        div1.setAttribute('style', 'display: none');  
        div2.setAttribute('style', 'display: none');  
    });
})

btncomprar.addEventListener('click', ()=>{
    card1, card2, card3, card4, card5 = 0;
    if (meuCarrinho <= 0) {
        alert('Você precisa adicionar algo ao seu carrinho!');
        btncomprar.setAttribute('style', 'background-color: red')
        
        
    } else if ((depositado < meuCarrinho) || (depositado == 0)){
            
        alert('Você precisa de mais moedas Shopix.');
    }else {
        
        
        carrinho.innerHTML = '';
        depositado = depositado - meuCarrinho;
        moedaShopix.textContent = 'R$'+depositado;
        meuCarrinho = 0;
        alert('parabens pela compra!');
        divcar.textContent = 'R$'+meuCarrinho; 
        
        
        
}
}) 
