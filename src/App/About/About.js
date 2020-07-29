import React from 'react'
import Header from '../../Entities/Header/Header'
import './About.scss'
import FooterEl from '../../Entities/Footer/FooterEl'

class About extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="About">
                    <div className='aboutInfo'>
                        <h2>ABOUT</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed explicabo voluptatem. Iusto nobis nesciunt atque tempora aliquam consectetur quos sunt, officia recusandae cum provident minus fuga quas eveniet, labore aut eum! Iste ad odit, provident, placeat minus voluptatum consectetur, sint aliquam animi perferendis assumenda eum iusto dolores exercitationem odio?</p>
                    </div>

                    <div className='ourStory'>
                        <h2>OUR STORY</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed explicabo voluptatem. Iusto nobis nesciunt atque tempora aliquam consectetur quos sunt, officia recusandae cum provident minus fuga quas eveniet, labore aut eum! Iste ad odit, provident, placeat minus voluptatum consectetur.</p>
                    </div>
                </div>
                <FooterEl />
            </div>
        )
    }
}
export default About