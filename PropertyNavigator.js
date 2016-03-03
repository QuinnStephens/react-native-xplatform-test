var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Component,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
} = React;

var RouteMapper = require('./RouteMapper');

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
        {route.title}
      </Text>
      );
  },
}

class PropertyNavBar extends Navigator.NavigationBar {
  
}

class PropertyNavigator extends Component {
  render() {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          name: 'search',
        }}
        renderScene={RouteMapper}
        navigationBar={
          <PropertyNavBar routeMapper={NavigationBarRouteMapper} />
        }
      />);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flex: 1,
    height: 32,
    backgroundColor: '#22d0ff',
  },
});

module.exports = PropertyNavigator;