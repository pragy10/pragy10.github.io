import React from 'react';
import ReactDOM from 'react-dom/client';


class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is being created');
  }


  componentDidMount() {
    console.log('componentDidMount: Component mounted');
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('componentDidUpdate: Component updated');
    }
  }


  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being removed');
  }


  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }


  render() {
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}


class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true
    };
  }


  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent
    }));
  }


  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>
          {this.state.showComponent ? 'Unmount Component' : 'Mount Component'}
        </button>
        <hr />
        {this.state.showComponent && <LifecycleDemo />}
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);