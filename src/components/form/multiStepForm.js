import React, { useCallback, useEffect, useState } from "react";
import BusinessForm from "./businessForm/businessForm";
import CampaignForm from "./campaignForm/campaignForm";
import { useMultiStepFormState } from "./multiStepFormReducer";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import right from "../../images/right.svg";
import back from "../../images/back.svg";
import TargetForm from "./targetForm/targetForm";
import ChartScreen from "../chartScreen/chartScreen";

function useFormProgress() {
  const [currentStep, setCurrentStep] = useState(0);
  const [active, setActive] = useState('');

  function goForward() {
    setCurrentStep(currentStep + 1);
  }

  function goBack() {
    setCurrentStep(currentStep - 1);
  }

  function handleActiveTrackBarIcon() {
    setActive('active');
  }

  return [currentStep, goForward, goBack, active, handleActiveTrackBarIcon];
}



function MultiStepForm({handleNavigate,navigate}) {
  const [validated, setValidated] = useState(false);
  const [formVal, setFormVal] = useState({
    myRange: "",
    dailyBudget: "",
    costPerLead: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = useCallback(event => {
    const {name, value} = event.target;
    setFormVal({...formVal,[name]: value});
  })

  const handleDateRange = (name,value) => {
    setFormVal({...formVal, [name]: value});
  }
  const { dispatch, state } = useMultiStepFormState();
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch({ type: "SUBMIT" });

      // Simulated network request :)
      setTimeout(() => {
        dispatch({ type: "SUBMISSION_RECEIVED" });
      }, 1500);
    }
    setValidated(true);
  };
  const steps = [<BusinessForm key="business"/>, <CampaignForm key="campaign"/>, <TargetForm handleChange={handleChange} handleDateRange={handleDateRange} status={false}/>, <TargetForm handleChange={handleChange} handleDateRange={handleDateRange} status={true} handleSubmit={handleSubmit} validated={validated} />];
  const [currentStep, goForward, goBack, active, handleActiveTrackBarIcon] = useFormProgress();
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;
  

  const flexEnd = {
    justifyContent: 'flex-end'
  }

  const spaceBetween = {
    justifyContent: 'space-between'
  }

  useEffect(() => {
    handleActiveTrackBarIcon();
  },[active])

  if (navigate) {
    return (
      <div className="App"><ChartScreen /></div>
    )
  }

  if (state.isSubmitLoading) {
    return (
      <div className="App align-items-center justify-content-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (state.isSubmissionReceived) {
    let my_json = JSON.stringify(formVal);
    let parsed_obj = JSON.parse(my_json);
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="6">
              <h1 style={{fontWeight: 'bold'}}>Congratulations!</h1>
              <p>your campaign is being processed. We will start delivering the first lead within the next 24 hours</p>
              <Button variant="primary" className="text-white text-capitalize mt-4 mb-3" onClick={handleNavigate}>Go to Dashboard <img src={right} /></Button>
            </Col>
            <Col md="6">
              <div className="resultWrapper">
                <p><span></span>Leads: <span>{parsed_obj.myRange}</span></p>
                <hr/>
                <p><span>Daily Budget:</span> <span>{parsed_obj.dailyBudget}</span></p>
                <hr/>
                <p><span>Cost PerLead:</span> <span>{parsed_obj.costPerLead}</span></p>
                <hr/>
                <p><span>Start Date:</span>  <span>{parsed_obj.startDate}</span></p>
                <hr/>
                <p><span>End Date:</span> <span>{parsed_obj.endDate}</span></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div key="multiStepFormWrapper" className='multiStepFormWrapper'>
      <Col key="multiStepCol" md="12">
        <div className="trackbar" key="multiStepTrackBar">
          {steps.map((step,idx) => {
            return <span id={`step${idx+1}`} className={`whichStep step${idx+1} ${idx == currentStep ? `${active}` : ''}`}>{idx+1}</span>
          })}
        </div>
        {steps[currentStep]}
        <div key="multiStepActionWrapper" className="d-flex mt-3" style={isFirst ? flexEnd : spaceBetween }>
          {!isFirst && <Button variant="primary" className="text-white text-capitalize" onClick={() => goBack()}><img src={back} />Go Back</Button>}
          {isLast ? '' : <Button variant="primary"
            className="text-white text-capitalize"
            type="submit"
            onClick={e => {
              e.preventDefault();
              if (!isLast) {
                goForward();
              }
            }}
          >
            Next <img src={right} />
          </Button>}
        </div>
      </Col>
    </div>
  );
}

export default MultiStepForm;
