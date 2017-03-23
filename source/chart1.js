import * as d3 from 'd3';

const max = 100;

export default function chart1(id) {
  // generate an array of eight random numbers between 0 and the max value
  const data = Array(8).fill(null).map(() => Math.floor(Math.random() * max));

  // select the DOM element which D3 will render into
  d3.select(id)
    // select all child divs -- but there are none so an empty selection is made
    .selectAll('div')
    // bind the data array to the selection
    .data(data)
    // 'enter' the selection
    // this returns placeholder nodes for each datum (item in the data array) which does not have a corresponding DOM element
    // because the selection is empty it gives placeholders for all eight items
    .enter()
    // now we perform DOM manipulations based on each datum
    // create the bar element for each datum
    .append('div')
    .attr('class', 'bar')
    // set inline style height for each bar element based on the corresponding datum
    .style('height', d => `${d}px`)
    // append the label element to each bar
    .append('div')
    .attr('class', 'label')
    .text(d => d);
}
