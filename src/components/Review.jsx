import React, { Component } from "react";
import "../styles/RestaurantDetails.css";
class Review extends Component {
  render() {
    return (
      <div className="review">
        <p>
          <img
            src={`${this.props.rev.review.user.profile_image}`}
            alt="nopic"
          />
        </p>
        <p>
          Name:<span>{this.props.rev.review.user.name}</span>
        </p>
        <p>
          Rating:<span>{this.props.rev.review.rating}</span>
        </p>
        <p>
          Review:<span>{this.props.rev.review.review_text}</span>
        </p>
        <p>
          Short Review:<span>{this.props.rev.review.rating_text}</span>
        </p>
        <p>
          Time:<span>{this.props.rev.review.review_time_friendly}</span>
        </p>
        <hr />
      </div>
    );
  }
}

export default Review;
