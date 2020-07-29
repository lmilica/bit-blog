import React from 'react'
import './AuthorList.scss'

class AuthorsList extends React.Component {

    render() {
        return (
            <div className="AuthorList">
                <h3 className="AuthorList__name">{this.props.name}</h3>
            </div>
        )
    }
}
export default AuthorsList