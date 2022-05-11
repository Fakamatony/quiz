const questionsContainer = document.getElementById('questionsContainer')
const btnStart = document.querySelector('.btnStart')
let questions = [
  {
    question: "Какое пиво больше всего по душе?",
    answers: [
      {
        answer: "Балтика"
      },
      {
        answer: "Синий Майбах 3D"
      },
      {
        answer: "Рижское"
      },
    ]
  },
  {
    question: "Скотлько бутылок пива Синий Майбах 3D есть на земле?",
    answers: [
      {
        answer: "4"
      },
      {
        answer: "1000"
      },
      {
        answer: "10000"
      },
    ]
  },
  {
    question: "Вы сомневаетесь что выйграете приз?",
    answers: [
      {
        answer: "Да"
      },
      {
        answer: "Не"
      },
      {
        answer: "Да мне есть 18"
      },
    ]
  }
];



function createQuestionsAndAnswers(questionsList){


  for (let i = 0; i < questionsList.length; i++){
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('questionDiv')
    const answersDiv = document.createElement('div');
    const question = document.createElement('p');
    question.innerHTML = questionsList[i].question;
    for (let j = 0; j < questionsList[i].answers.length; j++){
      const answer = document.createElement('button');
      answer.classList.add('answer')
      answer.innerHTML = questionsList[i].answers[j].answer;
      answersDiv.append(answer)
      answer.addEventListener('click', ()=>{
        questionDiv.remove()
      })
    }

    questionDiv.append(question)
    questionDiv.append(answersDiv)
    questionsContainer.append(questionDiv)
  }

}



btnStart.addEventListener('click', ()=> {
  btnStart.remove();
  createQuestionsAndAnswers(questions)
})


