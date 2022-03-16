import React, { useState} from "react";
import { Button, Col, FloatingLabel, Form } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";

function LeadForm({range, handleChange, handleRange, handleDateRange, status, handleSubmit, validated}) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const handleStartDate = (newDate) => {
    setStartDate(newDate);
    handleDateRange('startDate',newDate);
  }

  const handleEndDate = (newDate) => {
    setEndDate(newDate);
    handleDateRange('endDate',newDate);
  }
  
  return (
    <Form className="position-relative" id="leadForm" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Col} md="12" className="text-capitalize">
        <FloatingLabel controlId="floatingLead" label="leads per day" className="mb-3">
          <Form.Control required type="text" name="leadRange" controlId="leadRange" placeholder="leads per day" value={(range/4)+"-"+(range/2)} onChange={handleRange} />
        </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} md="12" className="text-capitalize">
        <FloatingLabel controlId="floatingBudget" label="daily budget" className="mb-3">
          <Form.Control required type="text" controlId="dailyBudget" placeholder="daily budget" name="dailyBudget" onChange={handleChange}/>
        </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} md="12" className="text-capitalize">
        <FloatingLabel controlId="floatingCost" label="cost per lead" className="mb-3">
          <Form.Control required type="text" controlId="costPerLead"  placeholder="cost per lead" name="costPerLead" onChange={handleChange} />
        </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} md="12" className="mb-3" controlId="startDatePicker">
        <ReactDatePicker 
          placeholderText="start date"
          id="startDatePicker"
          showPopperArrow={false}
          selected={startDate}
          name="startDate"
          onChange={handleStartDate}
          className="form-control text-capitalize"
          style={{width: '100%'}} />
      </Form.Group>
      <Form.Group as={Col} md="12" controlId="endDatePicker">
        <ReactDatePicker
          placeholderText="end date"
          id="endDatePicker"
          showPopperArrow={false}
          selected={endDate}
          name="endDate"
          onChange={handleEndDate}
          className="form-control text-capitalize"
          style={{width: '100%'}} />
      </Form.Group>
      {status ? <Button variant="primary" className="text-white text-capitalize lead-submit-btn" type="submit">submit</Button> : ''}
    </Form>
  )
}

export default LeadForm;