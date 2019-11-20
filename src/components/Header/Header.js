import React from 'react';

function Header({headerText}) {
  return (
    <h1 style={{display: 'block'}} >
      {headerText} 
    </h1>
  )
}

export default Header;
