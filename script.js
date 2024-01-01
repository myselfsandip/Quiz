const quizData = [
    {
        question:'How old is Raj?',
        a:'17',
        b:'18',
        c:'19',
        d:'20',
        correct:'c'
    },
    {
        question:'What is the most used programming language?',
        a:'Java',
        b:'Javascript',
        c:'C++',
        d:'Python',
        correct:'b'
    },
    {
        question:'Who is the Writter of One Piece?',
        a:'Eichiro Oda',
        b:'Kishimoto',
        c:'Gege',
        d:'Akira Toriyama',
        correct:'a'
    },
    {
        question:'What is the most watched TV Show of 2023?',
        a:'Stranger Things',
        b:'Wednesday',
        c:'House of the Dragon',
        d:'One Piece',
        correct:'d'
    },
    {
        question:'Who is the strongest character in JJK?',
        a:'Satoru Gojo',
        b:'Ryomen Sukuna',
        c:'Yuta Okkotsu',
        d:'Yuki Tsukumo',
        correct:'b'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const quiz = document.getElementById('quiz');
const btn = document.getElementById('submit');
const answerEl = document.querySelectorAll('.answer');



let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelected();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}


function getSelected(){
    let answers = undefined;

    answerEl.forEach(answer =>{
        if(answer.checked){
            answers = answer.id;
        }
    });
    return answers;
}
function deSelected(){
    answerEl.forEach(answer =>{
        answer.checked = false;
    });
}


btn.addEventListener("click",()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    }
    
    
    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
    }else{
        document.querySelector('.quiz-container').classList.add('active');
        navLink = document.querySelector('.active');
        // navLink.classList.toggle('active');
        quiz.innerHTML = `
        <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
        <button onclick="window.location.reload();" style="margin-top: 2vw;border-radius:5px;font-weight:bold;">Retry⭐</button>
        `;
    }
});