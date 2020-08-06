import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import Food from './Food'

class Home extends Component {
    render() {
        return  this.props.logdetails===null?<Redirect to="/"/>:(
            <div>
                <h1>Hi {this.props.logdetails.customer.name}</h1>
                <Food/>
            </div>
        )
    }
}


const mapStateToProps = storeState => {
    return {
        logdetails: storeState.loginState.user,
        logstatus: storeState.loginState.status,
        prod: storeState.registerState.items
    }
}

export default connect(mapStateToProps)(Home)
