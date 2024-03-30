import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ items = [] }) => {
  return (
    <ul className="menu__list__container">
      {items && items.length
        ? items.map((item) => <MenuItem key={item.label} item={item} />)
        : null}
    </ul>
  );
};

export default MenuList;
