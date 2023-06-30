import React from 'react';
import ReactApexChart from 'react-apexcharts';
import 'apexcharts/dist/apexcharts.css';
import './DonutChart.scss'


class DonutChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          series: [44, 55, 13, 33],
          chart: {
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  show: false,
                },
              },
            },
          ],
          legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
          },
        },
        series: [44, 55, 13, 33],
      };
    }
  
    appendData = () => {
      const arr = [...this.state.series];
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
      this.setState({ series: arr });
    };
  
    removeData = () => {
      const arr = [...this.state.series];
      arr.pop();
      this.setState({ series: arr });
    };
  
    randomize = () => {
      const randomSeries = this.state.series.map(() =>
        Math.floor(Math.random() * (100 - 1 + 1)) + 1
      );
      this.setState({ series: randomSeries });
    };
  
    reset = () => {
      this.setState({ series: [44, 55, 13, 33] });
    };
  
    render() {
      return (
        <div>
          <div id="chart" >
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={this.state.options.chart.width}
            />
          </div>
          <button id="randomize" onClick={this.randomize}>
            Randomize
          </button>
          <button id="add" onClick={this.appendData}>
            Add Data
          </button>
          <button id="remove" onClick={this.removeData}>
            Remove Data
          </button>
          <button id="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      );
    }
  }

  
  export default DonutChart;
