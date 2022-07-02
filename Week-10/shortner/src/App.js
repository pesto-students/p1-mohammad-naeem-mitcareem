import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Pricing from './components/Pricing';
import Feature from './components/Feature';
import Resources from './components/Resources';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/feature" element={<Feature />} />
          <Route exact path="/resources" element={<Resources />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;