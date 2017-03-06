import AppDispatcher from '../dispatcher/app-dispatcher';
import Events from 'events';
import Immutable from 'immutable';
const EventEmitter = Events.EventEmitter;

const array = [
  {
    'id': '123',
    'name': 'site',
    'filters': ['google', 'yandex', 'yahoo']
  },{
    'id': '1234',
    'name': 'site1',
    'filters': []
  },{
    'id': '12334',
    'name': 'site2',
    'filters': ['google1', 'yandex1', 'yahoo1']
  }
];


var arrStoreObj = Immutable.Record({
  inputValue: '',
  objArr: Immutable.List(array),
  filters: Immutable.List([]), 
  searchedFilters: Immutable.List([]),
  isActiveDropdown: false,
})();

function searchFilters(string) {
  arrStoreObj = arrStoreObj.set('searchedFilters', Immutable.List([]));
  let searchedArray = [];
  let filters = arrStoreObj.get('filters');
  filters.forEach(function(element) {
      if(~element.indexOf(string)) {
        searchedArray.push(element);
      }
  });
  arrStoreObj = arrStoreObj.set('searchedFilters', Immutable.List(searchedArray));
}

var selectedDropdownCheckboxes = new Immutable.Set();
var selectedCheckboxes = new Immutable.Set();

function toggleCheckbox(label, set, need){ 
  if (set.has(label)) {
    set = set.delete(label);
    if(need) {
      removeCategories(label)
    }
  } else {
    set = set.add(label);
  }
  return set;
}


function handleDropdownCheckboxChange(){
  let filters = [];
  
  arrStoreObj.get('objArr').forEach(function(item){
    if(selectedDropdownCheckboxes.has(item.id)) {
      filters.push(item.filters);
    }
  });

  if( filters.length !== 0) {
    filters = filters.reduce((a, b) => a.concat(b));
  }

  arrStoreObj = arrStoreObj.set('filters' , Immutable.List(filters))
                           .set('searchedFilters', Immutable.List(filters));
  searchFilters(arrStoreObj.get('inputValue'));
}

function removeCategories(id) {
  const filterCategories = arrStoreObj.get('objArr').filter(function(x) {
    return x.id == id;
  }).get(0).filters.forEach(function(item) {
    selectedCheckboxes = selectedCheckboxes.delete(item)
  });
}


var Store = Object.assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getObj: function() {
    return arrStoreObj;
  },

  getSelectedDropdownCheckboxes: function() {
    return selectedDropdownCheckboxes;
  },

  getSelectedCheckboxes: function() {
    return selectedCheckboxes;
  },

});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case "INPUT_CHANGE":
      arrStoreObj = arrStoreObj.set('inputValue', action.comment);
      searchFilters(arrStoreObj.get('inputValue'));
      Store.emitChange();
      break;
    
    case "SELECT_DROPDOWN_CHECKBOX":
      selectedDropdownCheckboxes = toggleCheckbox(action.comment, selectedDropdownCheckboxes, true);
      handleDropdownCheckboxChange(action.comment);
      Store.emitChange();
      break;

    case "CHANGE_DROPDOWN_VISIBLE":
      arrStoreObj = arrStoreObj.set('isActiveDropdown', action.comment);
      Store.emitChange();
      break;
      
    case "SELECT_CHECKBOX":
      selectedCheckboxes = toggleCheckbox(action.comment, selectedCheckboxes, false);
      Store.emitChange();
      break;

    case "HANDLE_DROPDOWN_CHECKBOX":
      handleDropdownCheckboxChange();
      Store.emitChange();
      break;

    

    default:
  }
});

export default Store;