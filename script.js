var questions = [
    { 
        question: "What is programming language ?", 
        options: [ "java script", "html", "css"], 
        answer: "java script" 
    },
    { 
        question: "What is the name of instactor ?", 
        options: ["basma ", " nada ", " malak"], 
        answer: "basma" 
    },
    { 
        question: "What is the name of course ?", 
        options: ["front end ", " flutter ", "back end"], 
        answer: " front end " 
    },
    { 
        question: "What is the name of student ?", 
        options: [" rahma ", " amany ", " malak"], 
        answer: "malak" 
    },
    { 
        question: "What is the task ?", 
        options: ["java", " css", " html"], 
        answer: "java" 
    },
    { 
        question: "What is your favourite track ?", 
        options: ["front", " back ", "flutter"], 
        answer: "front" 
    },
    { 
        question: "What is the name of faculty ?", 
        options: ["computer science", " law", " education"], 
        answer: "computer science" 
    },
    { 
        question: "What is the name of depatment ?", 
        options: ["sw", " ai ", " bio"], 
        answer: "sw" 
    },
    { 
        question: "What is this language ?", 
        options: ["js", " html5 ", " bootstarp"], 
        answer: "js" 
    },
    {
        question: "What is the favourite sister ?", 
        options: ["farah", " nour", "mona"], 
        answer: "farah" 
    }
];
var selectQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
var space = document.getElementById('exam');
selectQuestions.forEach((q, index) => {
    var optionsHtml = q.options.map((option, i) => `
        <label>
            <input type="radio" name="q${index}" value="${option}"> ${option}
        </label><br>`).join('');
    space.innerHTML += `
        <div>
            <p>${index + 1}. ${q.question}</p>
            ${optionsHtml}
        </div>
    `;
});

function get_result(){
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    
    selectQuestions.forEach((q, index) => {
        var userAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        
        if (userAnswer) {
            var selectedValue = userAnswer.value.trim();
                if (selectedValue === q.answer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            incorrectAnswers++;
        }
    });

    var totalQuestions = selectQuestions.length;
    var scorePercentage = (correctAnswers / totalQuestions) * 100;
    var resultElement = document.getElementById('result');
    if (scorePercentage > 50) {
        resultElement.innerHTML = `Success! You got ${correctAnswers} correct out of ${totalQuestions}.`;
        // document.write(' success! you got' +correctAnswers+ "correct out of" + totalQuestions );   another message 

    } else {
        resultElement.innerHTML = `Fail! You got ${correctAnswers} correct out of ${totalQuestions}.`;
        // document.write(` Fail! You got` +correctAnswers+ `correct out of` + totalQuestions ); 

    }
}

