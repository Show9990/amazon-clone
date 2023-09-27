import React, { useEffect } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import CheckoutPage from "./CheckoutPage";
import LoginPage from "./LoginPage";
import { useStateValue } from "./StateProvider";

import { getAuth, onAuthStateChanged } from "firebase/auth"; // Fix the import statement

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth(); // Initialize the auth object
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operation goes in here
      unsubscribe();
    };
  }, [dispatch]); // Include dispatch as a dependency

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}

function Login() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

function Checkout() {
  return (
    <div>
      <Header />
      <CheckoutPage />
    </div>
  );
}

export default App;
