import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communication from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate, employeeSave, employeeDelete} from "../actions";
import {Button, Card, CardSection, Confirm} from './common'
import {View} from "react-native";

class EmployeeEdit extends Component {
    state = {showModal: false};

    componentDidMount() {
        _.each(this.props.employeeData, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onSavePress() {
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employeeData.uid});
    }

    onTextPressed() {
        const {phone, shift} = this.props;
        Communication.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFiredPressed() {
        this.setState({showModal: !this.state.showModal});
    }

    onAccept() {
        const {uid} = this.props.employeeData;
        this.props.employeeDelete({uid});
    }

    onDecline() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Card>
                    <EmployeeForm/>
                    <CardSection>
                        <Button onPress={this.onSavePress.bind(this)}>
                            Save Changes
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onTextPressed.bind(this)}>
                            Text Schedule
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onFiredPressed.bind(this)}>
                            Fire Employee
                        </Button>
                    </CardSection>

                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you wanna delete it?
                    </Confirm>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);