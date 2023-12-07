import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //  const style = { color: "red", fontSize: "48px",
  //textTransform: "uppercase" }

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizza = pizzaData;
  const numPizza = pizza.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>Welcome to the best Pizza in Town!</p>
          <ul className="pizzas">
            {pizza.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our Menu. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, Mushrooms"
        price={14}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <h3>{pizzaObject.name}</h3>
      <p>{pizzaObject.ingredients}</p>
      <span>{pizzaObject.soldOut ? "Sold Out!" : pizzaObject.price}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 11;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  //if (hour >= openHours && hour <= closeHours) alert("We are currently open!");
  //else alert("Sorry we are currently closed!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHours} closeHours={closeHours} />
      ) : (
        <p>
          We closed at {closeHours}:00hs! We will open at {openHours}:00hs.
          Thank you!
        </p>
      )}
    </footer>
  );
}

function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>We are open until {closeHours}:00hs. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
