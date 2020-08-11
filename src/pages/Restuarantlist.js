import React, { Component } from 'react'
import food from "../Images/Img6.jpg"
import "../styles/rest.css"

    class Restuarantlist extends Component {

        render() {
            console.log(this.props.restuarant)
            return (
                <div className="resl">
                    <div className="res"><div>{
                        this.props.restuarant.restaurant.featured_image !== "" ?
                            <img src={this.props.restuarant.restaurant.featured_image} alt="no pic" width="250px" height="250px" /> : <img src={food} alt="no pic" width="250px" height="250px" />}</div>
                        <h2>Name:{this.props.restuarant.restaurant.name}</h2>
                        <h2>Average Cost:{this.props.restuarant.restaurant.currency + this.props.restuarant.restaurant.average_cost_for_two}</h2>
                    </div>
                </div>
            )
        }
    }

export default Restuarantlist