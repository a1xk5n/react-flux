import React, { Component } from 'react';
import Immutable from 'immutable';

import Store from '../stores/store';
import ActionCreator from '../actions/action-creators';

import FilterSearchInput from './FilterSearchInput';
import FiltersList from './filtersList';
import FilterDropdown from './FilterDropdown';

var Container = React.createClass({
    getInitialState: function() {
        return {
            data: Store.getObj(),
        };
    },
    onChange: function() {
        this.setState({
            data: Store.getObj(),
        });
    },
    componentDidMount: function() {
        Store.addChangeListener(this.onChange);
    },
    componentWillUnmount: function() {
        Store.removeChangeListener(this.onChange);
    },
    
    render: function() {
        return (
        <div>
            <FilterSearchInput 
                inputValue={this.state.data.get('inputValue')}
                handleSearchInput={ActionCreator.inputChange}
            />
            <FilterDropdown 
                siteArr={this.state.data.get('objArr')} 
                changeDropdownVisible={ActionCreator.changeDropdownVisibile}
                toggleDropdownCheckbox={ActionCreator.toggleDropdownCheckbox}
                selectedDropdownCheckboxes={Store.getSelectedDropdownCheckboxes()}
                isActiveDropdown={this.state.data.get('isActiveDropdown')}
            />
            
            <FiltersList 
                filters={this.state.data.get('searchedFilters')} 
                selectedCheckboxes={Store.getSelectedCheckboxes()}
                toggleCheckbox={ActionCreator.toggleCheckbox}
            />
        </div>
        );
    }
});

export default Container;