import * as d3 from 'd3';

const max = 10000;
const height = 100; // the pixel height to render the tallest bar

export default function chart2(id) {
  // generate an array of eight random numbers between 0 and the max value
  const data = Array(8).fill(null).map(() => Math.floor(Math.random() * max));

  // find the maximum value
  const maxValue = d3.max(data, d => d);

  // create a linear scale
  const scaleHeight = d3.scaleLinear()
    .domain([0, maxValue]) // the expected data values range between 0 and the maximum value
    .range([0, height]); // the output range (pixel height values)

  // calling scaleHeight(0) would return 0
  // calling scaleHeight(maxValue) would return the value of the height constant
  // calling scaleHeight with any number between would return a number scaled to the range in a linear manner

  d3.select(id)
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'bar')
    // identical to chart 1 except the scale is applied to the datum
    .style('height', d => `${scaleHeight(d)}px`)
    .append('div')
    .attr('class', 'label')
    .text(d => d);
}
