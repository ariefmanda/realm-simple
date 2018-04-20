import React, { Component } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  NetInfo
} from "react-native";
import uuid from "uuid";

import { firebase } from "../../../database/firebase";
import { createSample, findAll, remove } from "../../../database/realm/utils";
import ListItem from "../../components/Item/list";
import styles from "./style";

import { take } from './camera'

class Item extends Component {
  state = {
    items: [],
    connect: false
  };
  count = 0;

  onPressAddItem = async () => {
    let self = this;
    let newItem = {
      name: this.count.toString(),
      date: new Date(),
      id: uuid.v4()
    };
    if (this.state.connect) {
      firebase
        .ref("items")
        .child(newItem.id)
        .set(newItem);
    }else{
      await createSample(newItem);
    }

    let state = self.state;
    state.items.push(newItem);
    self.setState({ ...state });
    self.count++;
  };

  findAllRealm = () => {
    let self = this;
    NetInfo.isConnected.addEventListener("connectionChange", isConnected => {
      if (isConnected) {
        firebase.ref("items").once("value", snapshot => {
          self.setState({
            connect: isConnected,
            items: snapshot.val() ? Object.values(snapshot.val()) : []
          });
        });
      } else {
        findAll().then(items => {
          self.setState({ connect: isConnected, items: [...items] });
        });
      }
    });
  };
  onPressTakeCamera = () =>{
    take()
  }
   onPressRemoveItem = async (item, index) => {
    let self = this;
    if (this.state.connect) {
      firebase
        .ref("items")
        .child(item.id)
        .set(null);
    }else{
      await remove(item);
    }
    let state = self.state;
    state.items.splice(index, 1);
    self.setState({ ...state });
  };

  componentDidMount = () => {
    this.findAllRealm();
  };

  render() {
    return (
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={() => this.onPressTakeCamera()}
          style={styles.add}
        >
          <Text style={styles.addText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.onPressAddItem()}
          style={styles.add}
        >
          <Text style={styles.addText}>Add Item</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.items ? (
            this.state.items.map((item, index) => (
              <View key={item.id}>
                <ListItem
                  item={item}
                  index={index}
                  onPressRemoveItem={this.onPressRemoveItem}
                />
              </View>
            ))
          ) : (
            <Text>Loading</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Item;
