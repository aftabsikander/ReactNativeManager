import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';
import {Card, CardSection, Input, Button} from './common'
import {employeeUpdate, employeeCreate} from "../actions";
import {connect} from 'react-redux';

class EmployeeCreate extends Component {

    onCreateEmployeeClick() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'})
    }

    render() {
        console.log(this.props.employeeData);
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

                <CardSection>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <View style={{flex: 2}}>
                        <Picker
                            style={{flex: 1}}
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}>
                            <Picker.Item label={'Monday'} value={"Monday"}/>
                            <Picker.Item label={'Tuesday'} value={"Tuesday"}/>
                            <Picker.Item label={'Wednesday'} value={"Wednesday"}/>
                            <Picker.Item label={'Thursday'} value={"Thursday"}/>
                            <Picker.Item label={'Friday'} value={"Friday"}/>
                            <Picker.Item label={'Saturday'} value={"Saturday"}/>
                            <Picker.Item label={'Sunday'} value={"Sunday"}/>

                        </Picker>
                    </View>

                </CardSection>

                <CardSection>
                    <Button onPress={this.onCreateEmployeeClick.bind(this)}> Save</Button>
                </CardSection>
            </Card>
        )
    };
}

const styles = {
    pickerTextStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 25
    }
};
const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};
export default connect(mapStateToProps, {
    employeeUpdate,
    employeeCreate
})(EmployeeCreate);