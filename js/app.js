let errors = ErrorWidget();

class CreateFasteners{
  constructor(name){
    this.name = name;

  }
}

let app = document.querySelector('.app')

let SI = {
  'metr': 1,
  'dm': 0
}
let inch

let select = document.querySelector('#si')
// console.log(select);
select.addEventListener('change', ()=>{
  if(select.value === 'metr'){
    inch = SI.metr
    console.log(SI.metr);
    console.log('метрическая');
  }
  else{
    inch = SI.metr*2.54
    console.log('дюймовая');
  }
})

let create_option =document.forms.create_option
let input = create_option.elements.name

let spisok = document.querySelector('#spisok')
spisok.addEventListener('change', ()=>{
  if(spisok.value === 'create'){
    create_option.classList.remove('hide')
    // selectOne()
    // console.log(123);
  }
  else{
    create_option.classList.add('hide')

  }
})

function selectOne(name) {
  console.log(spisok.length);
  let nums = spisok.length -1
  let num = nums +1
  let options = spisok.options
  options[num] = new Option(`${name}`, '');
  // if(options.value == 3){
  //   console.log(123);
  // }

}
console.log(spisok.options.value);
// if(options.value == 3){
//   console.log(123);
// }




// input.addEventListener('input', ()=>{
//   console.log(input.value);
// })


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





