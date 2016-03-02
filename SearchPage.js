'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ProgressBarAndroid,
  ActivityIndicatorIOS,
  Image,
  Component,
  Platform,
} = React;

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber
  };
  data[key] = value;

  var queryString = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.nestoria.co.uk/api?' + queryString;
}

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchString: 'Temuco',
      isLoading: false,
    };
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });
  }

  onSearchTextChanged(event) {
    this.setState({searchString: event.nativeEvent.text });
  }

  onSearchPressed() {
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }

  spinner() {
    return Platform.OS == "ios" ? 
      (<ActivityIndicatorIOS hidden='true' size='large'/>) :
      (<ProgressBarAndroid hidden='true' styleAttr='Large'/>)
  }

  render() {
    var spinner = this.state.isLoading?
      (this.spinner()) :
      (<View/>);

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to eat!
        </Text>
        <Text style={styles.description}>
          Search by place NAME, postcode or search NEAR UR LOCATION.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight 
            style={styles.button}
            underlayColor='#99d9f4'
            onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('image!house')} style={styles.image}/> 
        {spinner}
      </View>
    );
  }
}


var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  }, 
  image: {
    width: 217,
    height: 138
  }
});

module.exports = SearchPage;