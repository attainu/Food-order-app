import React, { Component } from 'react'
import food from "../Images/Img6.jpg";
import { connect } from "react-redux";
import { fetchRestaurant } from '../redux/actions/restaurantDetailsAction';

class RestuarantDetail extends Component {

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.resid)
    }
    render() {
        return (
            <div>
                {this.props.rest !== null ? <><div style={{ color: "white" }}>
                    {this.props.rest.featured_image !== "" ? (
                        <img
                            src={this.props.rest.featured_image}
                            alt="no pic"
                            width="500px"
                            height="500px"
                        />
                    ) : (
                            <img src={food} alt="no pic" width="250px" height="250px" />
                        )}
                    <h1>{this.props.rest.name}</h1>
                </div></> : <h1>Loading</h1>}
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        logdetails: storeState.loginState.user,
        logstatus: storeState.loginState.status,
        prod: storeState.registerState.items,
        city: storeState.restuarantState.place,
        hotel: storeState.restuarantState.hotel,
        rest: storeState.restuarantDetailState.hotelDetails
    };
};

export default connect(mapStateToProps, { fetchRestaurant })(RestuarantDetail)
