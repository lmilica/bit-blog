import React from 'react'
import Header from '../../Entities/Header/Header'
import AuthorsList from './AuthorsList.js'
import { Link } from 'react-router-dom'
import { fetchAuthors } from '../../fetch.js'
import './Authors.scss'
import FooterEl from '../../Entities/Footer/FooterEl'

class Authors extends React.Component {
    constructor() {
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetchAuthors('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                this.setState({ users: data })
            })
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <h1 className="Authors__title">Authors ({this.state.users.length})</h1>
                    {this.state.users.map((user, i) =>
                        <Link to={`/authors/${user.id}`}  key={user.id}>
                            <AuthorsList name={user.name} />
                        </Link>
                    )}
                </div>
                <FooterEl />
            </div>
        )
    }
}
export default Authors