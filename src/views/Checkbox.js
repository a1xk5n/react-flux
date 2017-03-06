import React, { Component } from 'react';
import Immutable from 'immutable';

var Checkbox = React.createClass({

  toggleCheckboxChange: function() {
    const { handleCheckboxChange, id } = this.props;

    handleCheckboxChange(id);
  },

  render: function() {
    const { label, abc } = this.props;
    return (
      <div className="checkbox">
        <label>
          <input
                            type="checkbox"
                            value={label}
                            checked={this.props.isChecked}
                            onChange={this.toggleCheckboxChange}
                        />

          {label}
        </label>
      </div>
    );
  }
});

Checkbox.propTypes = {
    label: React.PropTypes.string,
    handleCheckboxChange: React.PropTypes.func,
    key: React.PropTypes.string,
    id: React.PropTypes.string,
    isChecked: React.PropTypes.bool,
}



export default Checkbox;