import React, { Component } from 'react'
import { Form,Row,Button } from 'react-bootstrap'

export default class FormExplorer extends Component {
   
    render() {
        return (
            <div>
                 <Form onSubmit={this.props.Submit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="City Name" onChange={this.props.FormDataLocation} />
                        </Form.Group>
                    </Row>
                            <Button className="explore" info="dark" type="submit">
                                Explore
                           </Button>
                </Form>  
            </div>
        )
    }
}
