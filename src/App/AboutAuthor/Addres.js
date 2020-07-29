import React from 'react'
import './Address.scss'

class Address extends React.Component {


    render() {
        return (
            <div className='Address'>

                <div className='Address__info'>
                    <h5>Address</h5>
                    <p><b>street:</b> {this.props.street}</p>
                    <p><b>city:</b> {this.props.city}</p>
                    <p><b>zipcode:</b> {this.props.zipcode}</p>
                </div>
                <div className='Address__map'>
                    <iframe
                        width="100%"
                        height="100%"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        title={this.props.street}
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://maps.google.com/maps?q=${this.props.lat},${this.props.lng}&z=4&output=embed`}
                    />

                </div>
            </div>

        )
    }
}

export default Address