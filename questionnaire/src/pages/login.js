export default function Login() {
    return (
        <div className="login">
            <form>            
            <h1>Bejelentkezés</h1>
            <div>
                <label htmlFor="username">Felhasználónév</label>
                <input type="text" placeholder="Felhasználónév" className="control"/>
            </div>
            <div>
                <label htmlFor="password">Jelszó</label>
                <input type="password" placeholder="Jelszó" className="control"/>
            </div>
            <div>
                <button className="button">Bejelentkezés</button>
            </div>
            </form>
        </div>
    )
}