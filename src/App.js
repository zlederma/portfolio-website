import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import TemperatureBlanket from './pages/TemperatureBlanket';
import './App.css';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "1100px" }}>
          {/* <Welcome></Welcome>
      <ProjectCards></ProjectCards> */}
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects/temperature-blanket" component={TemperatureBlanket} />
            </Switch>
          </Router>
        </div>

      </div>
    </>
  )
}

export default App;
