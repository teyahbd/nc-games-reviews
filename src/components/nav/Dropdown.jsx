import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = ({ allCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  function showNav() {
    setIsOpen(!isOpen);
  }

  if (isOpen === false)
    return (
      <div id="dropdown-container">
        <div id="dropdown-button">
          <button onClick={showNav}>CATEGORIES</button>
        </div>
      </div>
    );
  return (
    <div id="dropdown-container">
      <div id="dropdown-button">
        <button onClick={showNav}>CATEGORIES</button>
      </div>
      <div id="dropdown-nav">
        <Link to={"/home"} className="dropdown-link">
          all
        </Link>
        {allCategories.map((category) => {
          return (
            <Link
              key={`${category.slug}`}
              to={`/${category.slug}`}
              className="dropdown-link"
            >{`${category.slug.replace(/-/g, " ")}`}</Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
