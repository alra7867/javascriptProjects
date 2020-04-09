import React, { Component } from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_kelly from "@amcharts/amcharts4/themes/animated";

import Card from 'react-bootstrap/Card';


import './App.css';
// am4core.useTheme(am4themes_animated);
// am4core.useTheme(am4themes_kelly);

class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 100;
chart.padddingLeft = 70;
/* Add data */
chart.data = [{
  "category": "White (4)",
  "value": 95,
  // "target": 80
}, {
  "category": "African American (5)",
  "value": 60,
  // "target": 75
}, {
  "category": "Latino and Hispanic (15)",
  "value": 82,
  // "target": 96
}, {
  "category": "Asian (4)",
  "value": 95,
  // "target": 96
}, {
  "category": "Native American (3)",
  "value": 74,
  // "target": 96
}, {
  "category": "Male (15)",
  "value": 81,
  // "target": 96
}, {
  "category": "Female (10)",
  "value": 90,
  // "target": 96
}, {
  "category": "Non-Binary (6)",
  "value": 74,
  // "target": 96
}];

/* Create axes */
let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
// categoryAxis.renderer.minGridDistance = 10;
// categoryAxis.renderer.grid.template.disabled = true;

let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
// valueAxis.renderer.minGridDistance = 30;
// valueAxis.renderer.grid.template.disabled = true;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.renderer.labels.template.adapter.add("text", function(text) {
  return text + "%";
});

/* Create ranges */
// function createRange(axis, from, to, color) {
//   var range = axis.axisRanges.create();
//   range.value = from;
//   range.endValue = to;
//   range.axisFill.fill = color;
//   range.axisFill.fillOpacity = 0.8;
//   range.label.disabled = true;
// }

// createRange(valueAxis, 0, 20, am4core.color("#19d228"));
// createRange(valueAxis, 20, 40, am4core.color("#b4dd1e"));
// createRange(valueAxis, 40, 60, am4core.color("#f4fb16"));
// createRange(valueAxis, 60, 80, am4core.color("#f6d32b"));
// createRange(valueAxis, 80, 100, am4core.color("#fb7116"));

/* Create series */
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueX = "value";
series.dataFields.categoryY = "category";
series.tooltipText = "{valueX.value}";
chart.cursor = new am4charts.XYCursor()
// series.columns.template.fill = am4core.color("#0095b6	");
// series.columns.template.stroke = am4core.color("#0095b6	");
series.columns.template.strokeWidth = 1;
series.columns.template.strokeOpacity = 0.5;
series.columns.template.height = am4core.percent(25);

// let series2 = chart.series.push(new am4charts.StepLineSeries());
// series2.dataFields.valueX = "target";
// series2.dataFields.categoryY = "category";
// series2.strokeWidth = 3;
// series2.noRisers = true;
// series2.startLocation = 0.15;
// series2.endLocation = 0.85;
// series2.tooltipText = "{valueX}"
// series2.stroke = am4core.color("#000");








// chart.cursor = new am4charts.XYCursor()
// chart.cursor.lineX.disabled = false;
// chart.cursor.lineY.disabled = true;

// valueAxis.cursorTooltipEnabled = true;

  }



  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
    <Container>
      <Row>
      <Row>
                        <Col md= "6">
                            <div style={{width: '100%', height: 200, backgroundColor: 'red'}} />
                        </Col>
                    </Row>
      <Col md= "4">
        
          <div id="heading1" style={{padddingLeft:"50%", }}>
        <h2 style= {{ marginLeft: '5rem' }}>  Histogram Breakdown by Gender and Race
      </h2>
        </div>
        <div id="question1" style={{padddingLeft:"50%", }}>
        <h4 style= {{ marginLeft: '5rem' }}> Coherence Q1: Today we used the Driving Question Board (DQB) to remind ourselves of what questions we had that we’ve answered in previous classes.
      </h4>
        </div>
       
        {/* <div id="chartdiv" style={{height:"10", width:"100%"}} > */}
        <div id="chartdiv" style={{width: '100%', height: 200, backgroundColor: 'red'}} />
       
        
        </Col>
        </Row>

      </Container>
    );


  }
}

export default App;
