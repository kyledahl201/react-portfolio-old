import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import NotFound from "./pages/NoMatch";
import Contact from "./components/Contact"

class App extends React.Component {
  

 
//why
    
    
  
  render() {
    return (
      <div className="plants-of-the-day">
        <div className="menu">
          <Header tagline="chef turned programmer" />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/Contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
    
      </div>
    );
  }
}

export default App;
