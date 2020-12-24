import React from 'react';

class Comments extends React.Component {

    state = {
        comments: [],
        error: ''
    }

    componentDidMount = async() => {
        const {match = {}} = this.props;
        const {params = {}} = match;
        const {id = ''} = params;
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const json = await response.json();
            this.setState({
                comments: json,
                error: ''
            })
            }catch(err){
               this.setState({
                   comments: [],
                   error: 'No comments found'
               })
            }
    }

    render() {
        const {comments = []} = this.state;
        return (
            <div>
            
            {
                comments.map(({name, email, body})=>{
                    return(
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{body}</p>
                        </div>
                    )
                })
            }
            
            
            
            </div>
            
        )
    }

}

export default Comments;