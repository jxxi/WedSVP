import React from 'react';
import { Link } from 'react-router-dom';

var ModalButton = React.createClass({
  render: function() {
    var button;
    
    if(this.props.page !== "")
      button = <Link to={this.props.page} className="ModalButton" data-primary={this.props.primary}>{this.props.text}<i className="fa fa-fw fa-chevron-right"></i></Link>
    else
      button = <a href="#" className="ModalButton" data-primary={this.props.primary}>{this.props.text}<i className="fa fa-fw fa-chevron-right"></i></a>
        
    return (
      button
    );
  }
});

export default ModalButton;