import * as d3 from 'd3';

const max = 10000;
const rowCount = 7;
const tileSize = 15;
const dataPointCount = rowCount * 30; // the number of data points
const height = tileSize * rowCount; // the pixel height to render the chart and tallest peak in the line

const dateInterval = 24 * 60 * 60 * 1000; // number of milliseconds in a day

export default function chart4(id) {
  // generate an array of dated objects with random values between 0 and the max value
  const data = Array(dataPointCount).fill(null).map((value, index) => ({
    value: Math.floor(Math.random() * max),
    date: new Date(index * dateInterval),
  }));

  // find the maximum value
  const maxValue = d3.max(data, d => d.value);

  // create a linear scale for values
  const scaleValue = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, 1]);

  // create a colour interpolator
  const colorInterpolator = d3.interpolateRgb(
    d3.rgb('#ffffff'),
    d3.rgb('#ff0000'),
  );

  // calling colorInterpolator(0) would return #ffffff
  // calling colorInterpolator(maxValue) would return #ff0000
  // calling colorInterpolator with any number between would return colour between

  // returns the position for each tile
  function position(d, index) {
    const column = Math.floor(index / rowCount);
    const row = index % rowCount;
    return `translate(${column * tileSize}, ${row * tileSize})`;
  }

  // set width to match number of columns
  const width = tileSize * Math.ceil(data.length / rowCount);

  d3.select(id)
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .selectAll('rect')
    .data(data)
    .enter()
    // append each tile
    .append('rect')
    .attr('width', tileSize)
    .attr('height', tileSize)
    .attr('fill', d => colorInterpolator(scaleValue(d.value)))
    .attr('transform', position);
}
