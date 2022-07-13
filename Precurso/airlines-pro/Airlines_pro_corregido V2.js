let flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const askForRole = () => {
  let role = prompt("Are you an user or an admin?");
  if (role != null) role = role.toLowerCase();
  if (role !== "admin" && role !== "user") {
    return askForRole();
  }
  if (role === null) {
    return askForRole();
  }
  return role;
};

const createdFlights = () => {
  const newFlight = {};

  if (flights.length > 15) {
    console.table("no es posible crear más de 15 vuelos");
  } else {
    newFlight.id = Number(flights.length);
    newFlight.to = prompt("to?");
    newFlight.from = prompt("from?");
    newFlight.cost = +prompt("cost?");
    newFlight.scale = prompt("scale? true/false").toLowerCase();
    if (
      newFlight.to === "" ||
      newFlight.to === null ||
      newFlight.from === "" ||
      newFlight.from === null ||
      newFlight.cost === "" ||
      newFlight.cost === null ||
      newFlight.scale === "" ||
      newFlight.scale === null
    ) {
      alert(
        "Por lo menos uno de los campos está sin rellenar.\n Para poder introducir un vuelo todos los campos deben ser completados. Por favor, introduce de nuevo los datos del vuelo"
      );
      createdFlights();
    }
    flights.push(newFlight);
    console.table(flights);
  }
  if ("Create new flights?") {
    createdFlights();
  } else {
    alert("Thanks for your work!");
  }
};

function deletedFlights() {
  const idDeleted = +prompt("Which flight id would you like to delete?");
  if (idDeleted.isNaN) {
    console.log(`Please type only numbers`);
    return deletedFlights();
  }
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].id === idDeleted) flights.splice(i, 1);
  }
  flights = newFlights();
  return flights;
}

const newFlights = () => {
  for (let i = 0; i < flights.length; i++) {
    flights[i].id = i;
  }
  return console.table(flights);
};

const buyFlight = () => {
  const toBuy = +prompt(
    "which flight would you like to buy (please, select flight id)"
  );
  if (budgetedFlights.includes(Number(toBuy))) {
    return console.log(`Thank you for your purchase!`);
  }
  alert(`Please insert valid numbers only`);
  return buyFlight();
};

const budgetedFlights = [];
function userActions() {
  const cost = +prompt(
    "Hello! Please insert the maximum planned budget to buy a flight"
  );
  const priceFlights = flights.filter((flight) => flight.cost <= cost);
  console.table(priceFlights);
  for (let i = 0; i < priceFlights.length; i++) {
    budgetedFlights.push(priceFlights[i].id);
  }
  return buyFlight();
}

function adminActions() {
  const actionAsked = prompt("what do you want to do? (create/delete)");
  if (actionAsked === "create") {
    return createdFlights();
  }
  if (actionAsked === "delete") {
    return deletedFlights();
  }
  return adminActions();
}

function executeFlights() {
  const role = askForRole();
  if (role === "admin") {
    adminActions();
  } else {
    userActions();
  }
}

executeFlights();
