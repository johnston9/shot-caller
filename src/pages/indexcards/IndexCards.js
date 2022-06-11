import React from "react";
import { useRedirect } from "../../hooks/Redirect";
import IndexCard from "./IndexCard";

const IndexCards = ({indexCards, setHasOrder, setShowEdit} ) => {
    useRedirect("loggedOut");
  return (
    <div>
        {indexCards.results.map((card) => (
        <IndexCard setShowEdit={setShowEdit} 
        setHasOrder={setHasOrder}
        key={card.id} {...card} />
        ))}
    </div>
  )
}

export default IndexCards