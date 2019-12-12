import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const Explain = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button 
        onClick={toggle} 
        style={{marginBottom: '1vh'}} 
        color="secondary" 
        size="lg" 
        block
      >{isOpen ? 'See Less' : 'See More'}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
             <div className="description">
                <p>{props.explanation}</p>
              </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );

  // return (
  //   <div className="description">
  //     <p>{props.explanation}</p>
  //   </div>
  // )
}

export default Explain