const character=document.getElementById('character');
const remaining=document.getElementById('remaining');
const textarea =document.getElementById('textarea');

textarea.addEventListener('keyup', () =>{
    
    updatecount()
})

 function updatecount(){
 character.innerText=textarea.value.length;
 remaining.innerText=textarea.getAttribute("maxLength") - textarea.value.length
    
 }
 
  