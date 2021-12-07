import foto from './flo.jpg';
import './App.css';

function App() {
  return (
<div className="Cv">
    <header>
      <img src={foto} className="Cv-foto" alt="foto" />
      <h1>
        Floriana Domianello
      </h1>
    </header>
    
    <main className="container">

      <div className="descript">
        <h2>Descrizione</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In doloribus laborum dolorum perferendis esse neque illum harum, veritatis iusto corrupti deleniti nesciunt placeat error accusamus nihil commodi rerum delectus ducimus!</p>
      </div>

      <div className="job">
        <h2>Esperienze lavorative</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In doloribus laborum dolorum perferendis esse neque illum harum, veritatis iusto corrupti deleniti nesciunt placeat error accusamus nihil commodi rerum delectus ducimus!</p>
      </div>

      <div className="lang">
        <h2>Lingue</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In doloribus laborum dolorum perferendis esse neque illum harum, veritatis iusto corrupti deleniti nesciunt placeat error accusamus nihil commodi rerum delectus ducimus!</p>
      </div>

      <div className="hobbie">
        <h2>Hobbie</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In doloribus laborum dolorum perferendis esse neque illum harum, veritatis iusto corrupti deleniti nesciunt placeat error accusamus nihil commodi rerum delectus ducimus!</p>
      </div>
    </main>

      <div className="card">
        <form>
          <h2>Contattami</h2>
          <label className="obj">Oggetto</label>
          <input type="txt"></input>
          <label className="msg">Messaggio</label>
          <textarea></textarea>
        </form>
    </div>
    <footer>
    <p><span>Copyright 2021 - 2022 Edgemony </span>- Archive - powered by <a
      href="https://www.linkedin.com/in/floriana-domianello-0791a171" target="_blank">Floriana Domianello</a></p>
    </footer>
  </div>



  );
}

export default App;


