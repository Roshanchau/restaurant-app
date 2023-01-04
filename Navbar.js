import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((x) => {
            return (
              <button className="btn-group__item" onClick={() => filterItem(x)}>
                {/* we use the curly braces here to refer the respected menuList. */}
                {x}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
