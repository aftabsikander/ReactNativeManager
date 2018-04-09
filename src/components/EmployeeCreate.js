import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common'
import {employeeUpdate} from "../actions";
import {connect} from 'react-redux';

class EmployeeCreate extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label={'Name'}
                           value={this.props.name}
                           placeholder={'Employee Name'}
                           onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input label={'Phone'}
                           value={this.props.phone}
                           placeholder={'555-555-555'}
                           onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        salectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label={'Monday'} value={"Monday"}/>
                        <Picker.Item label={'TUESDAY'} value={"TUESDAY"}/>
                        <Picker.Item label={'WEDNESDAY'} value={"WEDNESDAY"}/>
                        <Picker.Item label={'THURSDAY'} value={"THURSDAY"}/>
                        <Picker.Item label={'FRIDAY'} value={"FRIDAY"}/>
                        <Picker.Item label={'SATURDAY'} value={"SATURDAY"}/>
                        <Picker.Item label={'SUNDAY'} value={"SUNDAY"}/>

                    </Picker>
                </CardSection>

                <CardSection>
                    <Button> Save</Button>
                </CardSection>
            </Card>
        )
    };
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};
const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};
export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);