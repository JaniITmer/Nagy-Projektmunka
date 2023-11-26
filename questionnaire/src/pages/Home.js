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
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>

            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content2">
            <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content3">
            <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content4">
            <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content5">
            <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
            </div>
        </div>
        <div className="card">
            <h2>Téma</h2>
            <div class="card-content6">
            <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
                <p><Link to="/questionnaire" className="ujKerdoivGomb">
              kérdőív
            </Link></p>
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