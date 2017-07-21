/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View
} from 'react-native';

export default class MyStack extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { text: '' };
  }

  _handlePress() {
    console.log('Pressed!');
  }

  _keyExtractor = (item, index) => item.id;

  _pushAction(){
    this.setState({
            arrayList:[...this.state.arrayList,this.state.text],
        })
  }

  _popAction(){
    alert(this.state.language)
  }

  /*_onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };*/

  _renderItem = ({ item }) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={() => this._pushAction(value)}
          title="Push"
          color="#f70000"
          accessibilityLabel="button"
        />
        <Button
          onPress={() => this._popAction()}
          title="Pop"
          color="#004500"
          accessibilityLabel="button"
        />

        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('MyStack', () => MyStack);