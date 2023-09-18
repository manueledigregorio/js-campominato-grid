//prendo il container div
const button =document.getElementById('button');
const container = document.querySelector('.container');



button.addEventListener('click', function(){
  reset();
  creaQuadrato();
  
});

function creaQuadrato(){

  for(let i=1; i <= 100; i++){
      
    container.innerHTML += `<div class="square"></div>`;


  }


}

function reset(){

  container.innerHTML = '';
}