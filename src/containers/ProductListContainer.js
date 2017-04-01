import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ProductListContainer extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Prod List
      </div>
    );
  }
}

function mapStateToProps(){
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(ProductListContainer);
