import React, { Component } from 'react';

var FilterSearchInput = React.createClass({

    handleChange: function() {
       this.props.handleSearchInput(this.refs.input.value);
    },
    render: function() {
        return (
        <div className='input-form'>
            <input type="text" value={this.props.inputValue} onChange={this.handleChange} ref="input"/>
        </div>
        );
    }
});

FilterSearchInput.propTypes = {
    inputValue: React.PropTypes.string,
    handleSearchInput: React.PropTypes.func,
}

export default FilterSearchInput;

