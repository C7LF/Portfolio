import React from 'react';

class Nav extends React.Component {
  render() {
    const home = window.location.href == "/"
    const classNHome = 'navbar-home'

    return (
      <>
        <div className="container">
          <nav className={`navbar navbar-expand-lg navbar-light bg-light`+ home && classNHome}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}

export default Nav;
