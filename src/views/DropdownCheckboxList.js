import React, { Component } from 'react';
import Immutable from 'immutable';

import Checkbox from './Checkbox';
  
var DropdownCheckboxList = React.createClass({

  toggleCheckbox: function(id){
    this.props.toggleDropdownCheckbox(id);
  },
 
  createCheckbox: function(label) {
     return  <Checkbox
            label={label.name}
            handleCheckboxChange={this.toggleCheckbox}
            key={label.id}
            id={label.id}
            isChecked={this.props.selectedDropdownCheckboxes.has(label.id)}
        />
  },

  createCheckboxes: function() {
    return this.props.siteArr.map(this.createCheckbox)
  },

  render: function() {
    return (
      <div className="container">
            <form>
                { this.createCheckboxes()}
            </form>
      </div>
    );
  }
});

DropdownCheckboxList.propTypes = {
    siteArr: React.PropTypes.instanceOf(Immutable.List).isRequired,
    toggleDropdownCheckbox: React.PropTypes.func,
    selectedDropdownCheckboxes: React.PropTypes.object,
}

export default DropdownCheckboxList;
