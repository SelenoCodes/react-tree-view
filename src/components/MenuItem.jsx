import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

const MenuItem = ({ item }) => {
  const { label } = item;
  const [displayChildren, setDisplayChildren] = useState({});

  const handleChildren = (label) => {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
  };

  return (
    <li>
      <div className="menu__item">
        <h2>{label}</h2>
        {item.children && item.children.length ? (
          <span onClick={() => handleChildren(label)}>
            {displayChildren[label] ? <FaChevronRight /> : <FaChevronDown />}
          </span>
        ) : null}
      </div>

      {item && item.children && item.children && displayChildren[label] ? (
        <MenuList items={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
