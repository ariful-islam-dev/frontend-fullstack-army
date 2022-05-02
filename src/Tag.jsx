import React from "react";

const Tag = ({ tag }) => {
  return (
    <li>
      <small>{tag.icon}</small> - {tag.text}
    </li>
  );
};

export default Tag;
