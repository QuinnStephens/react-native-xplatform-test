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

var ScrollableTabView = require('react-native-scrollable-tab-view');
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
      renderTabBar = { () => 
        <View style={styles.tabBar}>
          <Text>Tab bar</Text>
        </View>
      }
      >
      {content}
      <FaqPage tabLabel="FAQ" />
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flex: 0.3,
    height: 32,
    backgroundColor: '#ff0000',
  }
});

module.exports = RouteMapper;