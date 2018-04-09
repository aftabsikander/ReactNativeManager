import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardSection} from "./common";

class ListItem extends Component {

    render() {
        const {name} = this.props.employee;
        return (
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>{name}</Text>
                </CardSection>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        containerStyle: {
            flex: 1,
            padding: 10,
            backgroundColor: '#d8d8d8',
            justifyContent: 'flex-start'
        },
        titleStyle: {
            fontSize: 18,
            paddingLeft: 15
        },
    }
);


export default ListItem;