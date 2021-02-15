import { Link } from "@reach/router";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => (
  <div id="Footer">
    <Row>
      <Col xs={12}>
        <Link to="privacy-policy">Privacy Policy</Link>
        © 2021 Red Scarf Services Ltd
        <br />
        Company No. 12407870
        <br />
        48 Queen Edith's Way, Cambridge, England, CB1 8PW
        <br />
        {/* <a href="https://concepts.effectivealtruism.org/concepts/aid-effectiveness/">
          Further reading on aid
        </a> */}
      </Col>
    </Row>
  </div>
);
export default Footer;
