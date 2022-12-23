import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src="profile-pic.png" className="App-logo" alt="logo" /> 
        
        <p>
          Hello! 
          <p>
            This is my project portfolio. 
            It presents further details about the projects that I have worked on in the past.
          </p>
            
            { /*
            Content idea:
            Job Title     Client Industry     Duration     Project Summary

            Design:
            https://codepen.io/aron-tw/pen/pLJqgE
            */
            }

        </p>
      </header>

      <div className="flip flip-vertical">
    <div className="front">
       <h1 className="text-shadow">Project 1</h1>
    </div>
    <div className="back">
       <h2>Pharmaceutical Industry</h2>
       <p>Systems Development and Operation</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front">
       <h1 className="text-shadow">Project 2</h1>
    </div>
    <div className="back">
       <h2>Energy Industry</h2>
       <p>Cloud Foundation Design</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front">
       <h1 className="text-shadow">Project 3</h1>
    </div>
    <div className="back">
       <h2>Aerospace Industry</h2>
       <p>Project Lead and Software Developer</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front">
       <h1 className="text-shadow">Project 4</h1>
    </div>
    <div className="back">
       <h2>Logistics Industry</h2>
       <p>AI Method Evaluation and Prototyping</p>
    </div>
</div>

<div className="flip flip-vertical">
    <div className="front">
       <h1 className="text-shadow">Project 5</h1>
    </div>
    <div className="back">
       <h2>Banking Industry</h2>
       <p>Consulting, Database Development</p>
    </div>
</div>
<div className="flip flip-vertical">
    <div className="front">
       <h1>Project 6</h1>
    </div>
    <div className="back">
       <h2>Banking Industry</h2>
       <p>Software Development</p>
    </div>
</div>

<br></br>
<footer>Developed by Felix Gündling in 2022</footer>
    </div>
  );
}

export default App;
