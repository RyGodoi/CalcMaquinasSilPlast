window.onload = function (){

        var HGRdisplay = document.getElementById('HGR-Display');
        var HGRpesoDesejado = document.getElementById('HGR-PD');
        var HGRlargura = document.getElementById('HGR-Larg');
        var HGRespessura = document.getElementById('HGR-Espes');
        var HGRcalcular = document.getElementById('HGR-Calcular');
    
        var HGRpesoDesejadoAtual;
        var HGRlarguraAtual;
        var HGRespessuraAtual;
    
        for(var i = 0; i <= 100; i++){
            HGRpesoDesejado.innerHTML+='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 100; i=i+0.5){
            HGRlargura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 20; i=i+0.5){
            HGRespessura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
    
    
        HGRcalcular.addEventListener('click', function(){
            HGRpesoDesejadoAtual=HGRpesoDesejado.value;
            HGRlarguraAtual = HGRlargura.value;
            HGRespessuraAtual = HGRespessura.value/100;
            var HGRresultado = 0;
            HGRresultado = HGRpesoDesejadoAtual/92/HGRlarguraAtual/HGRespessuraAtual;
    
            console.log('Peso desejado = ' +HGRpesoDesejadoAtual);
            console.log('Largura desejada = ' +HGRlarguraAtual);
            console.log('Espessura desejada = ' +HGRespessuraAtual);

            if(HGRpesoDesejadoAtual == 0 || HGRlarguraAtual ==0 || HGRespessuraAtual == 0){
                HGRdisplay.childNodes[1].innerHTML = "Revise as informações corretamente";
            }else{
                HGRdisplay.childNodes[1].innerHTML = HGRresultado.toFixed(4) + " Voltas";
            }
            
        })

        var MAQ2display = document.getElementById('MAQ2-Display');
        var MAQ2pesoDesejado = document.getElementById('MAQ2-PD');
        var MAQ2largura = document.getElementById('MAQ2-Larg');
        var MAQ2espessura = document.getElementById('MAQ2-Espes');
        var MAQ2calcular = document.getElementById('MAQ2-Calcular');
    
        var MAQ2pesoDesejadoAtual;
        var MAQ2larguraAtual;
        var MAQ2espessuraAtual;
    
        for(var i = 0; i <= 100; i++){
            MAQ2pesoDesejado.innerHTML+='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 100; i=i+0.5){
            MAQ2largura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 20; i=i+0.5){
            MAQ2espessura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
    
    
        MAQ2calcular.addEventListener('click', function(){
            MAQ2pesoDesejadoAtual=MAQ2pesoDesejado.value;
            MAQ2larguraAtual = MAQ2largura.value;
            MAQ2espessuraAtual = MAQ2espessura.value/100;
            var MAQ2resultado = 0;
            MAQ2resultado = MAQ2pesoDesejadoAtual/55/MAQ2larguraAtual/MAQ2espessuraAtual;
    
            console.log('Peso desejado = ' +MAQ2pesoDesejadoAtual);
            console.log('Largura desejada = ' +MAQ2larguraAtual);
            console.log('Espessura desejada = ' +MAQ2espessuraAtual);

            if(MAQ2pesoDesejadoAtual == 0 || MAQ2larguraAtual ==0 || MAQ2espessuraAtual == 0){
                MAQ2display.childNodes[1].innerHTML = "Revise as informações corretamente";
            }else{
                MAQ2display.childNodes[1].innerHTML = MAQ2resultado.toFixed(4) + " Voltas";
            }
            
        })

        var MAQ1display = document.getElementById('MAQ1-Display');
        var MAQ1pesoDesejado = document.getElementById('MAQ1-PD');
        var MAQ1largura = document.getElementById('MAQ1-Larg');
        var MAQ1espessura = document.getElementById('MAQ1-Espes');
        var MAQ1calcular = document.getElementById('MAQ1-Calcular');
    
        var MAQ1pesoDesejadoAtual;
        var MAQ1larguraAtual;
        var MAQ1espessuraAtual;
    
        for(var i = 0; i <= 100; i++){
            MAQ1pesoDesejado.innerHTML+='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 100; i=i+0.5){
            MAQ1largura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 20; i=i+0.5){
            MAQ1espessura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
    
    
        MAQ1calcular.addEventListener('click', function(){
            MAQ1pesoDesejadoAtual=MAQ1pesoDesejado.value;
            MAQ1larguraAtual = MAQ1largura.value;
            MAQ1espessuraAtual = MAQ1espessura.value/100;
            var MAQ1resultado = 0;
            MAQ1resultado = MAQ1pesoDesejadoAtual/60/MAQ1larguraAtual/MAQ1espessuraAtual;
    
            console.log('Peso desejado = ' +MAQ1pesoDesejadoAtual);
            console.log('Largura desejada = ' +MAQ1larguraAtual);
            console.log('Espessura desejada = ' +MAQ1espessuraAtual);

            if(MAQ1pesoDesejadoAtual == 0 || MAQ1larguraAtual ==0 || MAQ1espessuraAtual == 0){
                MAQ1display.childNodes[1].innerHTML = "Revise as informações corretamente";
            }else{
                MAQ1display.childNodes[1].innerHTML = MAQ1resultado.toFixed(4) + " Voltas";
            }
            
        })

/*
    function Maquinas() {
        var display = document.getElementById('Display');
        var pesoDesejado = document.getElementById('PD');
        var largura = document.getElementById('Larg');
        var espessura = document.getElementById('Espes');
        var calcular = document.getElementById('CalcularHGR');
    
        var pesoDesejadoAtual;
        var larguraAtual;
        var espessuraAtual;
    
        for(var i = 0; i <= 100; i++){
            pesoDesejado.innerHTML+='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 100; i++){
            largura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 0; i <= 20; i++){
            espessura.innerHTML +='<option value="'+i+'">'+i+'</option>';
        }
    
    
        calcular.addEventListener('click', function(){
            pesoDesejadoAtual=pesoDesejado.value;
            larguraAtual = largura.value;
            espessuraAtual = espessura.value/100;
            var resultado = pesoDesejadoAtual/92/larguraAtual/espessuraAtual;
    
            console.log('Peso desejado = ' +pesoDesejadoAtual);
            console.log('Largura desejada = ' +larguraAtual);
            console.log('Espessura desejada = ' +espessuraAtual);
    
            display.childNodes[1].innerHTML = resultado.toFixed(4) + " Voltas";
        })
    }
    */

    /*
    var nome = 'Ketly';
    switch (nome) {
        case 'Ryan':
            alert('meu nome é '+ nome)
            break;
        case 'Lucas':
            alert('meu nome é '+ nome)
            break;
        case 'Adriel':
            alert('meu nome é '+ nome)
            break;
        case 'Ketly':
            alert('meu nome é '+ nome)
            break;
    
        default:
            break;
        }
    */
    //Ryan Testes com funções 
    // 1- faça uma função que calcule a seguinte formula PD / 92 / largura / espessura
    /*
    console.log(medidasDasBobinas(52,40,0.10));

    function medidasDasBobinas(pd,larg,espes) {
        var resultado;

        resultado = pd / 92 / larg / espes ;
        return resultado;
    }
    */


    //aula07
    //Funções
    //função na variavel com obj
    //var obj = {'nome':'Ryan','idade':21,'func': function(teste){
    //    console.log(teste);
    //}}  
    //obj.func('Hello World!');
    //console.log(obj.nome);
    //console.log(obj.idade);

    //repeticoes(88);
    //function repeticoes(parametro) {
    //if(parametro == 1){
    //    console.log("Parametro 1");
    //}else if(parametro ==2 ){
    //    console.log("Parametro 2");
    //}else if(parametro ==3){
    //    console.log("Parametro 3");
    //}else{
    //    console.log("Parametro "+parametro);
    //}
    //}
    

    //aula06
    //Laços de repetição
    //var lista = 3;
    //if(lista == 1){
    //    var rep = 0;
    //    while(rep<=10){
    //        console.log(rep);
    //        rep +=1;
    //    }
    //    console.log("Fim do laço de reptição While");
    //}else if(lista ==2 ){
    //    var rep2 = 10;
    //    do {
    //        console.log(rep2);
    //        rep2 = rep2 - 1;
    //    } while (rep2>=0);
    //    console.log("Fim do laço de reptição DoWhile");
    //}else if(lista ==3){
    //    for(var num = 0; num <=10;num++){
    //        console.log(num);
    //    }
    //    console.log("Fim do laço de repetição FOR")
    //}

    //aula05
    //Condições if e else
    //=== (verica se é igual o tipo e o valor da variavel!)
    //==
    //!= (NOT)
    //!== (NOT verificando se é igual o tipo e o valor da variavel!)
    //>=
    //<=
    //>
    //<
    //var num = 10;

    //if(num == 10){
    //    alert('Resultado foi 10 - VERDADEIRO');
    //}else if(num == 9){
    //    alert('Resultado foi 9 - FALSO');
    //}
    //else{
    //    alert('numero aleatorio - resultado FALSO');
    //}

    //aula04
    //var adicao = 2+2;
    //var subtração = 5-2;
    //var multiplicacao = 3*3;
    //var divisao = 300/150;
    //var parenteses = (300*300)+4;
    //var funcao = 23+4*8-(2*4)*2+50;
    //console.log(funcao);

    //aula 03

    //funcão typeof
    //var nome = [];
    //var idade = {};
    //console.log(typeof(nome));
    //console.log(typeof(idade));

    //Objeto
    //var animal = {};
    //animal.nome = 'Douglas';
    //animal.idade = 13;
    //animal.peso = '24kg';
    //animal.tipo = [];

    //animal.tipo [0] = 'gato';
    //animal.tipo [1] = 'cachorro';
    //animal.tipo [2] = 'foca';
    //animal.tipo [3] = 'peixe';
    //animal.tipo [4] = 'passarinho';
    //console.log(animal.nome); 
    //console.log(animal.tipo [2]); 

    //array
    //var nome = [];
    //nome[0] = 'Ryan';
    //nome[1] = 'Lucas';
    //nome[2] = 'Debora';
    //nome[3] = 'Vitória';
    //console.log(nome[0],nome[1],nome[2],nome[3]);
    
    // aula 02
    //var idade = 2023 - 2001;
    //var nome = "Ryan";
    //alert("Olá "+ nome + " Você tem " + idade + " Anos.");
    

    // aula 01
    // console.log("Olá mundooooooooooooo");
    // alert("Olá mundinho filha da puta!");
    
}
