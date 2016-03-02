'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  View,
} = React;

var SearchPage = require('./SearchPage');
var SearchResults = require('./SearchResults');

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  switch (route.name) {
    case "search":
      return (
        <SearchPage navigator={navigationOperations} />
      );
    case "results":
      return (
        <SearchResults 
        navigator={navigationOperations}
        listings={route.listings} />
      );
  }
};

module.exports = RouteMapper;