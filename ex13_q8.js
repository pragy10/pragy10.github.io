import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: '',
    };
  }


  handleCelsiusChange = (event) => {
    const celsius = event.target.value;
    const fahrenheit = celsius ? (celsius * 9) / 5 + 32 : '';
    this.setState({ celsius, fahrenheit });
  };


  handleFahrenheitChange = (event) => {
    const fahrenheit = event.target.value;
    const celsius = fahrenheit ? ((fahrenheit - 32) * 5) / 9 : '';
    this.setState({ fahrenheit, celsius });
  };


  render() {
    const { celsius, fahrenheit } = this.state;


    return (
      <div>
        <h2>Temperature Converter</h2>
        <div>
          <label>
            Celsius:  <input type="number" value={celsius} onChange={this.handleCelsiusChange}  placeholder="Enter Celsius"/>
          </label>
          <p>{celsius && `Fahrenheit: ${fahrenheit} °F`}</p>
        </div>


        <div>
          <label>
            Fahrenheit: <input type="number"  value={fahrenheit} onChange={this.handleFahrenheitChange} placeholder="Enter Fahrenheit" />
          </label>
          <p>{fahrenheit && `Celsius: ${celsius} °C`}</p>
        </div>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TemperatureConverter/>);


