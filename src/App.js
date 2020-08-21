import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/contact-list")
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        this.setState({ contacts: data.contacts });
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>COMPANY NAME</th>
              <th>EMAIL</th>
              <th>WORK PHONE</th>
              <th>GST TREATMENT</th>
              <th>RECEIVABLES</th>
              <th>PAYABLES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact,index) => (
              <tr key={index}>
                <td>{contact.customer_name}</td>
                <td>{contact.company_name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.gst_treatment}</td>
                <td>{contact.outstanding_receivable_amount}</td>
                <td>{contact.outstanding_payable_amount}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    );
  }
}

export default App;
