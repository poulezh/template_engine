import errorWidget from './Widgets/errorWidget.js'
import measuring_system from './Components/measuring_system.js'


let errors = errorWidget();
let measuring = measuring_system()
let _inch_ = measuring



let one_form = document.forms.form_one

function selectOne(name, sel) {
  let nums = sel.length - 1
  let num = nums + 1
  let options = sel.options
  options[num] = new Option(`${name}`, `${name}`);
  name = ''
}

const create_option = (form) => (e) => {
  e.preventDefault()
  let btn = form.elements.btn
  let input = form.elements.input
  let select = form.elements.select
  let target = e.target
  if (target == btn) {
    if (!input.value == '') {
      console.log('Нормас');
      let imp_val = input.value
      selectOne(imp_val, select)
      form.reset()
    }
    else {
      console.log(errors);
    }
  }
}

let handler_one_form = create_option(one_form)

one_form.addEventListener('click',handler_one_form)

















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