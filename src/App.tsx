import * as React from 'react';
import './App.css';
import * as Highcharts from 'highcharts';
import { withHighcharts }from 'react-jsx-highcharts';
import logo from './logo.svg';
import MyChart from './components/chart/Chart.component';
import HighChartComponent from './components/high-chart/HighChart.component';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyChart />
        <HighChartComponent/>
      </div>
    );
  }
}

export default withHighcharts(App, Highcharts);;
