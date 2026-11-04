//#region tic tac toe
let turn = true;

let gameover = false;

let tictacarray = [0,0,0,0,0,0,0,0,0];
function winner(winner){
    if (gameover){
        return;
    }
    document.getElementById("titletxt").innerHTML = winner+"s have won!";
    //wait 5secs
    //reset board
    let myButton = document.createElement("button");
    myButton.textContent = "Reset";
    myButton.style.color = "Black";
    myButton.style.fontSize = "20px";
    myButton.style.fontWeight = "Bold";
    myButton.style.background = "Red";
    myButton.style.width = "100px";
    myButton.style.aspectRatio = "3/1";
    document.getElementById("resetspot").appendChild(myButton);
    myButton.addEventListener("click",(event)=>reset(myButton))
    gameover = true;
}
function reset(button){
    console.log("reset game")
    document.getElementById("a1").style.backgroundImage = "";
    document.getElementById("b1").style.backgroundImage = "";
    document.getElementById("c1").style.backgroundImage = "";
    document.getElementById("a2").style.backgroundImage = "";
    document.getElementById("b2").style.backgroundImage = "";
    document.getElementById("c2").style.backgroundImage = "";
    document.getElementById("a3").style.backgroundImage = "";
    document.getElementById("b3").style.backgroundImage = "";
    document.getElementById("c3").style.backgroundImage = "";
    tictacarray = [0,0,0,0,0,0,0,0,0];
    turn = true;
    button.remove();
    gameover = false;
    document.getElementById("titletxt").innerHTML = "Battle!";

}
function myFunction(id,position) {
    if (gameover){
        return;
    }
    if (tictacarray[position]!=0) {
        return;

    }
    if (turn) {
        document.getElementById(id).style.backgroundImage = "url('./assets/apple.png')";
        document.getElementById(id).style.backgroundSize = "cover";
        tictacarray[position] = 1;
    }
    else {
        document.getElementById(id).style.backgroundImage = "url('./assets/banana.png')";
        document.getElementById(id).style.backgroundSize = "cover";
        tictacarray[position] = 2;
    }

    if (tictacarray[0]==1 && tictacarray[1]==1 && tictacarray[2]==1) {
        winner("Apple");
    }
    if (tictacarray[3]==1 && tictacarray[4]==1 && tictacarray[5]==1) {
        winner("Apple");
    }
    if (tictacarray[6]==1 && tictacarray[7]==1 && tictacarray[8]==1) {
        winner("Apple");
    }
    if (tictacarray[0]==1 && tictacarray[3]==1 && tictacarray[6]==1) {
        winner("Apple");
    }
    if (tictacarray[1]==1 && tictacarray[4]==1 && tictacarray[7]==1) {
        winner("Apple");
    }
    if (tictacarray[2]==1 && tictacarray[5]==1 && tictacarray[8]==1) {
        winner("Apple");
    }
    if (tictacarray[0]==1 && tictacarray[4]==1 && tictacarray[8]==1) {
        winner("Apple");
    }
    if (tictacarray[2]==1 && tictacarray[4]==1 && tictacarray[6]==1) {
        winner("Apple");
    }


    if (tictacarray[0]==2 && tictacarray[1]==2 && tictacarray[2]==2) {
        winner("Banana");
    }
    if (tictacarray[3]==2 && tictacarray[4]==2 && tictacarray[5]==2) {
        winner("Banana");
    }
    if (tictacarray[6]==2 && tictacarray[7]==2 && tictacarray[8]==2) {
        winner("Banana");
    }
    if (tictacarray[0]==2 && tictacarray[3]==2 && tictacarray[6]==2) {
        winner("Banana");
    }
    if (tictacarray[1]==2 && tictacarray[4]==2 && tictacarray[7]==2) {
        winner("Banana");
    }
    if (tictacarray[2]==2 && tictacarray[5]==2 && tictacarray[8]==2) {
        winner("Banana");
    }
    if (tictacarray[0]==2 && tictacarray[4]==2 && tictacarray[8]==2) {
        winner("Banana");
    }
    if (tictacarray[2]==2 && tictacarray[4]==2 && tictacarray[6]==2) {
        winner("Banana");
    }
    if (tictacarray[0]!=0 && 
        tictacarray[1]!=0 && 
        tictacarray[2]!=0 && 
        tictacarray[3]!=0 && 
        tictacarray[4]!=0 && 
        tictacarray[5]!=0 && 
        tictacarray[6]!=0 && 
        tictacarray[7]!=0 && 
        tictacarray[8]!=0 && gameover==false) {
            let myButton = document.createElement("button");
            myButton.textContent = "Reset";
            myButton.style.color = "Black";
            myButton.style.fontSize = "20px";
            myButton.style.fontWeight = "Bold";
            myButton.style.background = "Red";
            myButton.style.width = "100px";
            myButton.style.aspectRatio = "3/1";
            document.getElementById("resetspot").appendChild(myButton);
            myButton.addEventListener("click",(event)=>reset(myButton))
            gameover = true;
            document.getElementById("titletxt").innerHTML = "Tie!";
            console.log("gametie");
        }
        
    
  console.log(tictacarray);
  turn = !turn;
  console.log(turn);
}
//#endregion 

//#region memory game
const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));

let memorylist=[];
let inputlist=[];
let listening=true;
function memorybutton(number) {
    if (listening==false) {
        return;
    }
    inputlist.push(number);
    displaycolors(number,100);
    if (inputlist.length>=memorylist.length) {
        showbotmoves();
    }
   
}
async function showbotmoves() {
    listening=false;
    document.getElementById("m5").innerHTML = "Wait...";
    let equal=true;
    for (let i=0; i<inputlist.length; i++) {
        if (inputlist[i]!=memorylist[i]){
            equal=false;
        } 
    }
    
    /*console.log(equal); 
    console.log(memorylist);
    console.log(inputlist);*/
    document.getElementById("memoryscore").innerHTML = "Score: "+memorylist.length;
    if (equal==false){
        if (memorylist.length>0){
            document.getElementById("m5").innerHTML = "Incorrect! Restart";
        }
        memorylist=[];
    }
    //if wrong reset memory list
    inputlist=[];
    let randomnumber = Math.floor(Math.random()*4)+1;
    memorylist.push(randomnumber);
    for (const move of memorylist){
        await displaycolors(move,1000);
        await delay(100);
    }
    document.getElementById("m5").innerHTML = "";
    listening=true;
}
async function displaycolors(number,length){
    let id="";

    if (number==1){
        id="m2";
        document.getElementById(id).style.backgroundColor="#00ffff";
        await delay(length);
        document.getElementById(id).style.backgroundColor="#188181";
        }
    if (number==2){
        id="m4";
        document.getElementById(id).style.backgroundColor="rgb(128, 255, 0)";
        await delay(length);
        document.getElementById(id).style.backgroundColor="#467a12";
    }
    if (number==3){
        id="m6";
        document.getElementById(id).style.backgroundColor="rgb(255, 0, 98)";
        await delay(length);
        document.getElementById(id).style.backgroundColor="#5e1430";
    }
    if (number==4){
        id="m8";
        document.getElementById(id).style.backgroundColor="rgb(255, 98, 0)";
        await delay(length);
        document.getElementById(id).style.backgroundColor="#963e1e";
    }
}
//#endregion

//#region snake game

//snakegrid

//#endregion