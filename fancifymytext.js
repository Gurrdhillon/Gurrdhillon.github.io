const button = document.querySelector('button');
const textboxhandle = document.querySelector("textarea");

////Using EventListener
button.addEventListener('click',() => {
    // alert("Oh Yes, I succesfully linked JS file to HTML File");

    //when user click Bigger, text area get bigger
    textboxhandle.rows = 7;
    textboxhandle.column = 700; 
    textboxhandle.style.fontSize = "24pt";
});

const fancy = document.querySelector('#Fancy');

fancy.addEventListener('click', ()=>{
    textboxhandle.style.color = "blue";
    textboxhandle.style.textDecoration = "underline";
    textboxhandle.style.fontWeight = "bold";
});

const boring = document.querySelector('#Boring');

boring.addEventListener('click', ()=>{
    textboxhandle.style.color = "black";
    textboxhandle.style.fontFamily= "monospace";
    textboxhandle.style.textDecoration = "none";
    textboxhandle.style.fontWeight = "normal";
});

const newButton = document.createElement('button');

newButton.textContent = "Moo";

const field  = document.querySelector('#fieldset_2');

const newLine  = document.write("<br>");

field.appendChild(newButton);

newButton.addEventListener('click',() => {
    textboxhandle.style.textTransform = "uppercase"; 
    var str = textboxhandle.value;
    var parts = str.split(".");
    var str = parts.join("-MOO");
    console.log(str);
    textboxhandle.value = str;
});