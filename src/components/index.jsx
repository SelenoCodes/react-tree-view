import React from "react";
import MenuList from "./MenuList";
import "./styles.css";

const TreeView = ({ menu = [] }) => {
  return (
    <div className="tree__container">
      <MenuList items={menu} />
    </div>
  );
};

export default TreeView;
