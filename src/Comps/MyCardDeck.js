import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import chairSet from '../Images/chairSet.jpg'
import sofa from '../Images/greenSofa.jpg'
import lamp from '../Images/lamp.jpg'

function MyCardDeck() {
    return(
        // https://unsplash.com/s/photos/furniture
    <CardDeck>
        <Card>
            <Card.Img variant="top" src={chairSet} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus magna et 
                    metus tempus, vel euismod risus commodo. Sed iaculis, eros ut suscipit ultricies, 
                    ex justo commodo odio, vel tempus dui nunc et elit. Class aptent taciti sociosqu ad 
                    litora torquent per conubia nostra, per inceptos himenaeos. Ut sagittis turpis risus, 
                    pharetra varius leo ultrices vitae. 
      </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={sofa} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus magna et 
                    metus tempus, vel euismod risus commodo. Sed iaculis, eros ut suscipit ultricies, 
                    ex justo commodo odio, vel tempus dui nunc et elit. Class aptent taciti sociosqu ad 
                    litora torquent per conubia nostra, per inceptos himenaeos. Ut sagittis turpis risus, 
                    pharetra varius leo ultrices vitae. 
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={lamp} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus magna et 
                    metus tempus, vel euismod risus commodo. Sed iaculis, eros ut suscipit ultricies, 
                    ex justo commodo odio, vel tempus dui nunc et elit. Class aptent taciti sociosqu ad 
                    litora torquent per conubia nostra, per inceptos himenaeos. Ut sagittis turpis risus, 
                    pharetra varius leo ultrices vitae. 
      </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardDeck>
    );
}
export default MyCardDeck