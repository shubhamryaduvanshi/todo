let addtodobutton=document.getElementById('addtodo');
let todocontainer=document.getElementById('todoContainer');
let inputfield=document.getElementById('inputField');

addtodobutton.addEventListener('click',function(){
    var paragraph=document.createElement('p')
    paragraph.innerText=inputfield.value;
    inputfield.value="";
    todocontainer.appendChild(paragraph);
/*-----------------event listener for making a line-through effect on text on single click----*/
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
        paragraph.style.textDecorationColor="black";    
    })
/*-----on double click removes the element------------*/
    paragraph.addEventListener('dblclick',function(){
    todocontainer.removeChild(paragraph);
    })
    })