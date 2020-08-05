import React, { Component } from 'react'
import "../styles/flip.css"

class Flip extends Component {
    render() {
        return (
            <div>
                <div className="maincontainer">
                    <div class="thecard">
                        <div class="thefront">
                            front of the card
                        </div>
                        <div class="theback">
                            back of the card
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flip
