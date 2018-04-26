$(() => {
    let alimentosRefeicao = [];

    alimentosRefeicao.push({
        kcal: 100,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Açúcar granulado'
    });

    alimentosRefeicao.push({
        kcal: 56,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Açúcar mascavo'
    });

    alimentosRefeicao.push({
        kcal: 125,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Açúcar refinado'
    });

    alimentosRefeicao.push({
        kcal: 41,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Arroz branco'
    });

    alimentosRefeicao.push({
        kcal: 24.2,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Arroz integral'
    });

    alimentosRefeicao.push({
        kcal: 105,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Banana'
    });

    alimentosRefeicao.push({
        kcal: 130,
        porcao: {
            valor: 6,
            medida: 'unidade(s)'
        },
        descricao: 'Biscoito Cream Cracker Aymoré'
    });

    alimentosRefeicao.push({
        kcal: 136,
        porcao: {
            valor: 6,
            medida: 'unidade(s)'
        },
        descricao: 'Biscoito Cream Cracker Richester'
    });

    alimentosRefeicao.push({
        kcal: 46,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Cebola'
    });

    alimentosRefeicao.push({
        kcal: 57,
        porcao: {
            valor: 2.5,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Chuchu cozido'
    });

    alimentosRefeicao.push({
        kcal: 58,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Feijão'
    });

    alimentosRefeicao.push({
        kcal: 128,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Filé de peito de frango'
    });

    alimentosRefeicao.push({
        kcal: 159,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Filé de peito de frango grelhado'
    });

    alimentosRefeicao.push({
        kcal: 40,
        porcao: {
            valor: 1.5,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Jiló cozido'
    });

    alimentosRefeicao.push({
        kcal: 62,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Laranja'
    });

    alimentosRefeicao.push({
        kcal: 113,
        porcao: {
            valor: 1,
            medida: 'copo(s) de 200ml'
        },
        descricao: 'Leite zero lactose integral'
    });

    alimentosRefeicao.push({
        kcal: 72,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Maçã'
    });

    alimentosRefeicao.push({
        kcal: 74,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Manteiga com sal Cotochés'
    });

    alimentosRefeicao.push({
        kcal: 75,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Manteiga com sal Porto Alegre'
    });

    alimentosRefeicao.push({
        kcal: 65.7,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Ovo de galinha cozido'
    });

    alimentosRefeicao.push({
        kcal: 135,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Pão francês'
    });

    alimentosRefeicao.push({
        kcal: 328,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Pão pizza'
    });

    alimentosRefeicao.push({
        kcal: 72,
        porcao: {
            valor: 6,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Repolho cru ou cozido'
    });

    alimentosRefeicao.push({
        kcal: 80,
        porcao: {
            valor: 4,
            medida: 'fatia(s)'
        },
        descricao: 'Tomate'
    });

    function caloriasPorMedida(alimento) {
        return alimento.kcal / alimento.porcao.valor;
    }

    function medidaRestanteParaIngerir(alimento, kcalRefeicao) {
        return kcalRefeicao / caloriasPorMedida(alimento);
    }

    function caloriasIngeridas(valorPorcao, alimento) {
        return valorPorcao * caloriasPorMedida(alimento);
    }

    function medidaRestanteParaIngerir(alimento, kcalRefeicaoRestantes) {
        return Math.floor(kcalRefeicaoRestantes / caloriasPorMedida(alimento));
    }

    function totalDeCaloriasIngeridas(ingestoes) {
        return ingestoes
        .map(ingestao => caloriasIngeridas(ingestao.quantidade, ingestao.alimento))
        .reduce((anterior, atual) => anterior + atual);
    }

    function kcalDaRefeicaoRestantes(ingestoes, kcalRefeicao) {
        return kcalRefeicao - totalDeCaloriasIngeridas(ingestoes);
    }

    $('.refeicoes').bind('change', function() {
        $('.ingestoes').empty();
        exibirIngestoes();
    });

    function exibirIngestoes() {
        let kcalRefeicao = $('.refeicoes').val();
        alimentosRefeicao.forEach(alimento => {
            let descricao = $('<div>')
            .addClass('ingestao__descricao')
            .append(alimento.descricao);

            let valor = $('<input>')
            .prop('placeholder', '0')
            .bind('blur', function() {
                $(this).prop('placeholder', '0')
            })
            .bind('focus', function() {
                $(this).prop('placeholder', '')
            })
            .addClass('ingestao__valor')            
            .prop('type', 'text')
            .bind('keyup', () => {
                let ingestoes = [];
                let kcalIngeridas = 0;
                $('.ingestao__valor').each((indice, elemento) => {
                    let alimento = alimentosRefeicao[indice];
                    let quantidade = $(elemento).val();
                    ingestoes.push({
                        quantidade: quantidade, alimento: alimento
                    });
                    kcalIngeridas += quantidade * caloriasPorMedida(alimento);
                });
                
                let valorPorcentagemIngerida = Math.floor(kcalIngeridas * 100 / kcalRefeicao);
                
                if (!isNaN(valorPorcentagemIngerida)) {    
                    let porcentagemIngerida = $('<span>')
                    .addClass('porcentagem-ingerida')                
                    .append(`${valorPorcentagemIngerida}%`);
                    
                    $('.rodape')
                    .empty()
                    .append('Você ingeriu ')
                    .append(porcentagemIngerida)
                    .append(' das calorias da refeição');
                }

                if (valorPorcentagemIngerida > 100) {
                    porcentagemIngerida
                    .addClass('porcentagem-ingerida_excedida');
                }

                let kcalRefeicaoRestantes = kcalDaRefeicaoRestantes(ingestoes, kcalRefeicao);
                $('.ingestao__restante').each(function(indice, elemento) {
                    let alimento = alimentosRefeicao[indice];
                    
                    let medidaRestante = medidaRestanteParaIngerir(alimento, kcalRefeicaoRestantes);

                    let valorIngerido = parseInt($(this).parent().find('.ingestao__valor').val(), 10);
                    
                    if (!valorIngerido) {
                        valorIngerido = 0;
                    }

                    let maximoPermitido = valorIngerido;

                    if (medidaRestante > 0) {
                        maximoPermitido += medidaRestante;
                    }

                    let ingeridoAMais = valorIngerido - maximoPermitido - medidaRestante;

                    if (!isNaN(medidaRestante)) {
                        if (medidaRestante < 0) {
                            let iconeRestante = $('<i>')
                            .addClass('ingestao__icone-restante_acabou')
                            .addClass('fa')
                            .addClass('fa-times-circle');

                            $(elemento)
                            .empty()
                            .append(iconeRestante)
                            .append('&nbsp;');                            

                            if (valorIngerido - ingeridoAMais > 0) {
                                $(elemento)
                                .append(`Você ingeriu ${ingeridoAMais} ${alimento.porcao.medida} a mais`);
                            } else {
                                $(elemento)
                                .append(`Não pode ingerir mais`);
                            }

                        } else {
                            if (maximoPermitido > 0) {
                                let iconeRestante = $('<i>')
                                .addClass('ingestao__icone-restante')
                                .addClass('fa')
                                .addClass('fa-check-circle');

                                $(elemento)
                                .empty()
                                .append(iconeRestante)
                                .append('&nbsp;')
                                .append(`No máximo ${maximoPermitido} ${alimento.porcao.medida}`);
                            } else {
                                let iconeRestante = $('<i>')
                                .addClass('ingestao__icone-restante_acabou')
                                .addClass('fa')
                                .addClass('fa-times-circle');
    
                                $(elemento)
                                .empty()
                                .append(iconeRestante)
                                .append('&nbsp;')
                                .append(`Não pode ingerir mais`);                                
                            }
                        }
                    }
                });            
            });
            
            let medida = $('<span>')
            .addClass('ingestao__medida')
            .append(' ')
            .append(alimento.porcao.medida);

            let ingerido = $('<div>')
            .addClass('ingestao__ingerido')
            .append(valor)
            .append(medida);

            let restante = $('<div>')
            .addClass('ingestao__restante');

            let medidaRestante = medidaRestanteParaIngerir(alimento, kcalRefeicao);
            
            let valorIngerido = parseInt($(this).parent().find('.ingestao__valor').val(), 10);
                    
            if (!valorIngerido) {
                valorIngerido = 0;
            }

            let maximoPermitido = valorIngerido;

            if (medidaRestante > 0) {
                maximoPermitido += medidaRestante;
            }

            let ingeridoAMais = valorIngerido - maximoPermitido - medidaRestante;

            if (medidaRestante < 0) {
                let iconeRestante = $('<i>')
                .addClass('ingestao__icone-restante_acabou')
                .addClass('fa')
                .addClass('fa-times-circle');

                restante
                .append(iconeRestante)
                .append('&nbsp;');                          

                if (valorIngerido - ingeridoAMais  > 0) {
                    $(elemento)
                    .append(`Você ingeriu ${ingeridoAMais} ${alimento.porcao.medida} a mais`);
                } else {
                    $(elemento)
                    .append(`Não pode ingerir mais`);
                }

            } else {
                if (maximoPermitido > 0) {
                    let iconeRestante = $('<i>')
                    .addClass('ingestao__icone-restante')
                    .addClass('fa')
                    .addClass('fa-check-circle');

                    restante
                    .append(iconeRestante)
                    .append('&nbsp;')
                    .append(`No máximo ${maximoPermitido} ${alimento.porcao.medida}`);
                } else {
                    let iconeRestante = $('<i>')
                    .addClass('ingestao__icone-restante_acabou')
                    .addClass('fa')
                    .addClass('fa-times-circle');

                    $(elemento)
                    .empty()
                    .append(iconeRestante)
                    .append('&nbsp;')
                    .append(`Não pode ingerir mais`);                                
                }
            }

            let ingestao = $('<div>')
            .addClass('ingestao')
            .append(descricao)
            .append(ingerido)
            .append(restante);
            
            $('.ingestoes')
            .append(ingestao);

            let porcentagemIngerida = $('<span>')
            .addClass('porcentagem-ingerida')                
            .append(`0%`);

            $('.rodape')
            .empty()
            .append('Você ingeriu ')
            .append(porcentagemIngerida)
            .append(' das calorias da refeição');
        });
    }

    exibirIngestoes();
});
