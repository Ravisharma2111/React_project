import React from 'react'
import './Body.css';
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Body() {
  return (
    <div>
      <div className='bodyarea7'>
        <Card className='bodyarea1'>

      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted textarea">Total Value Locked (USD)</Card.Subtitle>
      <Card.Text className='textarea2' >
      $26.65B
        </Card.Text>

        </Card.Body>
        
    </Card>
    <Card className='bodyarea2'>

      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted textarea"> Curve Finance Dominance </Card.Subtitle>
      <Card.Text className='textarea2' >
      35.92%
        </Card.Text>

        </Card.Body>
        
    </Card>
    <Card className='bodyarea3'>

      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted textarea"> DeFi Pulse Index </Card.Subtitle>
      <Card.Text className='textarea2' >
      402.03
        </Card.Text>
       <Card.Text className='textarea4' > +19.76<br/> (+5.17%) </Card.Text>
        <Card.Subtitle className='textarea3' >
        Available from <a href='#' > TokenSets </a> 
        </Card.Subtitle>

        </Card.Body>
        
    </Card>
    </div>
   
    <Card className='bodyarea5'>

<Card.Body>
<Card.Subtitle className="mb-2 text-muted textarea5">  Price Chart  </Card.Subtitle>
  </Card.Body>
  
</Card>












    </div>
  )
}

export default Body