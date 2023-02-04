import './App.scss';

function App() {
   return (
      <div className="App">

         <header className="App-header">

            <img src="profile-pic.png" className="App-logo" alt="logo" />

            <p>
               Hello and welcome to my professional portfolio website!
            </p>
         </header>

         <h1>
            What I'm currently interested in.
         </h1>

         <div>
            <img src="word_cloud.svg" alt="Word Cloud" width="90%"></img>
         </div>

         <h1>
            What I have done in the past.
         </h1>

         { /*
      Original Cards Design:
      https://codepen.io/aron-tw/pen/pLJqgE
      */
         }
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#81d8d0" }}>
               <h2 className="text-shadow">Project 1</h2>
            </div>
            <div className="back" style={{ background: "#81d8d0" }}>
               <h2>Task: Systems Development and Operation</h2>
               <p>For a client in the pharmaceutical industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#fff68f" }}>
               <h2 className="text-shadow">Project 2</h2>
            </div>
            <div className="back" style={{ background: "#fff68f" }}>
               <h2>Task: Cloud Foundation Design (GCP)</h2>
               <p>For a client in the energy industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#ffdab9" }}>
               <h2 className="text-shadow">Project 3</h2>
            </div>
            <div className="back" style={{ background: "#ffdab9" }}>
               <h2>Task: Solution Design & Software Development</h2>
               <p>For a client in the aerospace industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#ff7f50" }}>
               <h2 className="text-shadow">Project 4</h2>
            </div>
            <div className="back" style={{ background: "#ff7f50" }}>
               <h2>Task: AI methods evaluation and prototyping</h2>
               <p>For a client in the logistics industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#333333" }}>
               <h2 className="text-shadow">Project 5</h2>
            </div>
            <div className="back" style={{ background: "#333333" }}>
               <h2>Task: Consulting, database development</h2>
               <p>For a client in the banking industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#ff80ed" }}>
               <h2>Project 6</h2>
            </div>
            <div className="back" style={{ background: "#ff80ed" }}>
               <h2>Task: Database development</h2>
               <p>For a client in the banking industry (yet another one)</p>
            </div>
         </div>

         <br></br>
         <footer>© 2023 Felix Gündling. Contact me on <a href="https://www.linkedin.com/in/felix-g%C3%BCndling-4b143a1b5/"> LinkedIn</a>
         </footer>
      </div>
   );
}

export default App;
