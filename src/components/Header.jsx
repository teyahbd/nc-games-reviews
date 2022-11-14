import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

const Header = ({ allCategories, user }) => {
  return (
    <div className="header">
      <div className="box">
        <span>
          {/* <NavDropdown title="Categories">
            {allCategories.map((category) => {
              return (
                <NavDropdown.Item
                  key={`${category.slug}`}
                  as={Link}
                  to={`${category.slug}`}
                  className="dropdown-text"
                >
                  {`${category.slug.replace(/-/g, " ")}`}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown> */}
          Categories
        </span>
      </div>
      <div className="box">
        <span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="header-title">NC Games</h1>
          </Link>
        </span>
      </div>
      <div className="box">
        <span>
          <UserWidget user={user} />
        </span>
      </div>
    </div>
  );
};

export default Header;
