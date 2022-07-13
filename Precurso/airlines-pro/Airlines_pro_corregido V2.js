let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];





const askForRole = () => {
    let role = prompt ("Are you an user or an admin?");
        if (role != null)
	    role = role.toLowerCase()
            if (role !== "admin" && role!== "user") {
               return askForRole();
            }else if (role === null){
               return askForRole();
            } else {
                return role;
            }
};




function adminActions (){
    const actionAsked = prompt ("what do you want to do? (create/delete)");
    if(actionAsked === "create"){
        return createdFlights();
    }else if(actionAsked === "delete"){
        return deletedFlights();
    } else {
        return adminActions();
    }
} 
    


const createdFlights = () => {
    const newFlight = {};

    if (flights.length > 15) {
        console.table("no es posible crear más de 15 vuelos");
    } else {
        newFlight.id = Number(flights.length);
        newFlight.to = prompt ("to?");
        newFlight.from = prompt ("from?");
        newFlight.cost = +prompt ("cost?");
        newFlight.scale = prompt ("scale? true/false").toLowerCase();
        if(newFlight.to === "" || newFlight.to === null || newFlight.from === "" || newFlight.from === null || newFlight.cost === "" || newFlight.cost === null || newFlight.scale === "" || newFlight.scale === null){
            alert ("Por lo menos uno de los campos está sin rellenar.\n Para poder introducir un vuelo todos los campos deben ser completados. Por favor, introduce de nuevo los datos del vuelo")
            createdFlights()  
            }
        flights.push(newFlight);
        console.table(flights);
    }
    if (confirm (("Create new flights?"))){
        createdFlights()
    } else {
        alert("Thanks for your work!")
    }
};




function deletedFlights (){
    let idDeleted = +prompt("Which flight id would you like to delete?");
    if (isNaN(idDeleted)) {
        console.log(`Please type only numbers`);
        return deletedFlights();
      } else {
        for (let i = 0; i < flights.length; i++) {
          if (flights[i].id === idDeleted) flights.splice(i, 1);
        }
        flights = newFlights();
        return flights;
      }
    };

const newFlights = () => {
    for (let i = 0; i < flights.length; i++) {
      flights[i].id = i;
    }
    return console.table(flights);
  };



let budgetedFlights = [];
function userActions () {
    let cost = +prompt ("Hello! Please insert the maximum planned budget to buy a flight")
    let priceFlights = flights.filter((flight) => flight.cost <= cost)
    console.table(priceFlights);
    for (let i = 0; i < priceFlights.length; i++) {
        budgetedFlights.push(priceFlights[i].id);
    }
    return buyFlight();  
}


const buyFlight = () => {       
    let toBuy = +prompt ("which flight would you like to buy (please, select flight id)")
    if (budgetedFlights.includes(Number(toBuy))){
       return console.log(`Thank you for your purchase!`);
    }
    alert (`Please insert valid numbers only`);
        return buyFlight();
      }
  


function executeFlights() {
    const role = askForRole();
    if (role === 'admin'){
        adminActions ();
    } else {
        userActions ();
    }    
}



executeFlights();


