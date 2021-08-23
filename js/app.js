import errorWidget from './Widgets/errorWidget.js'
import measuring_system from './Components/measuring_system.js'


let errors = errorWidget();
let measuring = measuring_system()

let _inch_ = measuring
let create_option = document.forms.create_option
let input = create_option.elements.name

let spisok = document.querySelector('#spisok')

spisok.addEventListener('change', () => {
  if (spisok.value === 'create') {
    create_option.classList.remove('hide')
  }
  else {
    create_option.classList.add('hide')
  }
})

function selectOne(name) {
  // console.log(spisok.length);
  let nums = spisok.length - 1
  let num = nums + 1
  let options = spisok.options
  options[num] = new Option(`${name}`, `${name}`);
  input.value = ''
  // console.log(options[num].value);
  // let createOption = Array.from(options)
  // console.log(createOption);
}

function selOne(name) {

  // let nums = select.length -1
  // let num = nums +1
  let options = select.options
  options[num] = new Option(`${name}`, `${name}`);
  input.value = ''
}



create_option.addEventListener('click', function (e) {
  e.preventDefault()
  let btn = create_option.elements.btn
  let target = e.target
  if (target == btn) {
    if (!input.value == '') {
      console.log('Нормас');
      selectOne(input.value)
      create_option.classList.add('hide')
    }
    else {
      console.log(errors);
    }
  }
})

// console.log(inch);





function one_page() {
  let one_form = document.forms.form_one
  // console.log(one_form);
  let input = one_form.inpt_create
  input.addEventListener('input', inpt_val)
  let select = one_form.select_one

  function inpt_val() {return input.value}

  function selOne(name) {
    let num = select.length
    let options = select.options
    options[num] = new Option(`${name}`, `${name}`);
    input.value = ''
  }

  one_form.addEventListener('click', function (e) {
    e.preventDefault()
    let btn = one_form.elements.btn_create
    let target = e.target
    if (target == btn) {
      if (!input.value == '') {
        console.log('Нормас');
        selOne(input.value)

      }
      else {
        console.log(errors);
      }
    }
  })
  let arr_one_page = {
    'one_form': one_form,
    'input': input,
    'select': select
  }
  return arr_one_page
}
 let one_page_data = one_page()
console.log(one_page_data.input.value);

function bolte (){
  console.log(1);

}


























class App {
  constructor(model, type_in, sistem_i) {
    this.model = model;
    this.type_in = type_in;
    this.sistem_i = sistem_i;
  }
};


// класс со списком крепежных изделий и их свойствами
class Appfactory {
  create(type) {
    if (type === 'bolt')
      return new App(type, 'резьба', 'длина', 'шаг резьбы', 'класс прочности', 'класс покрытия', 'класс стали или металла');
    if (type === 'гайка')
      return new App(type, 'гайка чтото там', 'гайка гдето там')
  }
};

const factory = new Appfactory()

const bolt = factory.create('bolt')
// console.log(bolt.type_in);
const gaika = factory.create('гайка')
// console.log(gaika);





// let dataKi = '{name: "name",  id: "id"}';


// var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
// var obj = JSON.parse(jsonStr);
// // console.log(obj['theTeam'][0]);

// // console.log(obj['theTeam']);
// obj['theTeam'].push({"teamId":"4","status":"pending"});
// jsonStr = JSON.stringify(obj);
// let app = document.querySelector('.app')
// let ul = document.createElement('ul')
// let li = document.createElement('li')
// let xx 

// for (let i in jsonStr.theTeam){
//   xx = "<li>" + jsonStr.theTeam[i].teamId + "(xcvxcv: " + jsonStr.theTeam[i].status + ")</li>"
// }
// ul.innerHTML = xx
// ul.append(li)

// app.append(ul)
// console.log(jsonStr);
// "{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"},{"teamId":"4","status":"pending"}]}"