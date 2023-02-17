import './App.css';
import CalculatorBody from './components/CalculatorBody';
import InputField from './components/InputField';
import Numbers from './components/Numbers';
import Operations from './components/Operations';


function App() {
  return (
    <div className="App">
      <CalculatorBody />
      <InputField />
      <Numbers />
      <Operations />
    </div>
  );
}

export default App;
