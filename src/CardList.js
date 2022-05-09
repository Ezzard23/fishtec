import React from "react";
import Card from "./Card";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.WhoIsRecord || [];
  }
  console.log(data);
  return (
    <div className="result">
      {data.map((item) => (
        <Card key={item.DomainName} domain={item} />
      ))}
    </div>
  );
}

export default CardList;