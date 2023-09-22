import React, { Component } from 'react';
// import './captcha.css';
// import './stock.css';
// import swal from 'sweetalert';
import './Style.css';

class StockEntryForm extends Component {
  constructor() {
    super();
    this.state = {
      captcha: '',
      userInput: '',
      alertVisible: false,
      alertSuccess: false,
      tableData: [
        { id: 1, name: 'SUGAR', quantity: 0, price: 0 },
        { id: 2, name: 'APPLE', quantity: 0, price: 0 },
        { id: 3, name: 'SALT', quantity: 0, price: 0 },
        { id: 4, name: 'WHEAT', quantity: 0, price: 0 },
        { id: 5, name: 'RAGI', quantity: 0, price: 0 },
        { id: 6, name: 'RICE', quantity: 0, price: 0 },
        { id: 7, name: 'PASTA', quantity: 0, price: 0 },
        { id: 8, name: 'GRAPES', quantity: 0, price: 0 },
        { id: 9, name: 'PERFUMES', quantity: 0, price: 0 },
        { id: 10, name: 'DAIRYMILK', quantity: 0, price: 0 },
        { id: 11, name: 'HONEY', quantity: 0, price: 0 },
        { id: 12, name: 'MANGO', quantity: 0, price: 0 },
        { id: 13, name: 'ORANGE', quantity: 0, price: 0 },
        { id: 14, name: 'ALMONDS', quantity: 0, price: 0 },
        { id: 15, name: 'KIVI', quantity: 0, price: 0 },
      ],
    };
  }

  componentDidMount() {
    this.generateCaptcha();
    this.setMaxDate();
  }

  generateCaptcha = () => {
    const randomChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueChar = '';

    for (let i = 0; i < 5; i++) {
      uniqueChar += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
    }

    this.setState({ captcha: uniqueChar });
  }

  setMaxDate = () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('datefield').setAttribute('max', today);
  }

  handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  }

  handleQuantityChange = (event, id) => {
    const updatedTableData = this.state.tableData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: event.target.value };
      }
      return item;
    });

    this.setState({ tableData: updatedTableData });
  }

  handlePriceChange = (event, id) => {
    const updatedTableData = this.state.tableData.map((item) => {
      if (item.id === id) {
        return { ...item, price: event.target.value };
      }
      return item;
    });

    this.setState({ tableData: updatedTableData });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.userInput === this.state.captcha) {
      this.setState({
        alertVisible: true,
        alertSuccess: true,
      });
      this.generateCaptcha();
      // Handle form submission here
    } else {
      this.setState({ alertVisible: true, alertSuccess: false });
      // Handle invalid captcha input here
    }
  }

  render() {
    return (
      <div>
        {this.props.loggedIn && (  
        <form onSubmit={this.handleSubmit}>
        
          <nav className="navbar navbar-expand-lg text-dark bg-dark" style={{ height: '65px' }}>
          
          </nav>
          <label htmlFor="date" style={{ marginLeft: '40%', fontSize: 'medium' }}>Date :</label>
          <input type="date" id="datefield" name="date" required />

          <center>
            <table style={{ width: '70%' }} cellPadding="10" className="table table-bordered">
              <thead>
                <tr className="bg-secondary text-white">
                  <th>Product ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <input
                        type="text"
                        name={`Q${item.id}`}
                        value={item.quantity}
                        onChange={(e) => this.handleQuantityChange(e, item.id)}
                      />
                    </td>
                    <td>
                      &#8377;<input
                        type="number"
                        name={`P${item.id}`}
                        value={item.price}
                        onChange={(e) => this.handlePriceChange(e, item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div id="user-input" className="inline mt-5">
              <input
                type="text"
                id="submit"
                placeholder="Captcha code"
                onChange={this.handleInputChange}
                value={this.state.userInput}
              />
            </div>
            <input type="submit" id="btn" required />
            <span><button id="btn" type="reset" style={{ border: 'none' }}>Reset</button></span>
            <p id="key"></p>
            {this.state.alertVisible && (
              <div className={`alert ${this.state.alertSuccess ? 'success' : ''}`}>
                {this.state.alertSuccess ? 'Form submitted successfully!' : 'Invalid Captcha! Please try again.'}
              </div>
            )}
          </center>
        </form>
        )}
      </div>
    );
  }
}

export default StockEntryForm;