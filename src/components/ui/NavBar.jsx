export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">DronExperts</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            { /* List Item */ }
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reseñas de drones
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Reseñas generales
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Reseñas individuales
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Guías de compra
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Drones para principiantes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Drones para fotografía aérea
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Drones de carreras
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Comparativas de drones
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Drones por rango de precios
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Drones por características
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Accesorios para drones
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Accesorios esenciales
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Accesorios especiales
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Noticias
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Consejos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Tutoriales
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
          </ul>
        </div>
      </div>
    </nav>
  );
}
