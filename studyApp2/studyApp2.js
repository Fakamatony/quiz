const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const color = document.getElementById('color');
const description = document.getElementById('description');


const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
    //Возвращает информацию массивом
    const userInfo = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        color: color.value,
        description: description.value
    }
    console.log(userInfo)
    //Возвращает тупо через консоль
    console.log(name.value,surname.value,age.value,color.value,description.value)

    name.value = ''
    surname.value = ''
    age.value = ''
    color.value = "#rrggbb"
    description.value = ''


})

