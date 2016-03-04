'use strict';

var React = require('react-native');
var {
  Image,
  Component,
  StyleSheet,
  Text,
  View,
} = React;

class PropertyTabBar extends Component {
  render() {
    return (
    <View>
      <View style={[styles.tabs, this.props.style, ]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
      <Animated.View style={[tabUnderlineStyle, {left}]} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
});

module.exports = PropertyTabBar;