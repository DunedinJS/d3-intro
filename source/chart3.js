import * as d3 from 'd3';

const dataPointCount = 20; // the number of data points
const max = 10000;
const height = 100; // the pixel height to render the chart and tallest peak in the line
const width = 300; // the pixel width to render the chart

const dateInterval = 24 * 60 * 60 * 1000; // number of milliseconds in a day

export default function chart3(id) {
  // generate an array of twenty dated objects with random values between 0 and the max value
  const data = Array(dataPointCount).fill(null).map((value, index) => ({
    value: Math.floor(Math.random() * max),
    date: new Date(index * dateInterval),
  }));

  // find the maximum value
  const maxValue = d3.max(data, d => d.value);

  // create a linear scale for values
  const scaleValue = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, height]);

  // find the minimum and maximium dates
  const dateExtent = d3.extent(data, d => +d.date );

  // create a time scale for dates
  const scaleDate = d3.scaleTime()
    .domain(dateExtent)
    .range([0, width]);

  // create a line generating function
  const line = d3.line()
    // specify how x and y values will be accessed from data
    .x(d => scaleDate(d.date))
    .y(d => height - scaleValue(d.value))
    // set the curve/intepolation function to use
    .curve(d3.curveLinear);

  // Try changing the curve fuction to
  // d3.curveBasis
  // d3.curveCardinal
  // d3.curveStepAfter

  d3.select(id)
    // append the SVG element with correct attributes
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    // append a path element
    .append('path')
    // set the path's d attribute from data
    .attr('d', line(data))
}
