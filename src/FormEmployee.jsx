import React, { Component } from 'react';

class FormEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastname: '',
            firstname: '',
            email: '',
        }
    }

    fetchData() {
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(this.state)
        };
        const url = "http://campus-bordeaux.ovh:3001/api/quests/employees/";
    
        fetch(url, config)
        .then(res => res.json())
          .then(res => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`Added employee with the ID ${res}!`);
            }
          }).catch(e => {
            console.error(e);
            alert('Error during l\'an employee addition');
          });
      }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm = e => {
        e.preventDefault();
        this.fetchData();
    }


    render() {
        return (
        <div className="FormEmployee">
            <h2>employee's entry</h2>

            <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Information</legend>
                    <div className="form-data">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            onChange={this.onChange}
                            value={this.state.lastname}
                        />
                    </div>
                    <div className="form-data">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            onChange={this.onChange}
                            value={this.state.firstname}
                        />
                    </div>
                    <div className="form-data">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Send" />
                    </div>
                </fieldset>
            </form>

        </div>
        );
    }
}

export default FormEmployee;