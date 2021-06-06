import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
//import Wrapper from "./components/wrapper";
//import MainPage from "./components/main"
import AboutMe from "./pages/AboutMe/index";
import Portfolio from "./pages/Portfolio/index";
import ContactMe from "./pages/Contact/index";
//import NavBar from "./components/Nav/navbar";

function App() {
  return (
    <Router>
      <div>
      
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={ContactMe} />
      </div>
      </Router>

  );
}

export default App;
