import React, { Component } from 'react'
import {Container,Col,Row,Image} from 'react-bootstrap'
export default class Location extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h4>City: {this.props.cityName}</h4>
                            <h4>Country: {this.props.cityName}</h4>
                            <h4>Latitude: {this.props.lat}</h4>
                            <h4>Longitude: {this.props.lon}</h4>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Image src={`https://maps.locationiq.com/v3/staticmap?
                            key=${process.env.REACT_APP_LOCATION_KEY}&
                            markers=${this.props.lat},${this.props.lon}|icon:large-black-cutout&format=png&size=650x650&zoom=12`} rounded />
                        </Col>
                    </Row>
                </Container> 
            </div>
        )
    }
}
