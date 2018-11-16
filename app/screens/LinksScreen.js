import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    headerStyle: {
      backgroundColor: Colors.blueLightColor,
      height: 40,
      paddingBottom: 20
    },
    headerTintColor: Colors.whiteColor
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
