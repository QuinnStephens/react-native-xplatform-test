/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  Component,
} = React;

var RouteMapper = require('./RouteMapper');

class PropertyFinder extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{
          title: 'Property Finder',
          name: 'search',
        }}
        renderScene={RouteMapper}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
