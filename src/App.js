import './App.scss';

function App() {
   return (
      <div className="App">

         <header className="App-header">

            <img src="profile-pic.png" className="App-logo" alt="logo" />

            <p>
               Hello and welcome to my professional portfolio website!
            </p>
            <br></br>

            <div id="credentials">

               <a href="https://www.linkedin.com/in/felix-g%C3%BCndling-4b143a1b5/">
                  <img src="LinkedIn_logo_initials.png.webp" alt="logo" />
               </a>

               <a href="https://github.com/fguendling">
                  <img src="github-mark.png" alt="logo" />
               </a>

               <a href="https://www.credly.com/users/felix-gundling.5266ff70">
                  <img src="credly.png" alt="logo" />
               </a>
      
               <a href="https://www.credential.net/profile/felixgndling630115/wallet">
                  <img src="1650028743528.jfif" alt="logo" />
               </a>
            </div>

         </header>

         <div data-aos="zoom-in" data-aos-offset="200">

         <h1>
            What I'm currently interested in.
         </h1>
            <img id="word_cloud"src="word_cloud.svg" alt="Word Cloud" width="90%"></img>

         </div>

         <div data-aos="zoom-in" data-aos-offset="400">
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
               <h2 id="project1" className="text-shadow">Project 1</h2>
            </div>
            <div className="back" style={{ background: "#81d8d0" }}>
               <h2>Task: Systems Development and Operation</h2>
               <p>For a client in the pharmaceutical industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#e4decd" }}>
               <h2 id="project2" className="text-shadow">Project 2</h2>
            </div>
            <div className="back" style={{ background: "#e4decd" }}>
               <h2>Task: Cloud Foundation Design (GCP)</h2>
               <p>For a client in the energy industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#ffdab9" }}>
               <h2 id="project3" className="text-shadow">Project 3</h2>
            </div>
            <div className="back" style={{ background: "#ffdab9" }}>
               <h2>Task: Solution Design & Software Development</h2>
               <p>For a client in the aerospace industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#7c677f" }}>
               <h2 id="project4" className="text-shadow">Project 4</h2>
            </div>
            <div className="back" style={{ background: "#7c677f" }}>
               <h2>Task: AI methods evaluation and prototyping</h2>
               <p>For a client in the logistics industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#333333" }}>
               <h2 id="project5" className="text-shadow">Project 5</h2>
            </div>
            <div className="back" style={{ background: "#333333" }}>
               <h2>Task: Consulting, database development</h2>
               <p>For a client in the banking industry</p>
            </div>
         </div>
         <div className="flip flip-vertical">
            <div className="front" style={{ background: "#4b6777" }}>
               <h2 id="project6" className="text-shadow">Project 6</h2>
            </div>
            <div className="back" style={{ background: "#4b6777" }}>
               <h2>Task: Database development</h2>
               <p>For a client in the banking industry (yet another one)</p>
            </div>
         </div>
         </div>

         <br></br>
         <footer>© 2023 Felix Gündling
         </footer>
      </div>
   );
}

export default App;
