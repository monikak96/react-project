import { Component } from "react";
import UserClass from "./UserClass";

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userInfo:{
            "name" : "Default",
            "location" : "Anywhere"
        }
    }
  }

  async componentDidMount(){
    const userData = await fetch("https://api.github.com/users/monikak96");
    const user = await userData.json()
    this.setState({userInfo:user})
  }

  render() {
    return (
      <div className="contact">
        <h1> Contact</h1>
        <h2>Hello In case of Any queries contact us at test@test.com</h2>
        <h2 className="contact-card">Our Team</h2>
        <UserClass name={this.state.userInfo.login} location={this.state.userInfo.location} />
      </div>
    );
  }
}

export default Contact;
