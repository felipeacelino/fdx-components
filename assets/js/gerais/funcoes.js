/* =================== FUNÇÕES =================== */

// DEBOUNCE (Melhora a performance de funções repetitivas como "Scroll / Resize")
debounce=function(n,t,u){var e;return function(){var a=this,i=arguments,o=function(){e=null,u||n.apply(a,i)},r=u&&!e;clearTimeout(e),e=setTimeout(o,t),r&&n.apply(a,i)}};

// Verifica se o tamanho da tela é menor do que o tamanho passado (Útil em caso de verificação de responsividade) 
function isMobileX(screenSize) {
	return $(window).width() < screenSize;
}

// Valida CPF
function validarCPF(a){if(a=a.replace(/[^\d]+/g,""),""==a)return!1;if(11!=a.length||"00000000000"==a||"11111111111"==a||"22222222222"==a||"33333333333"==a||"44444444444"==a||"55555555555"==a||"66666666666"==a||"77777777777"==a||"88888888888"==a||"99999999999"==a)return!1;for(add=0,i=0;i<9;i++)add+=parseInt(a.charAt(i))*(10-i);if(rev=11-add%11,10!=rev&&11!=rev||(rev=0),rev!=parseInt(a.charAt(9)))return!1;for(add=0,i=0;i<10;i++)add+=parseInt(a.charAt(i))*(11-i);return rev=11-add%11,10!=rev&&11!=rev||(rev=0),rev==parseInt(a.charAt(10))}

// Valida CNPJ
function validarCNPJ(a){if(""==(a=a.replace(/[^\d]+/g,"")))return!1;if(14!=a.length)return!1;if("00000000000000"==a||"11111111111111"==a||"22222222222222"==a||"33333333333333"==a||"44444444444444"==a||"55555555555555"==a||"66666666666666"==a||"77777777777777"==a||"88888888888888"==a||"99999999999999"==a)return!1;for(tamanho=a.length-2,numeros=a.substring(0,tamanho),digitos=a.substring(tamanho),soma=0,pos=tamanho-7,i=tamanho;i>=1;i--)soma+=numeros.charAt(tamanho-i)*pos--,pos<2&&(pos=9);if(resultado=soma%11<2?0:11-soma%11,resultado!=digitos.charAt(0))return!1;for(tamanho+=1,numeros=a.substring(0,tamanho),soma=0,pos=tamanho-7,i=tamanho;i>=1;i--)soma+=numeros.charAt(tamanho-i)*pos--,pos<2&&(pos=9);return resultado=soma%11<2?0:11-soma%11,resultado==digitos.charAt(1)}

// Valide CPF ou CNPJ
function validaCPForCNPJ(value) {
	return validarCPF(value) || validarCNPJ(value);
}

// Formata um valor para o formata de moeda real (R$)
function formataMoeda(v, c, d, t){
	var n = v, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}