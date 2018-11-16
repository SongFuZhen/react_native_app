import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
// import { WebBrowser } from 'expo';
import Colors from '../constants/Colors';
import { WingBlank, NoticeBar } from 'antd-mobile-rn';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
    headerStyle: {
      backgroundColor: Colors.blueLightColor,
      height: 40,
      paddingBottom: 20
    },
    headerTintColor: Colors.whiteColor
  };

  render() {
    return (
      <View style={styles.container}>
        <NoticeBar marqueeProps={{ loop: true }}>
          重要通知: 这个地方可以显示重要通知, 将会有重大事件发生，请注意哦....
        </NoticeBar>
        
        <WingBlank size='md'>
          <Text>首页</Text>
        </WingBlank>
      </View>
    );
  }

  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    flexDirection: 'column'
  }
});