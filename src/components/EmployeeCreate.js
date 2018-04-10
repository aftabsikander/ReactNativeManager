import React, {Component} from 'react';
import {Button, Card, CardSection} from './common'
import {employeeCreate} from "../actions";
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {

    onCreateEmployeeClick() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'})
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onCreateEmployeeClick.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    };
}


const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};
export default connect(mapStateToProps, {employeeCreate})(EmployeeCreate);