import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper";
import MainPage from "./components/main"

function App() {
  return (
    <Router><div className="App">
      <Wrapper>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={MainPage} />
      </Wrapper>

    </div></Router>

  );
}

export default App;
