import errorWidget from './Widgets/errorWidget.js'
import measuring_system from './Components/measuring_system.js'
import select from './Components/select.js'


let errors = errorWidget();
let measuring = measuring_system()

let app = document.querySelector('.app')
let inch

let SI = {
    'metr': 1,
    'dm': 0
  }

let create_option =document.forms.create_option
let input = create_option.elements.name

let spisok = document.querySelector('#spisok')

spisok.addEventListener('change', ()=>{
  if(spisok.value === 'create'){
    create_option.classList.remove('hide')
  }
  else{
    create_option.classList.add('hide')
  }
})

function selectOne(name) {
  // console.log(spisok.length);
  let nums = spisok.length -1
  let num = nums +1
  let options = spisok.options
  options[num] = new Option(`${name}`, `${name}`);
  // console.log(options[num].value);
  let createOption = Array.from(options)
  console.log(createOption);
 createOption.forEach(item =>{
   console.log(item);
   if(item.value === ' create')
 })

}

 
create_option.addEventListener('click', function(e){
  e.preventDefault()
  let btn = create_option.elements.btn
  let target = e.target
  if(target == btn ){
    if(!input.value ==''){
      console.log('ормас');
      selectOne(input.value)
      create_option.classList.add('hide')
    }
    else{
      console.log(errors);
    }
  }
})

// console.log(inch);

class App  {
  constructor(model, type_in, sistem_i){
    this.model = model;
    this.type_in = type_in;
    this.sistem_i = sistem_i;
  }
};


// класс со списком крепежных изделий и их свойствами
class Appfactory {
  create(type){
    if(type === 'bolt')
      return new App(type, 'резьба', 'длина');
    if(type === 'гайка')
      return new App (type,'гайка чтото там','гайка гдето там')
  }
};

const factory = new Appfactory()

const bolt = factory.create('bolt')
// console.log(bolt.type_in);
const gaika = factory.create('гайка')
// console.log(gaika);

console.log();


