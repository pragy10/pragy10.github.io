import React, { useState } from 'react';

const NovellLoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    cityOfEmployment: '',
    webServer: '',
    role: '',
    services: {
      mail: false,
      payroll: false,
      selfService: false
    }
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        services: {
          ...prevState.services,
          [name]: checked
        }
      }));
    } else if (type === 'radio') {
      setFormData(prevState => ({
        ...prevState,
        role: value
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      cityOfEmployment: '',
      webServer: '',
      role: '',
      services: {
        mail: false,
        payroll: false,
        selfService: false
      }
    });
  };

  return (
    <div>
      <h2>Novell Services Login</h2>
      <form onSubmit={handleSubmit}>
      <table>
        <tr>
            <td><label>Username:</label></td>
            <td><input type="text" name="username" value={formData.username} onChange={handleChange}/></td>
        </tr>
        <tr>
            <td><label>Password:</label></td>
            <td><input type="password" name="password" value={formData.password} onChange={handleChange}
          /></td>
        </tr>
        <tr>
            <td><label>City of Employment:</label></td>
            <td><input type="text" name="cityOfEmployment" value={formData.cityOfEmployment} onChange={handleChange}/></td>
        </tr>
        <tr>
            <td><label>Web server:</label></td>
            <td>
            <select name="webServer" value={formData.webServer} onChange={handleChange} >
            <option value="">-- Choose a server --</option>
            <option value="server1">Server 1</option>
            <option value="server2">Server 2</option>
            <option value="server3">Server 3</option>
          </select>
            </td>
        </tr>
        <tr>
            <td><p>Please specify your role:</p></td>
            <td>
                <input type="radio" id="admin"  name="role" value="admin" checked={formData.role === 'admin'} onChange={handleChange}/><label htmlFor="admin">Admin</label>
                <br></br><input type="radio" id="engineer" name="role" value="engineer" checked={formData.role === 'engineer'} onChange={handleChange}/><label htmlFor="engineer">Engineer</label>
                <br></br><input type="radio" id="manager" name="role" value="manager" checked={formData.role === 'manager'} onChange={handleChange}/><label htmlFor="manager">Manager</label>
                <br></br><input type="radio" id="guest" name="role" value="guest" checked={formData.role === 'guest'} onChange={handleChange}/> <label htmlFor="guest">Guest</label>
            </td>
        </tr>
        <tr>
            <td><p>Single Sign-on to the following:</p></td>
            <td>
                <input type="checkbox"  id="mail" name="mail" checked={formData.services.mail} onChange={handleChange}/><label htmlFor="mail">Mail</label>
                <br></br><input type="checkbox" id="payroll" name="payroll" checked={formData.services.payroll} onChange={handleChange} /><label htmlFor="payroll">Payroll</label>
                <br></br><input type="checkbox" id="selfService" name="selfService" checked={formData.services.selfService} onChange={handleChange}/><label htmlFor="selfService">Self-service</label>
            </td>
        </tr>
      </table>
      <button type="submit">Login</button>
      <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default NovellLoginForm;