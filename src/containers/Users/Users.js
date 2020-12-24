import React from 'react';

class Users extends React.Component {

    state = {
        info: {},
        error: ''
    }

    componentDidMount = async() =>{
        const {match = {}} = this.props;
        const {params = {}} = match;
        const {id = ''} = params;
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
        const json = await response.json();
        this.setState({
            info: json,
            error: ''
        })
        }catch(err){
            this.setState({
                info: {},
                error: 'User not found'
            })
        }
    }

    render() {
        const {info= {}} = this.state;

        return (
            <div style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px'}}>
                <p>{info.name}</p>
                <p>{info.email}</p>
                <p>{info.phone}</p>
                <p>{info.website}</p>
                <p>{info.username}</p>
            </div>
        )
    }

}

export default Users;