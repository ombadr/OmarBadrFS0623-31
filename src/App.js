import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import ClassButtonComponent from './components/ClassButtonComponents';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello World!</h1>
      </header>
      <ImageComponent src="https://miro.medium.com/v2/resize:fit:1024/1*OohqW5DGh9CQS4hLY5FXzA.png" alt="Hello World" />
      <ButtonComponent text="Hello World" />
      <ClassButtonComponent text="Class button" />
    </div>
  );
}

export default App;
