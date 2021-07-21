function add(value){
   document.getElementById("text_box").value += value;
}

function back(){
   let boxVlue=document.getElementById("text_box").value;
   document.getElementById("text_box").value = boxVlue.substr(0, boxVlue.length - 1);
}

function space(){
    document.getElementById("text_box").value +=" ";
}

function breakaLine(){
   document.getElementById("text_box").innerText = "/n";
}