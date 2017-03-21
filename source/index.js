import * as d3 from 'd3';
import chart1 from './chart1';
import chart2 from './chart2';
import chart3 from './chart3';
import 'normalize.css';
import './styles.css';

console.log(`D3 ${d3.version}`);

chart1('#chart1');
chart2('#chart2');
chart3('#chart3');
