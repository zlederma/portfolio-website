import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import TritonJam from './pages/TritonJam';
import TemperatureBlanket from './pages/TemperatureBlanket';
import InstacartRedesign from './pages/InstacartRedesign';
import PortfolioCeption from './pages/PortfolioCeption';
import './App.css';
import Footer from './components/Footer';
import ArtSquares from './components/ArtSquares';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/triton-jam" component={TritonJam} />
          <Route path="/projects/temperature-blanket" component={TemperatureBlanket} />
          <Route path="/projects/instacart-redesign" component={InstacartRedesign} />
          <Route path="/projects/portfolioception" component={PortfolioCeption} />
        </Switch>
      </Router>
      <Footer />
      <ArtSquares />
    </>
  )
}

export default App;
