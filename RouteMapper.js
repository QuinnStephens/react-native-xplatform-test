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
        listings={route.listings}
        onForward={() => {
          var nextIndex = route.index + 1;
          _navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            _navigator.pop();
          }
        }} />
      );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = RouteMapper;