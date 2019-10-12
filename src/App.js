import React from "react";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import Character from "./components/Character.js";
import { Route } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route path="/characters/:id" render={props => <Character {...props} />} />
    </main>
  );
}
