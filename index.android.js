/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image,
} from 'react-native';

class days30 extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Devin',
                'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin',
                'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin',
                'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin',
                'Devin', 'Devin9', 'Devin8', 'Devin7', 'Devin6', 'Devin5', 'Devin4', 'Devin3', 'Devin2', 'Devin1'
            ])
        };
    };

    render() {
        return (
            <View style={styles.container}>

                <ListView
                    style={styles.li}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={{height:40,backgroundColor:"#fff",margin:5, alignItems:'flex-start',}}>{rowData}</Text>}
                />
                <Text style={styles.welcome}>
                    20001812
                </Text>
                <Text style={styles.welcome}>
                    Welcome to React Native!200320
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 42,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    li: {
        borderWidth: 1,
        overflow:'visible',
        backgroundColor:'gray',
        paddingLeft:0,
        marginLeft:0,
        marginTop:0,
        paddingTop:0,
        top:0,
        bottom:42,
        position:'absolute',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    list: {
        marginTop: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 3,
        width: 85,
        height: 85,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    thumb: {
        width: 45,
        height: 45
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    },
});

const THUMB_URLS = [
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
    require('./imgs/1.png'),
];

AppRegistry.registerComponent('days30', () => days30);*/

//
'use strict';
import React, {
    Component,
} from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image,
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');
var SwitchAndroid = require('SwitchAndroid');
class days30 extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Devin',
                'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin',
                'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin',
                'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin', 'Devin',
                'Devin', 'Devin9', 'Devin8', 'Devin7', 'Devin6', 'Devin5', 'Devin4', 'Devin3', 'Devin2', 'Devin1'
            ])
        };
    };

    render() {
        return (
            <View>
                <ToolbarAndroid
                    navIcon={require('./imgs/1.png')}
                    logo={require('./imgs/1.png')}
                    style={styles.toolbar}>
                    <SwitchAndroid
                        value={true}
                    />
                </ToolbarAndroid>
                <ListView
                    style={styles.li}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={{height:40,backgroundColor:"#fff",margin:5, alignItems:'flex-start',}}>{rowData}</Text>}
                />
            </View>
        );
    }
}
var toolbarActions = [
    {title: 'Create', icon: require('./imgs/1.png'), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon: require('./imgs/1.png'), show: 'always'},
];
const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#f60',
        height: 56,
    },
    li: {
        borderWidth: 1,
        overflow:'visible',
        backgroundColor:'gray',
        paddingLeft:0,
        marginLeft:0,
        marginTop:0,
        paddingTop:0,
        top:56,
        bottom:42,
        left:0,
        minHeight:300,
        position:'absolute',
    },
});
AppRegistry.registerComponent('days30', () => days30);
//