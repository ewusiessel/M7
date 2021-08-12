import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default class MainSearch extends React.Component {
  state = {
    query: "",
  };

  baseEndpoint = "https://remotive.io/api/remote-jobs?search=";
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Control type="search" value={this.state.query} />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
