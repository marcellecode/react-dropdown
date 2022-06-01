import React, { useState } from "react";
import "./App.css";

function App() {
  const [dropdownState, setDropdownState] = useState(false);

  const handleButtonClick = () => {
    setDropdownState(!dropdownState);
  };

  //TODO Corrigir para fechar o dropdown quando o usuário clicar fora
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //       setDropdownState(false);
      
  //   };
  //   return () => {
  //     window.removeEventListener("mousemove", handleClickOutside);
  //   };
  // });

  // console.log(dropdownState);

  return (
    <div className="container">
      <button type="button" onClick={handleButtonClick}>
        open
      </button>
      {dropdownState && (
        <div className="dropdown">
          <div className="headerDropdown">Header dropdown</div>
          <div className="dropdownList">
            <button className="dropdownListItem">Item 1</button>
            <button className="dropdownListItem">Item 2</button>
            <button className="dropdownListItem">Item 3</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
