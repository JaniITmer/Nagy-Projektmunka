import './Home.css';

export default function Home() {
    return (
      <div class="main-page">
        <div className="topics">
        <h1>Elérhető kérdőív témák</h1>
        
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content">
                <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>

            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
          <h2>Saját kérdőív</h2>
          <div class="card-content">
            <button className="ujKerdoivGomb">+</button>
          </div>
        </div>
        

        </div>
        <div class="main-page-info">
            <h1>Jelenleg vendég módban van!</h1>
            <h1>A kérdőívek kitöltéséhez jelentkezzen be!</h1>
        </div>
      </div>
    )
  }