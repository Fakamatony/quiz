const questionsContainer = document.getElementById('questionsContainer');
const questionsContainerAll = document.getElementById('questionsContainerAll');
let offset = 0;
let circleBlack;
let circleBlackOffset = -12;
let questions = [
  {
    answers: [
      {
        answer: 'Начать!',
        classList: ['btnStart'],
        action: ()=>{
          circleBlack = document.createElement('div');
          circleBlack.classList.add('circleBlack')
          questionsContainerAll.prepend(circleBlack)
          for (let i = 0; i < questions.length; i++) {
            if (questions[i].question)
              for (let d = 0; d < 1; d++) {
                let circle = document.createElement('div');
                circle.classList.add('circle')
                questionsContainerAll.prepend(circle)
              }
          }
        }
      }
    ]
  },
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
  },
  {
    question: "Сколько пива в тюрьме?",
    answers: [
      {
        answer: "12"
      },
      {
        answer: "Синий Майбах 3D"
      },
      {
        answer: "Пива Артёма Елизара"
      },
    ]
  },
  {
    question: "Вы любите кокаколу?",
    answers: [
      {
        answer: "Да"
      },
      {
        answer: "Нет"
      },
      {
        answer: "Да мне есть 18"
      },
    ]
  },
  {
    question: "Готовы?",
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
  },
  {
    answers: [
      {
        answer: 'Получить приз!',
        classList:['btnEnd'],
        action: ()=>{
          document.location.href="https://sun9-21.userapi.com/impg/aYZIcUG3IO2KFX5IxacwJq4ekAbojq_aLERr5A/SkqqwM8NAxs.jpg?size=601x604&quality=96&sign=2b3f034e105b6d2c101942131381a694&type=album"
        }
      }
    ]
  }
];

function createQuestionsAndAnswers(questionsList){
  const sliderLine = document.createElement("div");
  sliderLine.classList.add('sliderLine')




  for (let i = 0; i < questionsList.length; i++){
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('questionDiv')
    const answersDiv = document.createElement('div');

    let question;
    if (questionsList[i].question){
      question = document.createElement('p');
      question.innerHTML = questionsList[i].question;
      questionDiv.append(question)
    }

    for (let j = 0; j < questionsList[i].answers.length; j++){
      const answerNode = document.createElement('button');
      const {classList,action,answer} = questionsList[i].answers[j]
      answerNode.classList.add('answer')
      answerNode.innerHTML = answer;
      if (classList){
        classList.forEach((answerClass)=>{
          answerNode.classList.add(answerClass)
        })
      }
      answersDiv.append(answerNode)
      answerNode.addEventListener('click', ()=>{
        if (action) action();
        offset += 250
        sliderLine.style.left = -offset + "px";
        circleBlackOffset += 12
        circleBlack.style.left = circleBlackOffset + "px"
        if (circleBlackOffset > 60){
          questionsContainerAll.style.opacity = '0';
        }
      })
    }
    questionDiv.append(answersDiv)
    sliderLine.append(questionDiv)
    questionsContainer.append(sliderLine)
  }

}
createQuestionsAndAnswers(questions)

