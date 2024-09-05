import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import '../css/header.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="input-section">
        <FaChevronDown className="header-icon"/>
        <input type="text" placeholder="What needs to be done?" />
        </div>
      </div>
    </>
  );
}

export default Header;
