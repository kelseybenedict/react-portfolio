import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper";
//import MainPage from "./components/main"
import AboutMe from "./pages/AboutMe/index";
import Portfolio from "./pages/Portfolio/index";

function App() {
  return (
    <Router><div className="App">
      <Wrapper>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Wrapper>

    </div></Router>

  );
}

export default App;
