var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
} = React;

var RouteMapper = require('./RouteMapper');
var NavigationBarRouteMapper = require('./NavigationBarRouteMapper');

var PropertyNavigator = function() {
  return (
      <Navigator 
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          name: 'search',
        }}
        renderScene={RouteMapper}
        navigationBar={
          <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
        }
      />
      );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = PropertyNavigator;