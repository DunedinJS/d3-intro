import * as d3 from 'd3';
import chart1 from './chart1';
import chart2 from './chart2';
import chart3 from './chart3';
import chart4 from './chart4';
import 'normalize.css';
import './styles.styl';

console.log(`D3 ${d3.version}`);

chart1('#chart1');
chart2('#chart2');
chart3('#chart3');
chart4('#chart4');
