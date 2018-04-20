import React, {
    Component,
  } from 'react';
  import {
    TouchableOpacity,
    Text,
  } from 'react-native';
  import { connectRealm } from 'react-native-realm';
  import styles from './styles'
  
  class ConnectedExampleItem extends Component {
  
    render() {
      return (
        <TouchableOpacity
          onPress={() => this.props.onPressRemoveItem(this.props.item,this.props.index)}
          style={styles.item}
        >
          <Text>{this.props.item.name}</Text>
        </TouchableOpacity>
      );
    }
  }

  export default ConnectedExampleItem
  