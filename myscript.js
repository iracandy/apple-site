let turn = true;

const tictacarray = [0,0,0,0,0,0,0,0,0];
function winner(winner){
    document.getElementById("titletxt").innerHTML = winner+" has won!";
    //wait 5secs
    //reset board
    
}
function myFunction(id,position) {
    if (tictacarray[position]!=0) {
        return;

    }
    if (turn) {
        document.getElementById(id).innerHTML = "X";
        tictacarray[position] = 1;
    }
    else {
        document.getElementById(id).innerHTML = "O";
        tictacarray[position] = 2;
    }

    if (tictacarray[0]==1 && tictacarray[1]==1 && tictacarray[2]==1) {
        winner("X");
    }
    if (tictacarray[3]==1 && tictacarray[4]==1 && tictacarray[5]==1) {
        winner("X");
    }
    if (tictacarray[6]==1 && tictacarray[7]==1 && tictacarray[8]==1) {
        winner("X");
    }
    if (tictacarray[0]==1 && tictacarray[3]==1 && tictacarray[6]==1) {
        winner("X");
    }
    if (tictacarray[1]==1 && tictacarray[4]==1 && tictacarray[7]==1) {
        winner("X");
    }
    if (tictacarray[2]==1 && tictacarray[5]==1 && tictacarray[8]==1) {
        winner("X");
    }
    if (tictacarray[0]==1 && tictacarray[4]==1 && tictacarray[8]==1) {
        winner("X");
    }
    if (tictacarray[2]==1 && tictacarray[4]==1 && tictacarray[6]==1) {
        winner("X");
    }


    if (tictacarray[0]==2 && tictacarray[1]==2 && tictacarray[2]==2) {
        winner("O");
    }
    if (tictacarray[3]==2 && tictacarray[4]==2 && tictacarray[5]==2) {
        winner("O");
    }
    if (tictacarray[6]==2 && tictacarray[7]==2 && tictacarray[8]==2) {
        winner("O");
    }
    if (tictacarray[0]==2 && tictacarray[3]==2 && tictacarray[6]==2) {
        winner("O");
    }
    if (tictacarray[1]==2 && tictacarray[4]==2 && tictacarray[7]==2) {
        winner("O");
    }
    if (tictacarray[2]==2 && tictacarray[5]==2 && tictacarray[8]==2) {
        winner("O");
    }
    if (tictacarray[0]==2 && tictacarray[4]==2 && tictacarray[8]==2) {
        winner("O");
    }
    if (tictacarray[2]==2 && tictacarray[4]==2 && tictacarray[6]==2) {
        winner("O");
    }


    
  console.log(tictacarray);
  turn = !turn;
  console.log(turn);
}