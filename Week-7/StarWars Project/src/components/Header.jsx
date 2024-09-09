import { useContext, useState } from "react";
import { StarshipContext } from "../context/StarshipsContext";
import Logo from "../assets/logo.png";
import "../css/header.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearch } = useContext(StarshipContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      handleSearch(value);
    } else {
      handleSearch("");
    }
  };

  return (
    <>
      <header id="header">
        <img src={Logo} alt="Logo" className="logo" />
        <div>
          <input
            type="text"
            className="search-input"
            placeholder="Search ships"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
