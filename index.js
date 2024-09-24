// index.js

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Converter cm para metros
    const atividade = document.getElementById('atividade').value;
    
    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    const calorias = calcularCaloriasDiarias(peso, atividade);
    const resultado = document.getElementById('resultado');
    
    let classificacaoIMC = getClassificacaoIMC(imc);
    let dicasSaude = getDicasSaude(imc);

    resultado.innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>IMC:</strong> ${imc.toFixed(2)} (${classificacaoIMC})</p>
        <p><strong>Calorias Diárias Recomendadas:</strong> ${calorias.toFixed(0)} kcal</p>
        <h3>Dicas de Saúde:</h3>
        <p>${dicasSaude}</p>
    `;
    resultado.style.display = 'block';
}

function calcularCaloriasDiarias(peso, atividade) {
    let fatorAtividade;
    
    switch (atividade) {
        case "sedentario":
            fatorAtividade = 1.2;
            break;
        case "moderado":
            fatorAtividade = 1.55;
            break;
        case "ativo":
            fatorAtividade = 1.9;
            break;
        default:
            fatorAtividade = 1.2;
    }

    return 24 * peso * fatorAtividade;
}

function getClassificacaoIMC(imc) {
    if (imc < 18.5) return "Abaixo do Peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso Normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    return "Obesidade";
}

function getDicasSaude(imc) {
    if (imc < 18.5) return "Aumente a ingestão de alimentos ricos em nutrientes.";
    if (imc >= 18.5 && imc < 24.9) return "Mantenha uma alimentação equilibrada e continue praticando exercícios!";
    if (imc >= 25 && imc < 29.9) return "Considere atividades físicas regulares e uma alimentação saudável.";
    return "Procure orientação médica para uma dieta balanceada e acompanhamento adequado.";
}


// script.js

function adicionarComentario() {
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    if (nome === "" || comentario === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const commentsList = document.getElementById('commentsList');

    // Cria um novo comentário
    const novoComentario = document.createElement('div');
    novoComentario.classList.add('comment');
    novoComentario.innerHTML = `
        <strong>${nome}</strong>
        <p>${comentario}</p>
    `;

    // Adiciona o comentário à lista
    commentsList.appendChild(novoComentario);

    // Limpa os campos do formulário
    document.getElementById('nome').value = "";
    document.getElementById('comentario').value = "";
}
