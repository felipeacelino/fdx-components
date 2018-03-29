/* =================== MÁSCARAS DOS CAMPOS =================== */

// VALOR
$('.valor').mask('000.000.000.000.000,00', {reverse: true});

// CEP
$(".cep").mask("00000-000");

// DATA
$(".data").mask("00/00/0000");

// CPF
$(".cpf").mask("000.000.000-00", {reverse: true});

// CNPJ
$(".cnpj").mask("00.000.000/0000-00", {reverse: true});

// CPF OU CNPJ
var cpfCnpj = function (val) {
    return val.length > 14 ? '00.000.000/0000-00' : '000.000.000-009';
},
optionsDocumento = { onKeyPress: function(val, e, field, options) { field.mask(cpfCnpj(val), options) } }; 
$('.cpf-cnpj').mask(cpfCnpj, optionsDocumento); 

// TELEFONE
var telefoneSP = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(telefoneSP.apply({}, arguments), options);
    }
};
$('.telefone').mask(telefoneSP, spOptions);

// CARTÃO DE CRÉDITO
$(".card-numero").mask("0000 0000 0000 0000", {reverse: true});

// CARTÃO DE CRÉDITO (VALIDADE)
$(".card-validade").mask("00/00");
