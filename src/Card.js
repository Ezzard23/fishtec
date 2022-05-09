import React from "react";
import './Card.css';

export default function Card(props) {
  const { domain } = props;
  return (
    <div class="resultCard">   
      <h4 class="bolder">{domain}</h4>
      <span><b>Domain</b>{domain.domainName}</span>
    </div>
  );
}