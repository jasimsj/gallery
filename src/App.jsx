import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import BodyContainer from "./components/BodyContainer";
import AppProvider from "./components/AppProvider";
const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Navigation />
        <div className="tiles-container">
          <BodyContainer />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
