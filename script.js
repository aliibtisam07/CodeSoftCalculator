// Todo: Make M+ M- and MC functional
let memory = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    console.log(button.innerHTML);
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      memory = eval(memory);
      document.querySelector('input').value = memory;
    }
    else if(e.target.innerHTML == 'C'){
      memory = ""
      document.querySelector('input').value = memory;
    }
    else{ 
    // console.log(e.target)
    memory = memory + e.target.innerHTML;
    document.querySelector('input').value = memory;
      }
  })
})