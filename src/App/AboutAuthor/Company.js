import React from 'react'
import './Company.scss'

class Company extends React.Component {
    render() {
        return (
            <div className='Company'>
                <h5>Company</h5>
                <p><b>name:</b> {this.props.nameCompany}</p>
                <p><b>slogan:</b> {this.props.slogan}</p>
            </div>

        )
    }
}

export default Company