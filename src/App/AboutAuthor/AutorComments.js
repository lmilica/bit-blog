import React from 'react'
import './AutorComments.scss'

class AutorComments extends React.Component {
  
    render() {
        return (
            <div className="AutorComments">
                <h6 className="AutorComments__title"><b>Title:</b> {this.props.title}</h6>
                <p className="AutorComments__body">{this.props.body}</p>
            </div>

        )
    }

}

export default AutorComments