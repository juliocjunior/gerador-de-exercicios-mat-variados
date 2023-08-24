// Função para gerar um número aleatório entre min e max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Função para gerar uma operação matemática aleatória
    function generateExercise() {
        const numd1 = getRandomNumber(1, 75); 
        const num21 = getRandomNumber(1, 99);
        const num22 = getRandomNumber(1, 99);
        const num31 = getRandomNumber(101, 999);
        const num32 = getRandomNumber(101, 999);

        const operator = ['+', '*', '-', '/'][getRandomNumber(0, 3)];
    
        let question;
        let answer;
    
        switch (operator) {
        case '+':
            question = `${num31} + ${num32}`;
            answer = num31 + num32;
            break;
        case '*':
            question = `${num21} * ${num22}`;
            answer = num21 * num22;
            break;
        case '-':
            question = `${num31} - ${num32}`;
            answer = num31 - num32;
            break;
        case '/':
            const divisibleNum = numd1 * getRandomNumber(2, 15);
            question = `${divisibleNum} / ${numd1}`;
            answer = divisibleNum / numd1;
            break;
        }
    
        return { question, answer };
    }
    
    // Função para verificar a resposta do usuário
    function checkAnswer(userAnswer, correctAnswer) {
        const resultElement = document.getElementById('result');
    
        if (parseInt(userAnswer) === correctAnswer) {
        resultElement.textContent = 'Correto';
        resultElement.classList.add('respostaCorreta');
        } else {
        resultElement.textContent = 'ERRADO, resposta correta: ' + correctAnswer;
        resultElement.classList.add('respostaErrada');
        }
    
        setTimeout(function() {
        location.reload();
        }, 2000);
    }
    
    // Função para iniciar o exercício
    function startExercise() {
        const exercise = generateExercise();
        const questionElement = document.getElementById('exercise-question');
        const userAnswerElement = document.getElementById('user-answer');
        const submitButton = document.getElementById('submit-button');
    
        questionElement.textContent = exercise.question;
        userAnswerElement.value = '';
        document.getElementById('result').textContent = '';
    
        submitButton.onclick = function() {
        const userAnswer = userAnswerElement.value;
        checkAnswer(userAnswer, exercise.answer);
        };
    
        userAnswerElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            submitButton.click();
        }
        });
    
        userAnswerElement.focus(); // Seleciona o campo de entrada
    }
    
    // Inicia o exercício
    startExercise();