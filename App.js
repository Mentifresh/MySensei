import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'

import { white, darkPrimary, backgroundGray, primaryText } from './constants/colors'

export default class App extends React.Component {
  state = {
    addTimerModalVisible: false,
  }

  setModalVisible = (visible) => ( 
    this.setState({
      addTimerModalVisible: visible
    })
  );
  


  render() {
    //this.renderModal()
    return (
      <View style={styles.container}>

      { /** Action Bar **/ }
        <View style={ styles.actionBar }>
          <Text style={{ fontSize:20, color: white }}>MySensei - Ogame</Text>
          <TouchableOpacity onPress={() => this.setModalVisible(true)}>
            <Ionicons name='md-add' size={25} color={white} style={{ paddingLeft: 10, paddingRight: 10 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text>agdsfhgdf</Text>
        </View>

      </View>
    );
  }

  renderModal() {
    return(
      <View style={}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.addTimerModalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

          <View style={{backgroundColor: backgroundGray}}>
            <View style={[styles.actionBar, {backgroundColor: backgroundGray} ]}>
              <Text>New Timer</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Ionicons name='md-close' size={25} style={{ paddingLeft: 10, paddingRight: 10 }} />
              </TouchableOpacity>
            </View>


          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  actionBar: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: darkPrimary
  },
  content: {
    flex: 1,
    backgroundColor: backgroundGray
  }
});
