import React, { Component } from "react";
import { connect } from "react-redux";
import {setcategory } from "../redux/actions/foodCategoriesActions";
import { v4 as uuid } from "uuid";
import CategoriePage from "../pages/CategoriePage";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    this.props.setcategory();
  }
 

  render() {
    return (
      <div className="Info">
        <div className="CategoriePage">
           {
           this.props.cat!==null?
           this.props.cat.categories.map((data) => (
            <CategoriePage key={uuid()} name={data.categories.name} />
        ))
        :
        <h1>Loading</h1>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    logdetails: storeState.loginState.user,
    logstatus: storeState.loginState.status,
    prod: storeState.registerState.items,
    cat:storeState.categoriesState.categories
  };
};

export default connect(mapStateToProps,{setcategory})(Categories);
