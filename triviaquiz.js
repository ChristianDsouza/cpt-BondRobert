var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are correct"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
 else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="1. where was soccer made\na)England \nb)Greece \nc)Ireland \nd)France";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="2. where was football made? \na)Canada \nb)USA \nc)Iceland \nd)Mexico";
    document.view.qans.value=""
}
    else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="3. Where was hockey made in canada?\na)Northwest Terriotiers \nb)Yukon \nc)New foundland \nd)Quebec";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="4. Where is this years world cup(2018)? \na)Canada \nb)Russia \nc)Finland \nd)Italy";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="5. what is the job for the refs?\na)watch the game and make calls \nb)watch the game \nc)do nothing \nd)look pretty";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="6. What is Sidney Crosby number? \na)13 \nb)88 \nc)99 \nd)87";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="7. What is a penilty in hockey? \na)offside \nb)body checking \nc)tripping \nd)icing";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="8. Who is the owner of the pittsbeurg pengins? \na)Mario Lemux \nb)Sidney Crosby \nc)mel Gibson \nd)RickGrimes";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="9. Who is the coach of the leafs? \na)Mick Bobcock \nb)John Ross \nc)Danny Nuyen \nd)fred Anderson";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="10. who is the owner of the Dallas Cowboys \na)Jerry Jones \nb)Adam Dualberg \nc) Don Cherry \nd)Danny Glover";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
}
	i++; 
}
N   
