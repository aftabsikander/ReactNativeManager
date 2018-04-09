import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from "./common";

class ListItem extends Component {

    onEmployeeItemClicked() {
        Actions.employeeCreate({employeeData: this.props.employee});
    }

    render() {
        const {name} = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onEmployeeItemClicked.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
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