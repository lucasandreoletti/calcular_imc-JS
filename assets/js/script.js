const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){ 
    event.preventDefault(); //impede o carregamento da pagina ao enviar os dados
    //calculo do IMC
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = (peso/ (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor');
    let descricao = '';

    document.getElementById('informacoes').classList.remove('hidden'); //retirando a classe hidden para mostrar o resultado na pag.

    //if else para a interpretação do resultado de IMC
    if (imc < 18.5){
        descricao ='Abaixo do Normal.';
    } else if (imc >=18.5 && imc <= 25){
        descricao ='Faixa saudável.';
    } else if (imc > 25 && imc <= 30){
        descricao ='Acima do Peso.';
    } else if (imc > 30 && imc <= 35){
        descricao ='Faixa de obesidade grau I.';
    } else if (imc > 35 && imc <= 40){
        descricao ='Faixa de obesidade grau II.';
    } else {
        descricao ='Faixa de obesidade grau III ou mórbida.';
    }
    valor.textContent = imc.replace('.',',');

    //mostrando resultado no HTML
    document.getElementById('descricao').textContent = descricao;
});