/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Component,
} = React;

var PropertyNavigator = require('./PropertyNavigator');

class PropertyFinder extends Component {
  render() {
    return PropertyNavigator();
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
