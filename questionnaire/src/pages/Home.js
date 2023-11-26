import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <div class="main-page">
        <div className="topics">
        <h1>Elérhető kérdőív témák</h1>
        
        <div className="card">
            <h2>Utazas</h2>
            <div class="card-content1">
                <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>

            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content2">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content3">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content4">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content5">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content6">
            <p><button className="kerdoivGomb">Kérdőív 1</button></p>
                <p><button className="kerdoivGomb">Kérdőív 2</button></p>
                <p><button className="kerdoivGomb">Kérdőív 3</button></p>
            </div>
        </div>
        <div className="card">
          <h2>Saját kérdőív</h2>
          <Link to="/my-questionnaire" className="ujKerdoivGomb">
              +
            </Link>
        </div>
        

        </div>
        <div class="main-page-info">
            <h1>Jelenleg vendég módban van!</h1>
            <h1>A kérdőívek kitöltéséhez jelentkezzen be!</h1>
        </div>
      </div>
    )
  }