import React from 'react';
import QuranPalIntro from './QuranPalIntro';
import './App.css';

function App() {
  return (
    <div className="App">
      <video id="myVideo" autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
        <source src="/Waterfall Clip.mp4" type="video/mp4" />
      </video>

      <div className="content-container">
        <div className='container'>
          <img src="/logo.png" alt="SuperViral.ai logo" width="540" height="300" />
          <div className="introText">
            <p>This is an interface to interact with QuranPal.</p>
            <p>Feel free to ask questions, share insights, or engage in any way you want.</p>
          </div>
          <QuranPalIntro />
        </div>

        <div className='footer'>
        <p>For any inquiries, please contact us at jestemrano@watashiwayo.ru </p>
        <p>QuranPal is an interactive platform designed to encourage engagement with the Quran. </p>
        <p>We aim to simplify Quranic studies by providing concise and clear answers, and suggesting Surahs for further reading. Our mission is to inspire more people to start reading the Quran and explore its teachings in depth. </p>
        </div>
      </div>
    </div>
  );
}

export default App;
