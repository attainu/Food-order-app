import React, { Component } from 'react'
import "../styles/RestaurantDetails.css"
 class Review extends Component {
    render() {
        return (
            <div className="review">
                 <p><img src={`${this.props.rev.review.user.profile_image}`} alt="nopic"/></p>
                 <p>Name:{this.props.rev.review.user.name}</p>
                <p>Rating:{this.props.rev.review.rating}</p>
                <p>Review:{this.props.rev.review.review_text}</p>
                <p>Short Review:{this.props.rev.review.rating_text}</p>
                <p>Time:{this.props.rev.review.review_time_friendly}</p>
            </div>
        )
    }
}

export default Review
