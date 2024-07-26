// 705.484.450-52  070.987.720-03

let cpf ='705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');

cpfArray = Array.from(cpfLimpo.slice(0,-2));


const verificado = verificacao(cpfArray, 10);
const cpfValidado = verificacao(verificado, 11);


const validacao = validacaoCPF(cpfLimpo, cpfValidado);
console.log(validacao)




function validacaoCPF(cpf, cpfValidado){
    
    cpfString = cpfValidado.toString().replace(/\D+/g, '');

    if(cpfString === cpf)return `CPF ${this.cpfString} validado!`;
    
    return 'CPF inválido!';

}


function verificacao(cpf, aux){
    
    const multiplicaCPF = cpf.map(valor => {
        const conta = valor * aux;
        aux -= 1;
        return conta;
    }).reduce((acc, valor) => acc += valor);

    const digito = geradorDigito(multiplicaCPF);
    const cpfConcatenado = [...cpf, digito];

    return cpfConcatenado;
}


function geradorDigito(valor){
    
    const gerador = 11 - (valor % 11);

    if(gerador > 9) return 0;
    return gerador;
}