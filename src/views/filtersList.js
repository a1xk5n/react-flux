import React, { Component } from 'react';
import Immutable from 'immutable';
import Checkbox from './Checkbox';

var FilterList = React.createClass({
    
    toggleCheckbox: function(id){   
        this.props.toggleCheckbox(id);
    },
    
    renderFilter: function(label) {
        return <Checkbox
            handleCheckboxChange={this.toggleCheckbox}
            label={label}
            key={label}
            id={label}
            isChecked={this.props.selectedCheckboxes.has(label)}
        />
    },
    renderItems: function() {
        return this.props.filters.map(this.renderFilter);
    },
    render: function() {
        return (
            <div className='filters-list'>
                <hr />
                {this.renderItems()}
                
            </div>
        );
    }
});

FilterList.propTypes = {
    filters: React.PropTypes.instanceOf(Immutable.List).isRequired,
    filters: React.PropTypes.instanceOf(Immutable.List).isRequired,
    toggleCheckbox: React.PropTypes.func,
}

export default FilterList;