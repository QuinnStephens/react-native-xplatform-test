'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight
} = React;

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return (<TouchableHighlight style={{marginTop: 30}} onPress = {() => {
      if (index > 0) {
        navigator.pop();
      }
    }}>
      <Text>Back</Text>
      </TouchableHighlight>
    )
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text>
        {route.name}
      </Text>
      );
  },
}

module.exports = NavigationBarRouteMapper;