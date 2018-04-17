$(() => {
    let alimentosRefeicao = [];

    alimentosRefeicao.push({
        kcal: 105,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Banana'
    });

    alimentosRefeicao.push({
        kcal: 72,
        porcao: {
            valor: 1,
            medida: 'unidade(s)'
        },
        descricao: 'Maça'
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
        kcal: 136,
        porcao: {
            valor: 6,
            medida: 'unidade(s)'
        },
        descricao: 'Biscoido Cream Cracker Richester'
    });

    alimentosRefeicao.push({
        kcal: 130,
        porcao: {
            valor: 6,
            medida: 'unidade(s)'
        },
        descricao: 'Biscoido Cream Cracker Aymoré'
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
        kcal: 24.2,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Arroz integral'
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
        kcal: 58,
        porcao: {
            valor: 1,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Feijão'
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
        kcal: 40,
        porcao: {
            valor: 1.5,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Jiló cozido'
    });

    alimentosRefeicao.push({
        kcal: 80,
        porcao: {
            valor: 4,
            medida: 'fatia(s)'
        },
        descricao: 'Tomate'
    });

    alimentosRefeicao.push({
        kcal: 72,
        porcao: {
            valor: 6,
            medida: 'colher(es) de sopa'
        },
        descricao: 'Repolho cru ou cozido'
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
            .addClass('ingestao__valor')
            .prop('type', 'text')
            .val('0')
            .bind('keyup', () => {
                let ingestoes = [];
                $('.ingestao__valor').each((indice, elemento) => {
                    let alimento = alimentosRefeicao[indice];
                    ingestoes.push({
                        quantidade: $(elemento).val(), alimento: alimento
                    });
                });
                let kcalRefeicaoRestantes = kcalDaRefeicaoRestantes(ingestoes, kcalRefeicao);
                $('.ingestao__valor-restante').each((indice, elemento) => {
                    let alimento = alimentosRefeicao[indice];
                    $(elemento).text(medidaRestanteParaIngerir(alimento, kcalRefeicaoRestantes));
                });            
            });
            
            let medida = $('<div>')
            .addClass('ingestao__medida')
            .append(alimento.porcao.medida)
            .append(' ')
            .append('ingerida(s)');

            let ingerido = $('<div>')
            .addClass('ingestao__ingerido')
            .append(valor)
            .append(medida);

            let valorRestante = $('<div>')
            .addClass('ingestao__valor-restante')
            .append(medidaRestanteParaIngerir(alimento, kcalRefeicao));

            let medidaRestante = $('<div>')
            .addClass('ingestao__medida-restante')
            .append(alimento.porcao.medida)        
            .append(' ')
            .append('restante(s)');

            let restante = $('<div>')
            .addClass('ingestao__restante')
            .append(valorRestante)
            .append(medidaRestante);

            let ingestao = $('<div>')
            .addClass('ingestao')
            .append(descricao)
            .append(ingerido)
            .append(restante);
            
            $('.ingestoes')
            .append(ingestao);
        });
    }

    exibirIngestoes();
});