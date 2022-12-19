questionTurn = "name1";
answerTurn = "name2";

function loadPlayers(){
    name1 = localStorage.getItem("player1");
    name2 = localStorage.getItem("player2");

    document.getElementById("name1").innerText = name1 + " : ";

    document.getElementById("name2").innerText = name2 + " : ";

    var score1=0;
    var score2=0;
    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;
}
function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(getWord + "|" + word);
 
    charAt1 = word.charAt(Math.random(word.lenght));
    console.log(charAt1);
 
    lenghtDivide2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(lenghtDivide2);
    console.log(lenghtDivide2 + "|" + charAt2);
 
    lenghtMinus1 = word.length - 1;
    charAt3 = word.charAt(lenghtMinus1);
    console.log(charAt3);
 
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = word.replace(charAt2, "_");
    removeCharAt3 = word.replace(charAt3, "_");
    console.log(removeCharAt3);
 
    question_word = "<h4 id='wordDisplay'> P. " + word.replace(charAt1, "_").replace(charAt2, "_").replace(charAt3, "_") + "</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + inputBox + checkButton;
 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
 
}
function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	if(answer == word)	
	{
		if(answerTurn == "name1")
		{
			score1 = score1 +1;
		    document.getElementById("score1").innerText = score1;
		}
		else 
		{
			score2 = score2 +1;
		    document.getElementById("score2").innerText = score2;
		}
	}
	if(questionTurn == "name1")
	{
		questionTurn = "name2"
		document.getElementById("playerQ").innerHTML = "Turno de Pergunta - " + name2 ;
	}
	else 
	{
		questionTurn = "name1"
		document.getElementById("playerQ").innerHTML = "Turno de Pergunta - " + name1 ;
	}
 
	if(answerTurn == "name1")
	{
		answerTurn = "name2"
		document.getElementById("playerA").innerHTML = "Turno de Resposta - " + name2 ;
	}
	else 
	{
		answerTurn = "name1"
		document.getElementById("playerA").innerHTML = "Turno de Resposta - " + name1 ;
	}
 
    document.getElementById("output").innerHTML = "";
}
 
 
 

 
 
 

 
 
 
