import { Component } from "react";
import UserClass from "./UserClass";

class Contact extends Component {
    
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Did Mount")
  }

  render() {
    console.log("Parent rendered")
    return (
      <div className="contact">
        <h1> Contact</h1>
        <h2>Hello In case of Any queries contact us at test@test.com</h2>
        <h2 className="contact-card">Our Team</h2>
        <UserClass name={"Mounika"} location={"Hyderabad"} />
      </div>
    );
  }
}

export default Contact;
