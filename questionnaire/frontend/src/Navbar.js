import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({loggedIn, onLogout}) {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Questionnaire
      </Link>
      <ul>
        {loggedIn && (
          <CustomLink to="/profil">Profil</CustomLink>
        )}
        <CustomLink to="/login">Bejelentkezés</CustomLink>
        <CustomLink to="/register">Regisztráció</CustomLink>
      </ul>
      {loggedIn && (
        <button onClick={onLogout}>Kijelentkezés</button>
      )}
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}