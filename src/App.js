import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;