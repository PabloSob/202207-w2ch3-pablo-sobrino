

const welcome = () => {
    let playerOne = prompt ("Please, introduce your name");
    if (playerOne === ""|| playerOne === null){
        alert ("Please, introduce a valid name")
        welcome()
    }else{
        alert (`Welcome ${playerOne}, lets play Bingo!`)
        return playerOne  
    }}



let number;
let drawedNums = [];


let numberGenerator= () => {
    number = Math.ceil(Math.random() * 40)
    while(drawedNums.includes(number)) {
        number = Math.ceil(Math.random() * 40);
    }
    drawedNums.push(number);
    /* alert(`Next number is: ${number}`); */
    console.log(number);
    return number
}




function cartonBingo() {
    this.linea1 = [],
    this.linea2 = [],
    this.linea3 = [],
    this.columnas = function() { while(this.linea1.length < 5){
            let number = Math.ceil(Math.random() * 40);
            if(!this.linea1.includes(number)) {
                this.linea1.push(number);
            }
        } while(this.linea2.length < 5){
            number = Math.ceil(Math.random() * 40);
            if(!this.linea2.includes(number) && !this.linea1.includes(number)) {
                this.linea2.push(number);
            }
        } while(this.linea3.length < 5){
            number = Math.ceil(Math.random() * 40);
            if(!this.linea3.includes(number) && !this.linea1.includes(number) && !this.linea2.includes(number)) {
                this.linea3.push(number);
            }}}}




let markX = numbersArray => {
    if(numbersArray.includes(number)) {
        numbersArray[numbersArray.indexOf(number)] = 'X'
    }}



let linea = numbersArray => {
    if(numbersArray.every(elem => elem === 'X')) {
        alert('A Line was called!')
        return true;
    }}




let bingo = numbersArray => {
    if(numbersArray.every(elem => elem === 'X')) {
        return true
    }}




let scores = [
    {name: 'Leonardo', roundsToBingo: 35},
    {name: 'Donatello', roundsToBingo: 37},
    {name: 'Michelangelo', roundsToBingo: 29},
    {name: 'Raphael', roundsToBingo: 33},
];




let bingoParty = () => {
    let playerOne = welcome();

    let escogerCarton;
    let cartonFinal;
    

    do {
      cartonFinal = new cartonBingo();
      cartonFinal.columnas();
      console.log(cartonFinal)
      console.table([cartonFinal.linea1, cartonFinal.linea2, cartonFinal.linea3]);
      escogerCarton = confirm('Press OK if you like this bingocard, otherwise press CANCEL to get a new one');
    }
    while(escogerCarton != true);

    console.table([cartonFinal.linea1, cartonFinal.linea2, cartonFinal.linea3]);

    alert("Winner, winner chiken dinner!");
    
    let turnos = 0;
    let lineasCompletadas = 0;
    let seguirJugando = true;
    
    
    do {
        numberGenerator();
        
        
        [cartonFinal.linea1, cartonFinal.linea2, cartonFinal.linea3].map(markX);
        
        console.table([cartonFinal.linea1, cartonFinal.linea2, cartonFinal.linea3]);
        console.log(drawedNums)

        
        if(lineasCompletadas === 0) {
          for(line of [cartonFinal.linea1, cartonFinal.linea2, cartonFinal.linea3]) {
            if(linea(line)){
                lineasCompletadas += 1;  
            }}}
        
        
        
        if(bingo(cartonFinal.linea1) && bingo(cartonFinal.linea2) && bingo(cartonFinal.linea3)) {
            alert('Bingo! We have a winner!')
            alert(`Congratulations ${playerOne}!, it took you ${turnos} rounds to score Bingo.`);
            
            scores.push({name: playerOne, roundsToBingo: turnos})  
            let ordenarScores = scores.sort((a,b) => a.roundsToBingo - b.roundsToBingo); 

            let rankingFinal ='';
            let rankPosition = 1;

            for(player of ordenarScores) {
                rankingFinal += `#${rankPosition}, ${player.name} - needed rounds to score Bingo: ${player.roundsToBingo}\n`;
                rankPosition ++;   
            };
            console.log(`'Score Board:\n'` + rankingFinal)
            seguirJugando = false;
        } else {
            seguirJugando = window.confirm(`Number is ${number}. Keep playing?`)
            turnos += 1;
        }}
   
    while(seguirJugando === true); 

    alert('Bye!')
}

bingoParty();
