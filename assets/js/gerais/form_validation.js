/* =================== VALIDAÇÃO DE FORMULÁRIOS =================== */
jQuery(document).ready(function($){

    // Nome completo 
    window.Parsley.addValidator('fullname', {
        validateString: function(value) {
            var value = value.trim().split(' ');
            return value.length > 1;
        },
        messages: {
            'pt-br': 'Digite o nome completo.'
        }
    });

    // Valida CPF
    window.Parsley.addValidator('cpf', {
        validateString: function(value) {
            return validarCPF(value);
        },
        messages: {
            'pt-br': 'Informe um número de CPF válido.'
        }
    });

    // Valida CNPJ
    window.Parsley.addValidator('cnpj', {
        validateString: function(value) {
            return validarCNPJ(value);
        },
        messages: {
            'pt-br': 'Informe um número de CNPJ válido.'
        }
    });

    // Valida CPF ou CNPJ
    window.Parsley.addValidator('cpf_cnpj', {
        validateString: function(value) {
            return validaCPForCNPJ(value);
        },
        messages: {
            'pt-br': 'Informe um número de CPF ou CNPJ válido.'
        }
    });

    // Verifica e-mail
    window.Parsley.addAsyncValidator('verifica_email', function (resposta) {
        return resposta.responseText == "ok";
    });

    // Exibe o 'check' nos campos validados com sucesso
    window.Parsley
    .on('field:success', function() {  
        this.$element.parent('.show-validacao').addClass('valid');
    }).on('field:error', function() {  
        this.$element.parent('.show-validacao').removeClass('valid');
    });

    // Instancia o validador
    $('.form-validation').parsley();

});