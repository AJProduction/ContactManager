import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="container">
          <a href="/" className="navbar-brand mb-0 h1">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
