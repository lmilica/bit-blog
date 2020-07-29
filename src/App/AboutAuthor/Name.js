import React from 'react'
import avatar from '../../avatar.png'
import './Name.scss'

class Name extends React.Component {
 
    render() {
        return (
            <div className="Name row">
                <div className="Name__image col s12">
                    <img src={avatar} alt='avatar'></img>
                </div>
                <div className="Name__info col s12">
                    <h5>{this.props.name}</h5>
                    <p><b>username:</b> {this.props.username}</p>
                    <p><b>email:</b> {this.props.email}</p>
                    <p><b>phone:</b> {this.props.phone}</p>
                </div>
            </div>

        )
    }
}

export default Name