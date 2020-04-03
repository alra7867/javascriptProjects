import React, { Component } from 'react';
import logo from './logo.svg';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/animated";

import './App.css';
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

class App extends Component {


  componentDidMount() {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.maskBullets = false;
    
    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    
    xAxis.dataFields.category = "weekday";
    yAxis.dataFields.category = "hour";
    
    xAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.minGridDistance = 40;
    
    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.inversed = true;
    yAxis.renderer.minGridDistance = 30;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "weekday";
    series.dataFields.categoryY = "hour";
    series.dataFields.value = "value";
    series.sequencedInterpolation = true;
    series.defaultState.transitionDuration = 100;
    series.columns.template.width = am4core.percent(100);
    series.columns.template.height = am4core.percent(100);
    
    series.heatRules.push({target:series.columns.template, property:"fill", min:am4core.color("#ffffff"), max:am4core.color("#692155")});
    
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#ffffff");
    columnTemplate.tooltipText = "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";
    
    // heat legend
    var heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
    heatLegend.width = am4core.percent(100);
    heatLegend.series = series;
    heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
    heatLegend.valueAxis.renderer.minGridDistance = 30;
    
    // heat legend behavior
    series.columns.template.events.on("over", (event) => {
      handleHover(event.target);
    })
    
    series.columns.template.events.on("hit", (event) => {
      handleHover(event.target);
    })
    
    function handleHover(column) {
      if (!isNaN(column.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
      }
      else {
        heatLegend.valueAxis.hideTooltip();
      }
    }
    
    series.columns.template.events.on("out", (event) => {
      heatLegend.valueAxis.hideTooltip();
    })
    

chart.data = [
	{
		"hour": "White",
		"weekday": "Coherence 1",
		"value": 90
	},
	{
		"hour": "African American",
		"weekday": "Coherence 1",
		"value": 88
	},
	{
		"hour": "Hispanic",
		"weekday": "Coherence 1",
		"value": 44
	},
	{
		"hour": "Asian",
		"weekday": "Coherence 1",
		"value": 90
	},
	{
		"hour": "Native American",
		"weekday": "Coherence 1",
		"value": 78
	},
	{
		"hour": "Non Binary",
		"weekday": "Coherence 1",
		"value": 88
	},
	{
		"hour": "Male",
		"weekday": "Coherence 1",
		"value": 33
	},
	{
		"hour": "Female",
		"weekday": "Coherence 1",
		"value": 12
  },
  {
		"hour": "White",
		"weekday": "Coherence 2",
		"value": 33
	},
	{
		"hour": "African American",
		"weekday": "Coherence 2",
		"value": 55
	},
	{
		"hour": "Hispanic",
		"weekday": "Coherence 2",
		"value": 33
	},
	{
		"hour": "Asian",
		"weekday": "Coherence 2",
		"value": 55
	},
	{
		"hour": "Native American",
		"weekday": "Coherence 2",
		"value": 33
	},
	{
		"hour": "Non Binary",
		"weekday": "Coherence 2",
		"value": 11
	},
	{
		"hour": "Male",
		"weekday": "Coherence 2",
		"value": 33
	},
	{
		"hour": "Female",
		"weekday": "Coherence 2",
		"value": 23
	},
  {
		"hour": "White",
		"weekday": "Coherence 3",
		"value": 85
	},
	{
		"hour": "African American",
		"weekday": "Coherence 3",
		"value": 25
	},
	{
		"hour": "Hispanic",
		"weekday": "Coherence 3",
		"value": 40
	},
	{
		"hour": "Asian",
		"weekday": "Coherence 3",
		"value": 72
	},
	{
		"hour": "Native American",
		"weekday": "Coherence 3",
		"value": 56
	},
	{
		"hour": "Non Binary",
		"weekday": "Coherence 3",
		"value": 76
	},
	{
		"hour": "Male",
		"weekday": "Coherence 3",
		"value": 56
	},
	{
		"hour": "Female",
		"weekday": "Coherence 3",
		"value": 29
	},
  {
		"hour": "White",
		"weekday": "Coherence 4",
		"value": 85
	},
	{
		"hour": "African American",
		"weekday": "Coherence 4",
		"value": 79
	},
	{
		"hour": "Hispanic",
		"weekday": "Coherence 4",
		"value": 74
	},
	{
		"hour": "Asian",
		"weekday": "Coherence 4",
		"value": 85
	},
	{
		"hour": "Native American",
		"weekday": "Coherence 4",
		"value": 75
	},
	{
		"hour": "Non Binary",
		"weekday": "Coherence 4",
		"value": 100
	},
	{
		"hour": "Male",
		"weekday": "Coherence 4",
		"value": 83
	},
	{
		"hour": "Female",
		"weekday": "Coherence 4",
		"value": 67
	},
  {
		"hour": "White",
		"weekday": "Relevance Q1",
		"value": 83
	},
	{
		"hour": "African American",
		"weekday": "Relevance Q1",
		"value": 33
	},
	{
		"hour": "Hispanic",
		"weekday": "Relevance Q1",
		"value": 64
	},
	{
		"hour": "Asian",
		"weekday": "Relevance Q1",
		"value": 74
	},
	{
		"hour": "Native American",
		"weekday": "Relevance Q1",
		"value": 56
	},
	{
		"hour": "Non Binary",
		"weekday": "Relevance Q1",
		"value": 72
	},
	{
		"hour": "Male",
		"weekday": "Relevance Q1",
		"value": 65
	},
	{
		"hour": "Female",
		"weekday": "Relevance Q1",
		"value": 56
	}

];

  }


  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
    
      <div id ="mainDiv"  >
        <div id="question1" style={{padddingLeft:"50%", }}>
        <h2 style= {{ marginLeft: '5rem' }}> HeatMap
      </h2>
        </div>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}>

        </div>

        <div id="chartdiv2" style={{ width: "100%", height: "500px" }}>

        </div>
      </div>
    );


  }
}

export default App;
