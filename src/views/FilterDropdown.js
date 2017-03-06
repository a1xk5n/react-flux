import React, { Component } from 'react';
import Immutable from 'immutable';

import DropdownCheckboxList from './dropdownCheckboxList';

var FilterDropdown = React.createClass({
    
    handleClick: function() {
        const activeness =  this.props.isActiveDropdown;
        this.props.changeDropdownVisible(!activeness);
    },

    renderDropdownList: function() {
        if(this.props.isActiveDropdown) {
            return <DropdownCheckboxList 
                        siteArr={this.props.siteArr} 
                        toggleDropdownCheckbox={this.props.toggleDropdownCheckbox}
                        selectedDropdownCheckboxes={this.props.selectedDropdownCheckboxes}
                    />
        }
    },
    render: function() {
        return (
            <div className='dropdown'>
                <p onClick={this.handleClick}>dropdown</p>
                <hr />
                {this.renderDropdownList()}
            </div>
        );
    }
});

FilterDropdown.propTypes = {
    siteArr: React.PropTypes.instanceOf(Immutable.List).isRequired,
    changeDropdownVisible: React.PropTypes.func,
    toggleDropdownCheckbox: React.PropTypes.func,
    selectedDropdownCheckboxes: React.PropTypes.instanceOf(Immutable.Set).isRequired,
    isActiveDropdown: React.PropTypes.bool,
}

export default FilterDropdown;

