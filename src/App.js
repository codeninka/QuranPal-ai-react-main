import CodebenderIntro from './CodebenderIntro';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src="/logo.png" alt="SuperViral.ai logo" width="540" height="300" />

        <p>This is an interface to interact with QuranPal.</p>
        <p>Feel free to ask questions, share insights, or engage in any way you want.</p>
        <CodebenderIntro />
      </div>
    </div>
  );
}

export default App;
