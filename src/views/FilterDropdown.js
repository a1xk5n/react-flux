import React, { Component } from 'react';

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

// FilterDropdown.propTypes = {
//     siteArr: React.PropTypes.array,
//     toggleDropdownCheckbox: React.PropTypes.func,
//     selectedDropdownCheckboxes: React.PropTypes.object,
// }

export default FilterDropdown;

