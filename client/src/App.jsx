import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-col">
        <h1 className="text-center">Disco Dogs</h1>
        <Link to="/">Home</Link>
      </div>
      <Router>
        <Main path="/" />
        <Create path="/new" />
      </Router>
    </div>
  );
}

export default App;
