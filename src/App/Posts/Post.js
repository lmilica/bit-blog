import React from 'react'
import './SinglePost.scss'
import { Link } from 'react-router-dom'
import './Post.scss'



const Post = ({ posts }) => {
    return (
        posts.map((post, i) => <div key={i} className='Post'>
            <Link to={`/posts/${post.id}`}><h4>{post.title}</h4></Link>
            <p className='Post__body'>{post.body}</p>

        </div>)
    )
}
export default Post
