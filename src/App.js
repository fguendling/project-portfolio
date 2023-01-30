import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src="profile-pic.png" className="App-logo" alt="logo" /> 
        
        <p>
          Hello! 
          <h1>
            This is my project portfolio. 
            It presents further details about some of the projects that I have worked on in the past.
          </h1>
            
            { /*
            Original Design:
            https://codepen.io/aron-tw/pen/pLJqgE
            */
            }

        </p>
      </header>

      <div className="flip flip-vertical">
    <div className="front" style={{ background: "#81d8d0" }}>
       <h1 className="text-shadow">Project 1</h1>
    </div>
    <div className="back" style={{ background: "#81d8d0" }}>
       <h2>Task: Systems Development and Operation</h2>
       <p>For a client in the pharmaceutical industry</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front" style={{ background: "#fff68f" }}>
       <h1 className="text-shadow">Project 2</h1>
    </div>
    <div className="back" style={{ background: "#fff68f" }}>
       <h2>Task: Cloud Foundation Design (GCP)</h2>
       <p>For a client in the energy industry</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front" style={{ background: "#ffdab9" }}>
       <h1 className="text-shadow">Project 3</h1>
    </div>
    <div className="back" style={{ background: "#ffdab9" }}>
       <h2>Task: Solution Design & Software Development</h2>
       <p>For a client in the aerospace industry</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front" style={{ background: "#ff7f50" }}>
       <h1 className="text-shadow">Project 4</h1>
    </div>
    <div className="back" style={{ background: "#ff7f50" }}>
       <h2>Task: AI methods evaluation and prototyping</h2>
       <p>For a client in the logistics industry</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front" style={{ background: "#333333" }}>
       <h1 className="text-shadow">Project 5</h1>
    </div>
    <div className="back" style={{ background: "#333333" }}>
       <h2>Task: Consulting, database development</h2>
       <p>For a client in the banking industry</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front" style={{ background: "#ff80ed" }}>
       <h1>Project 6</h1>
    </div>
    <div className="back" style={{ background: "#ff80ed" }}>
       <h2>Task: Database development</h2>
       <p>For a client in the banking industry (yet another one)</p>
    </div>
</div>

<br></br>
<footer>© 2023 Felix Gündling</footer>
    </div>
  );
}

export default App;
