import logo from './logo.svg';
import './App.css';
import Child from './Child';
import Parent from'./Parent';

function App() {
  return (
    <div className="App">
      <Parent>
        <Child/>
      </Parent>
    </div>
  );
}

export default App;
