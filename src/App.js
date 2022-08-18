import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import TemperatureBlanket from './pages/TemperatureBlanket';
import InstacartRedesign from './pages/InstacartRedesign';
import PortfolioCeption from './pages/PortfolioCeption';
import './App.css';
import Footer from './components/Footer';
import { useState, useEffect } from "react";
import { getCaseStudyModel } from './utils/case-study-model-adapter';

function App() {
  const [page, setPage] = useState(null);
  useEffect(() => {
    const data = getCaseStudyModel().then(data => setPage(data));
  }, []);
  console.log(page);
  return (
    <div style={{ minWidth: "100vw" }}>
      {/* {page ?
        <div className="App">
          <header className="App-header">
            <img src={page.logo.url} className="App-logo" alt="logo" />
            <p>{page.title}</p>
          </header>
        </div> : <div></div>} */}
      <Navigation></Navigation>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/temperature-blanket" component={TemperatureBlanket} />
          <Route path="/projects/instacart-redesign" component={InstacartRedesign} />
          <Route path="/projects/portfolioception" component={PortfolioCeption} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
