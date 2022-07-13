const flights = [
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

function askName() {
  const fullName = prompt("whats your name?");

  if (fullName === "" || fullName === null) {
    askName();
  }

  alert(`"Bienvenid@ a ISDI Airlines," + (fullName)`);
}

const showFlights = () => {
  flights.forEach((flight) => {
    if (flight.scale === false) {
      console.log(
        `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost} y no realiza escala`
      );
    } else {
      console.log(
        `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost} y realiza escala`
      );
    }
  });
};

function promedio() {
  let suma = 0;

  for (let i = 0; i < flights.length; i++) {
    suma += flights[i].cost;
  }

  const media = suma / flights.length;

  console.log(
    `"El coste promedio por vuelo de nuestra empresa es de " + (media.toFixed(2))`
  );
}

function vuelosEscala() {
  let sumaEscalas = 0;

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      sumaEscalas += 1;
    }
  }
  console.log(`"Hay un total de " + (sumaEscalas) + " vuelos con escala"`);
}

const lastFlights = () => {
  console.log(
    "Estos son los destinos de los últimos vuelos para el día de hoy:"
  );
  flights.forEach((flight) => {
    if (flight.id > 5 && flight.id < 11) {
      console.log(flight.to);
    }
  });
};

askName();
showFlights();
promedio();
vuelosEscala();

lastFlights();
