function vote(){
    //    Hello
    var name= document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if(age>=18){
        alert( "you are eligible to vote.");
    } 
    else {
        alert("You are not eligible to vote."); 
    } 
}