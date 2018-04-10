import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from 'EmployeeForm';
import {Button, Card, CardSection} from './common'

class EmployeeEdit extends Component {
    render() {
        return (
            <Card>
                <EmployeeForm>
                    <CardSection>
                        <Button>
                            Save Changes
                        </Button>
                    </CardSection>
                </EmployeeForm>
            </Card>
        );
    }
}

export default connect()(EmployeeEdit);