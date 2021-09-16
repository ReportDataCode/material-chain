import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    }
}

export default User;