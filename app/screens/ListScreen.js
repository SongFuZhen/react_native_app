import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: '列表',
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
                <Text>列表界面</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: Colors.whiteColor,
    },
});
