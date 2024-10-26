import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <h1>Farm-to-Table</h1>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
