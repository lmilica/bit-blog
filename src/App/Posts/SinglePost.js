import React from 'react';
import { Link } from 'react-router-dom'
import { fetchSinglePost, fetchSingleAuthor, fetchAuthorComments } from '../../fetch.js'
import Header from '../../Entities/Header/Header.js';
import AutorComments from '../AboutAuthor/AutorComments.js'
import "./SinglePost.scss"
import FooterEl from '../../Entities/Footer/FooterEl.js';

class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            singlePost: {},
            author: [],
            comments: []

        }
    }


    componentDidMount() {
        fetchSinglePost(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(data => {
                console.log(data);
                this.setState({ singlePost: data })

                fetchSingleAuthor(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
                    .then(data => {
                        this.setState({ author: data })
                    })

                fetchAuthorComments(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
                    .then(data => {
                        this.setState({ comments: data })
                    })
            })


    }

    render() {
        return (
            <div className="SinglePost">
                <Header />
                <h2 className="SinglePost__title">SINGLE POST</h2>
                <div className="SinglePost__wrap">
                    <h4><b>Title:</b> {this.state.singlePost.title}</h4>
                    <Link to={`/authors/${this.state.singlePost.userId}`}>Author: {this.state.author.name}</Link>
                    <p>{this.state.singlePost.body}</p>
                </div>
                <h4 className='SinglePost__comments'>{this.state.comments.length} more posts from same author</h4>
                {this.state.comments.map((comment, i) =>
                    <AutorComments
                        title={comment.title}
                        body={comment.body}
                    />

                )}
                <FooterEl />
            </div>
        )
    }

}

export { SinglePost };