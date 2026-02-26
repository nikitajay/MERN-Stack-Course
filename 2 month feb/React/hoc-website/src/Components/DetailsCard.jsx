import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/esm/CardTitle';


const DetailsCard = ({CardTitle ,cardDescription } ) => {
    return (
        <div>
            <Card className='' >
                <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/480/640/kxrvi4w0/wallpaper/1/x/b/92-62-1-poster-no-56-color-solution-original-imaga5qs78zzx4fm.jpeg?q=90" />
                <Card.Body>
                    <Card.Title> {CardTitle} </Card.Title>
                    <Card.Text>
                      {cardDescription}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailsCard
