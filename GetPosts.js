import React, { Component } from 'react';
import './GetPosts.css'

class GetPosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
       
        fetch("https://www.reddit.com/r/reactjs.json")
        .then( response => response.json())
        .then(
            
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },
 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="card">
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p className="title">{post.title}</p>
                                    <p className="sleftext">{post.selftext}</p>
                                    <p className="Url">{post.Url}</p>
                                    <p className="score">{post.score}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }
  
  export default GetPosts;