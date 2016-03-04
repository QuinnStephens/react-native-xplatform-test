'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  Text,
  ToolbarAndroid,
  TouchableHighlight,
  View,
} = React;

var PropertyTabBar = require('./PropertyTabBar');
// var ScrollableTabView = require('react-native-scrollable-tab-view');
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
var FaqPage = require('./FaqPage');
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
  var content;
  switch (route.name) {
    case "search":
      content = (
        <SearchPage 
          navigator={navigationOperations} 
          tabLabel="Search" />
        );
      break;
    case "results":
      content = (
        <SearchResults 
          navigator={navigationOperations}
          listings={route.listings} 
          tabLabel="Search" />
        );
      break;
  }

  return (
    <ScrollableTabView 
      tabBarPosition = "bottom"
      renderTabBar = { () => <DefaultTabBar style={styles.tabBar}/> }>
      {content}
      <FaqPage tabLabel="FAQ" />
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flex: 0.1,
    backgroundColor: '#d0d0d0',
  }
});

module.exports = RouteMapper;