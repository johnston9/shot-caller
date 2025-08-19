/* Component in IndexCardsPage to display all the Cards 
 * Contains IndexCard  */  
import React from "react";
import IndexCard from "./IndexCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const IndexCards = ({indexCards, setIndexCards, setHasOrder} ) => {
  return (
    <div>
        <Row>
        {indexCards.results.map((card) => (
            <Col xs={12} sm={6} md={4} lg={3}
            className="py-2 px-1 px-md-3 mx-0">
              <IndexCard 
              card={card}
              setHasOrder={setHasOrder}
              setIndexCards={setIndexCards}
              key={card.id} {...card} />
            </Col>
        ))}
        </Row>
    </div>
  )
}

export default IndexCards