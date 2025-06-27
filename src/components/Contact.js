import { Component } from "react";
import UserClass from "./UserClass";

class Contact extends Component {

  constructor(props) {
    super(props);
    console.log("parent Constructor");
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
    console.log(user)
    this.setState({userInfo:user})
    console.log(this.state.userInfo)
  }

  componentDidUpdate(){
    console.log("after the did mount render");

  }

  componentWillUnmount(){
    console.log("will get printed once you go to another page")
  }
  render() {
    console.log("Parent rendered")
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
