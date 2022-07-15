import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom';

class RecordsList extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }
    
    delete(){
        axios.get('http://localhost/ReactPHPCRUD/delete.php?id='+this.props.obj.sId)
        .then(
            this.setState({ redirect: true })
        )
        .catch(err => console.log(err))
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/view' />;
        }
        return (
            <tr>
                <td>
                    {this.props.obj.fName}
                </td>
                <td>
                    {this.props.obj.lName}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.sId} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
    
}

export default RecordsList;