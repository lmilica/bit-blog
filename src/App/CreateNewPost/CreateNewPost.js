import React from 'react'
import Header from '../../Entities/Header/Header'
import { Button } from 'react-materialize'
import './CreateNewPost.scss'
import { Link } from 'react-router-dom'
import FooterEl from '../../Entities/Footer/FooterEl.js'

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            titlePost: '',
            bodyOfPost: ''
        }
    }

    inputValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    createPost = (e) => {
       console.log(this.state);
       
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: this.state.titlePost,
              body: this.state.bodyOfPost
            
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json))
    }
  
    cancelBtn = () => {
        this.setState({
            titlePost: '',
            bodyOfPost: ''
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='Home'>
                    <h2 className='Home__title'>New Post</h2>
                    <label><h4>Title</h4></label>
                    <input 
                    type='text' 
                    value={this.state.titlePost}
                    name='titlePost' 
                    placeholder='PostTitle'
                    onChange={this.inputValue}></input>
                    <label><h4>Content</h4></label>
                    <textarea 
                    value={this.state.bodyOfPost}
                    name='bodyOfPost' 
                    placeholder='Content of post'
                    onChange={this.inputValue}></textarea>
                    <Button onClick={this.cancelBtn}>Cancel</Button> <Link to='/posts'><Button onClick={this.createPost}>Save</Button></Link>
                </div>
                <FooterEl />
            </div>
        )
    }
}
export default Home