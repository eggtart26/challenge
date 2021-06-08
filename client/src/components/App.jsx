import React from "react";
import axios from "axios";
import UsersList from "./UsersList.jsx";
import AgesOfUsersList from "./AgesOfUsersList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      items: [],
      selectItem: "",
      itemAge: [],
      isLoading: true,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handelError(error) {
    console.log(error);
  }

  componentDidMount() {
    this.getUsers();
    this.getItems();
  }

  getUsers() {
    axios
      .get("/users")
      .then(({ data }) => {
        this.setState({
          data: data,
        });
      })
      .catch(this.handelError);
  }

  getItems() {
    axios
      .get("/items")
      .then(({ data }) => {
        this.setState({
          items: data,
        });
      })
      .catch(this.handelError);
  }

  getUsersAge(item) {
    axios
      .get("/users/" + item)
      .then(({ data }) => {
        this.setState({
          itemAge: data,
        });
      })
      .catch(this.handelError);
  }

  handleOnClick(e) {
    this.setState({
      selectItem: e.target.id,
      itemAge: this.getUsersAge(e.target.id),
    });
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="userContainer">
          <UsersList usersData={this.state.data} />
        </div>

        <hr />

        <div className="userListContainer">
          <AgesOfUsersList
            itemsData={this.state.items}
            handleOnClick={this.handleOnClick}
            itemAge={this.state.itemAge}
            isLoading={this.state.isLoading}
          />
        </div>
      </div>
    );
  }
}

export default App;
