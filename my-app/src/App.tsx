import './App.css';
import InputForm from './components/inputForm/InputForm'
import ParentComponent from './components/ParentComponent';

function App() {

  return (
    <div className="App">
      <h1> Department information </h1>
      <InputForm />
      <ParentComponent />
      <button className="btnSave"> Save </button>
    </div>
  );
}

export default App;
