player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score=0;
player2score=0;


document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerQuestion").innerHTML="Question Turn : "+ player1name;
document.getElementById("playerAnswer").innerHTML="Answer Turn : "+ player2name;

function send(){
    num1= document.getElementById("word1").value;
    num2= document.getElementById("word2").value;

   qstn=" What is " + num1 + " x "+ num2;

question_word="<h4 id='word_display'> Q. "+qstn+"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'> ";
check_button="<br><br><button class='btn btn-info' onclick='check()'> check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
function check(){
    getAnswer=document.getElementById("input_check_box").value;
    ans=getAnswer.toLowerCase();
    console.log(ans);
    if (ans==word) {
        if (ATurn=="player1") {
            player1score+=1;
            document.getElementById("player1score").innerHTML=player1score;
    
    
        }
        else{
            player2score+=1;
            document.getElementById("player2score").innerHTML=player2score;
    
        }
    }
    if (QTurn=="player1") {
        QTurn="player2";
        document.getElementById("playerQuestion").innerHTML="Question Turn : "+ player2name;
    
        
    }
    else{
        QTurn="player1";
        document.getElementById("playerQuestion").innerHTML="Question Turn : "+ player1name;
    
    }
    if (ATurn=="player1") {
        ATurn="player2";
        document.getElementById("playerAnswer").innerHTML="Answer Turn : "+ player2name;
    
    }
    else{
        ATurn="player1";
        document.getElementById("playerAnswer").innerHTML="Answer Turn : "+ player1name;
    }
    document.getElementById("output").innerHTML="";
    }