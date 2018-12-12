import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //async function
  onDeleteClick = async (id, dispatch) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        // do the dispatch after API reponse
        dispatch({ type: "DELETE_CONTACT", payload: id });
      } catch {
        dispatch({ type: "DELETE_CONTACT", payload: id });
      }
    }
  };

  // onDeleteClick = (id, dispatch) => {
  //   if (window.confirm("Are you sure you want to delete this item?")) {
  //     axios
  //       .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then(response => dispatch({ type: "DELETE_CONTACT", payload: id }));
  //   }
  // };

  render() {
    const { id, name, username, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Username: {username}</li>
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone Number: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;