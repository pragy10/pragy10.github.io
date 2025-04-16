import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  const style = {
    padding: '20px',
    backgroundColor: darkMode ? '#333' : '#eee',
    color: darkMode ? 'white' : 'black',
    textAlign: 'center'
  };

  return <h1 style={style}>Welcome to Themed App</h1>;
};

export default Header;
