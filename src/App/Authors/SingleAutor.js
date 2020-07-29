import React from 'react'
import Name from '../AboutAuthor/Name'
import Address from '../AboutAuthor/Addres'
import Company from '../AboutAuthor/Company.js'
import Loader from '../../Entities/Loader/Loader.js'
import Header from '../../Entities/Header/Header.js'
import { Link } from 'react-router-dom'
import { fetchSingleAuthor } from '../../fetch'
import './SingleAuthor.scss'
import FooterEl from '../../Entities/Footer/FooterEl'


class AuthorItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleAuthor: null
        }
    }

    componentDidMount() {
        fetchSingleAuthor(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(data => {
                this.setState({ singleAuthor: data })
                
            })
    }



    renderAuthor = () => (
        <div>
            <Name
                name={this.state.singleAuthor.name}
                email={this.state.singleAuthor.email}
                phone={this.state.singleAuthor.phone}
                username={this.state.singleAuthor.username} />
            <Address
                street={this.state.singleAuthor.address.street}
                city={this.state.singleAuthor.address.city}
                zipcode={this.state.singleAuthor.address.zipcode}
                lat={this.state.singleAuthor.address.geo.lat}
                lng={this.state.singleAuthor.address.geo.lng} />
            <Company
                nameCompany={this.state.singleAuthor.company.name}
                slogan={this.state.singleAuthor.company.catchPhrase} />
        </div>
    )
    render() {
        if (this.state.singleAuthor) {
            return (
                <div>
                    <Header />

                    <div className="SingleAuthor">
                        <Link to='/authors'><span className='SingleAuthor__allAuthors'>All Authors</span>
                        </Link><h4 className='SingleAuthor__title'>Single Author</h4>
                        {this.state.singleAuthor && this.renderAuthor()}
                    </div>
                    <FooterEl />
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <Loader />
                </div>
            )
        }

    }
}
export default AuthorItem