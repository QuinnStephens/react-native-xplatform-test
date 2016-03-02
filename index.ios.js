/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
  View,
  Text,
  Component
} = React;

var RouteMapper = require('./RouteMapper');

class PropertyFinder extends Component {
  render() {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          name: 'search',
        }}
        renderScene={RouteMapper}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
