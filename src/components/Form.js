import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const { value } = event.target;

    this.setState(() => {
      return {
        value
      };
    });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        ></input>
        <div>typed: {this.state.value}</div>
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
