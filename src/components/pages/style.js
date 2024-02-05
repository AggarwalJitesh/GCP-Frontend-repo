import React from "react";
import "../pagesCSS/styleCSS.css";

const Template = () => {
  const items = [
    {
      id: 1,
      headline: "Headline",
      text: "Lorem ipsum dolor sit consectetur adipiscing elit. Alias amet deleniti et fugit iusto nesciunt.",
    },
    {
      id: 2,
      headline: "Headline",
      text: "Lorem ipsum dolor sit consectetur adipiscing elit. Alias amet deleniti et fugit iusto nesciunt.",
    },
    {
      id: 3,
      headline: "Headline",
      text: "Lorem ipsum dolor sit consectetur adipiscing elit. Alias amet deleniti et fugit iusto nesciunt.",
    },
  ];

  return (
    <div className="template">
      {items.map((item) => (
        <div key={item.id} className="card">
          <div className={`circle circle-${item.id}`}>{item.id}</div>
          <h2>{item.headline}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Template;
