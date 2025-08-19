/* Component in MoodboardsPage to display all the Cards 
 * Contains Moodboard  */  
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MoodboardTop from "./MoodboardTop";

const Moodboards = ({moodshots, setMoodshots} ) => {
  return (
    <div>
        <Row>
        {moodshots.results.map((shot) => (
            <Col xs={12} sm={6} md={4} lg={3}  
            className="py-2 px-1 px-md-3 mx-0">
              <MoodboardTop 
              shot={shot}
              setMoodshots={setMoodshots}
              key={shot.id} {...shot} />
            </Col>
        ))}
        </Row>
    </div>
  )
}
export default Moodboards