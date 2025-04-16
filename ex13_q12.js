import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class UserGreeting extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h1>Hello, {firstName} {lastName}!</h1>;
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserGreeting firstName={"Pragya"} lastName={"Sekar"} />);


