import AppDispatcher from '../dispatcher/app-dispatcher';

export default {
    inputChange: function(comment) {
        var action = {
            actionType: "INPUT_CHANGE",
            comment: comment
        };

        AppDispatcher.dispatch(action);
    },
     
     toggleDropdownCheckbox: function(comment) {
        var action = {
            actionType: "SELECT_DROPDOWN_CHECKBOX",
            comment: comment
        };

        AppDispatcher.dispatch(action);
    },
    changeDropdownVisibile: function(comment) {
        var action = {
            actionType: "CHANGE_DROPDOWN_VISIBLE",
            comment: comment
        };

        AppDispatcher.dispatch(action);
    },
    toggleCheckbox: function(comment) {
        var action = {
            actionType: "SELECT_CHECKBOX",
            comment: comment
        };

        AppDispatcher.dispatch(action);
    },

    handleDropdownCheckbox: function() {
        var action = {
            actionType: "HANDLE_DROPDOWN_CHECKBOX",
        };

        AppDispatcher.dispatch(action);
    },
    
}