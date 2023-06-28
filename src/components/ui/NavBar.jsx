// Next.js
import NextLink from 'next/link';
import { useRouter } from 'next/router';


export const NavBar = () => {
  const { asPath } = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <NextLink
          href='/'
          passHref
          legacyBehavior
          
        >
          <p className="navbar-brand pointer">
            DronExperts
          </p>
        </NextLink>
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
              <NextLink
                href="/"
                passHref
                legacyBehavior
              >
                <span
                  className={ `nav-link ${ asPath === '/' ? 'active' : '' }` }
                >
                  Inicio
                </span>
              </NextLink>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Marcas de drones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NextLink
                    href="/dji"
                    passHref
                    legacyBehavior
                  >
                    <span className="dropdown-item pointer">
                      DJI
                    </span>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="/parrot"
                    passHref
                    legacyBehavior
                  >
                    <span className="dropdown-item pointer">
                      Parrot
                    </span>
                  </NextLink>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NextLink
                    href="/dji-mavic-2-pro"
                    passHref
                    legacyBehavior
                  >
                    <span className="dropdown-item pointer">
                      DJI Mavic 2 Pro
                    </span>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="/marcas-destacadas"
                    passHref
                    legacyBehavior
                  >
                    <span className="dropdown-item pointer">
                      DJI Mavic 2 Pro
                    </span>
                  </NextLink>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Accesorios para drones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios esenciales
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios especiales
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reseñas de drones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NextLink
                    href="/marcas-destacadas"
                    passHref
                    legacyBehavior
                  >
                    <span className="dropdown-item pointer">
                      Marcas destacadas
                    </span>
                  </NextLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reseñas individuales
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Guías de compra
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Drones para principiantes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drones profesionales
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drones para fotografía aérea
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drones de carreras
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Preguntas frecuentes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    ¿Qué dron es bueno para fotos?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ¿Qué quiere decir 4K en un dron?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ¿Cuánto alcance tiene un dron profesional?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ¿Qué tipos de drones profesionales existen?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ¿Qué facilidad puede tener el uso de un dron?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ¿Qué es un dron industrial?
                  </a>
                </li>
              </ul>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Noticias relevantes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Noticias
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Consejos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
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
