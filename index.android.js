'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  View,
  Text,
  Component
} = React;

var SearchPage = require('./SearchPage');

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
  return (
    <SearchPage navigator={navigationOperations} />
  );
};

class PropertyFinder extends Component {
  render() {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{title: 'Property Finder'}}
        renderScene={RouteMapper}/>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 30,
    margin: 80,
  },
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinder });