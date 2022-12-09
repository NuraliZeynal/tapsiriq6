import { Component } from "react";

class App extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  changeHandler = (e) => {
    if (e.target.id === "name") {
      this.setState({
        name: /*document.querySelector("#name").value*/ e.target.value
      });
    }
    if (e.target.id === "email") {
      this.setState({
        email: /*document.querySelector("#email").value*/ e.target.value
      });
    }
    if (e.target.id === "password") {
      this.setState({
        password: /*document.querySelector("#password").value*/ e.target.value
      });
    }
  };

  clickHandler = (e) => {
    if (e.target.id === "ad") {
      this.setState({
        name: ""
      });
    }
    if (e.target.id === "mail") {
      this.setState({
        email: ""
      });
    }
    if (e.target.id === "parol") {
      this.setState({
        password: ""
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            onChange={this.changeHandler}
            value={this.state.name}
          />
        </label>
        <button id="ad" onClick={this.clickHandler}>
          x
        </button>
        <br />
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            onChange={this.changeHandler}
            value={this.state.email}
          />
        </label>
        <button id="mail" onClick={this.clickHandler}>
          x
        </button>
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            onChange={this.changeHandler}
            value={this.state.password}
          />
        </label>
        <button id="parol" onClick={this.clickHandler}>
          x
        </button>
      </div>
    );
  }
}
export default App;
