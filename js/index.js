const mesesDoAno = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const mesCalendario = document.querySelector('#mesCalendario');
const anoCalendario = document.querySelector('#anoCalendario');
const datasCalendario = document.querySelector('#datasCalendario');

function mostrarCalendario(ano,mes){
    const primeiroDiaMes = new Date(ano,mes,1).getDay(); 
    const ultimoDiaMes = new Date(ano,mes+1,0).getDate();

    anoCalendario.innerHTML = ano;
    mesCalendario.innerHTML = mesesDoAno[mes];

    datasCalendario.innerHTML = '';

    for(let a = primeiroDiaMes; a > 0; a--){
        datasCalendario.innerHTML += `<li></li>`;
    }
    const diaAtual = new Date();

    for(let i = 1; i <= ultimoDiaMes; i++){
        if(i == diaAtual.getDate() && diaAtual.getMonth() == mes){
            datasCalendario.innerHTML += `<li class='ativo'>${i}</li>`;
        }else{
            datasCalendario.innerHTML += `<li class=''>${i}</li>`;
        }        
    }
}

const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');
const data = new Date();
let ano = data.getFullYear();
let mes = data.getMonth();

mostrarCalendario(ano,mes);

anterior.addEventListener('click', () => {
    if(mes == 0){
        mes = 11;
        ano--;
    }else{
        mes--;
    }
    mostrarCalendario(ano,mes);
})

proximo.addEventListener('click', () => {
    if(mes == 11){
        mes = 0;
        ano++;
    }else{
        mes++;
    }
    mostrarCalendario(ano,mes);
})