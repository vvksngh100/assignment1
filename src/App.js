import logo from './logo.svg';
import './App.css';
import FunctionalCounter from './components/FunctionalCounter';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Assignment-2 Counter Application</h1>
      <FunctionalCounter>        
      <h3>Functional Component</h3>
      </FunctionalCounter>
      <ClassCounter>
      <h3>Class Component</h3>
      </ClassCounter>
      </div>
    </div>
  );
}

export default App;
