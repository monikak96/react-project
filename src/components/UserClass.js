import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <img src="https://avatars.githubusercontent.com/u/29377730?v=4"></img>
        <h2>Name : {name}</h2>
        <h2>
          Count : {count}{" "}
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increment count
          </button>
          <button
            onClick={() => {
              this.setState({
                count: 0,
              });
            }}
          >
            reset
          </button>
        </h2>
        <h2>Location : {location}</h2>
        <h2>Email : bunpi@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
