import React from 'react';
import { StyleSheet, SectionList, Text, View, Image, Alert } from 'react-native';
import { Constants } from 'expo';
import Colors from '../constants/Colors';
import { userIcon } from '../customer.config.js'

import { Button } from 'antd-mobile-rn'

const { manifest } = Constants;
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '设置',
    headerStyle: {
      backgroundColor: Colors.blueLightColor,
      height: 40,
      paddingBottom: 20
    },
    headerTintColor: Colors.whiteColor
  };

  render() {

    function onHandleLogout() {
      Alert.alert(
        '警告',
        '确定注销吗？',
        [
          { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: '确定', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    }

    const sections = [
      { data: [{ value: manifest.version }], title: '版本号' },
      { data: [{ value: '宋福祯' }], title: '开发者' }
    ];

    return (
      <View style={styles.container}>
        <View style={{ height: '80%' }}>
          <SectionList
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
            stickySectionHeadersEnabled={true}
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={ListHeader}
            sections={sections}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button style={styles.logoutBtn}
            onPressIn={onHandleLogout}>
            <Text style={{ color: Colors.whiteColor }}>注销登录</Text>
          </Button>
        </View>
      </View >
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
    if (item.type === 'color') {
      return (
        <SectionContent>
          {item.value && <Color value={item.value} />}
        </SectionContent>
      );
    } else {
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>
            {item.value}
          </Text>
        </SectionContent>
      );
    }
  };
}

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );
};

const SectionContent = props => {
  return (
    <View style={styles.sectionContentContainer}>
      {props.children}
    </View>
  );
};

const ListHeader = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <AppIconPreview iconUrl={userIcon} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          宋福祯
        </Text>

        <Text style={styles.phoneText} numberOfLines={1}>
          13918057179
        </Text>

        <Text style={styles.mailText} numberOfLines={1}>
          fuzhen.song@cz-tek.com
        </Text>

        <Text style={styles.descriptionText}>
          这个人很懒，还没有个性签名
        </Text>
      </View>
    </View>
  );
};

const AppIconPreview = ({ iconUrl }) => {
  if (!iconUrl) {
    // iconUrl = manifest.userIcon;
    iconUrl = 'https://www.easyicon.net/download/png/1201412/128/'
  }

  return (
    <Image
      source={{ uri: iconUrl }}
      style={{ width: 84, height: 84 }}
      resizeMode="cover"
    />
  );
};

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={styles.colorContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
        <View style={styles.colorTextContainer}>
          <Text style={styles.sectionContentText}>
            {value}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    flexDirection: 'column'
  },

  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },

  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },

  sectionHeaderContainer: {
    backgroundColor: Colors.grayLightColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.backgroudColor,
  },

  sectionHeaderText: {
    fontSize: 14,
  },

  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },

  sectionContentText: {
    color: Colors.normalColor,
    fontSize: 14,
  },

  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },

  phoneText: {
    color: Colors.boxShadowColor,
    marginTop: 4,
    fontSize: 14,
    backgroundColor: 'transparent',
  },

  mailText: {
    color: Colors.boxShadowColor,
    marginTop: 4,
    fontSize: 14,
    backgroundColor: 'transparent',
  },

  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: Colors.normalColor,
  },

  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.backgroudColor,
  },

  colorTextContainer: {
    flex: 1,
  },

  logoutBtn: {
    width: 200,
    height: 60,
    borderColor: Colors.redLightColor,
    backgroundColor: Colors.redLightColor,
  },




});
