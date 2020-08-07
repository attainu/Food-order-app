import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../redux/actions/foodCategoriesActions";
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
    this.props.dispatch(fetchCategories());
    console.log(this.props.categories);
  }
  componentDidUpdate() {
    console.log(this.props.categories);
  }

  render() {
    return (
      <div className="Info">
        <div className="CategoriePage">
          {/*}  {this.props.categories.map((data) => (
            <CategoriePage key={uuid()} name={data.categories.name} />
        ))} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories, loading, error }) => ({
  categories: categories,
  loading: loading,
  error: error,
});

export default connect(mapStateToProps)(Categories);
