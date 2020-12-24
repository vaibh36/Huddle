import React from 'react';
import { withRouter, Link } from "react-router-dom";
import Search from '../Search/Search';

class Posts extends React.Component {

    state = {
        posts : [],
        error: ''
    }

    componentDidMount = async() => {
       try{ 
       const response = await fetch('https://jsonplaceholder.typicode.com/posts')
       const json = await response.json();
       this.setState({
           posts: json,
           error: ''
       })
       } catch(err){
        this.setState({
            posts: [],
        })
       }
    }

    render() {
        const {posts = []} = this.state;
        return(
            <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {
                    posts.map(({userId, title, id})=>{
                        return (
                            <div key={`${userId}`+ `${title}`} style= {{display: "flex"}}>
                                <Link to={`/user/${userId}`}><p style={{marginRight: '10px'}}>UserId: {userId}</p></Link>
                                <Link  to={`/posts/${id}/comments`}>
                                <p>Title: {title}</p>

                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        )
    }

}

export default withRouter(Posts);