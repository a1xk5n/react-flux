import React, { Component } from 'react';

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


export default Checkbox;