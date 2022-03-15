import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  LineController,
} from 'chart.js';
import { Line, Bar } from "react-chartjs-2";
import { lineChartData } from "../../utils";
import ReactDatePicker from "react-datepicker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  LineController
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'september', 'october','November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [50,150,100,200,250,500,350,400,650,500,570,600,680,750,800,900,1000],
      backgroundColor: '#96dce3',
    }
  ],
};

export const chartOptions = {
  plugins: {
    legend: {
      position: 'top',
      display: false
    }
  },
  scales: {
    y: {
      display: false
    },
    x: {
      display: false
    }
  }
};

function ChartScreen() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const handleStartDate = (newDate) => {
    setStartDate(newDate);
  }

  const handleEndDate = (newDate) => {
    setEndDate(newDate);
  }
  return (
    <>
      <Row>
        <Col md="12">
          <div>
            <h1>Campaign Name</h1>
            <p>Your campaign is being processed. We will start delivering the first lead within the next 24 hours</p>
            <div className="dateSelectorWrapper">
            <ReactDatePicker 
              placeholderText="start date"
              id="startDatePicker"
              showPopperArrow={false}
              selected={startDate}
              name="startDate"
              onChange={handleStartDate}
              className="form-control text-capitalize"
              style={{width: '100%'}} />
              <ReactDatePicker 
                placeholderText="end date"
                id="endDatePicker"
                showPopperArrow={false}
                selected={endDate}
                name="endDate"
                onChange={handleEndDate}
                className="form-control text-capitalize"
                style={{width: '100%'}} />
            </div>
          </div>
          <div className="controlBtn">||</div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div style={{backgroundColor: '#ebebeb', padding: '25px', color: '#535353', borderRadius: '6px'}} className="mb-5">
            <p className="mb-2">Spend</p>
            <h1 style={{fontWeight: 'bold'}}>$3,245</h1>
            <Bar data={data} options={chartOptions}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div style={{backgroundColor: '#ebebeb', padding: '25px', color: '#535353', borderRadius: '6px'}} className="mb-5">
            <p className="mb-2">Leads</p>
            <h1 style={{fontWeight: 'bold'}}>1,298</h1>
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div style={{backgroundColor: '#ebebeb', padding: '25px', color: '#535353', borderRadius: '6px'}} className="mb-5">
            <p className="mb-2">Leads</p>
            <h1 style={{fontWeight: 'bold'}}>$3.4</h1>
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ChartScreen;