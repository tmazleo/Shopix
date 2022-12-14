let moedaShopix = document.querySelector('#moedashopix');
let btnDep = document.querySelector('#btndep');
let quantiaDep = document.querySelector('#quantia-dep');
let depositado = 0;
parseFloat(quantiaDep);

parseFloat(depositado);

depositado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
quantiaDep.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

btnDep.addEventListener('click', function(){   
    parseFloat(quantiaDep);
    depositado = quantiaDep.value; 
    btnDep.setAttribute('style', 'animation: giro .5s linear');
    moedaShopix.textContent = 'R$' +depositado;
})

