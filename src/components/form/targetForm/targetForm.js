import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductData } from "../../../utils";
import CreditCard from "../creditCardForm";
import LeadForm from "../leadForm";

function TargetForm({status, handleChange, handleDateRange}) {
  const [range, setRange] = useState(0);

  const handleRange = (e) => {
    const {name,value} = e.target;
    setRange(e.target.value);
    let newRange = (value/4)+"-"+(value/2);
    handleDateRange(name,newRange);
  }

  return (
    <Row className="mb-5">
      {status ?
        <CreditCard />
        :
        <Col md="6" className="mt-5">
          <h1>{ProductData.targetTitle}</h1>
          <p>{ProductData.text}</p>
          <div className="slidecontainer">
            <input id="myRange" type="range" min="1" max="100" value={range} className="slider" name="myRange" onChange={handleRange}  />
            <div className="rangeBar" style={{left:`${range - 3}%`}}>{range}</div>
          </div>
        </Col>
      }
      
      <Col md="6" className="mt-5">
        <LeadForm range={range} handleChange={handleChange} handleRange={handleRange} handleDateRange={handleDateRange} status={status} />
      </Col>
    </Row>
  )
}

export default TargetForm;