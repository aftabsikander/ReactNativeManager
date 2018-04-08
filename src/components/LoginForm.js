import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from "./common";
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    loginButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        value={this.props.email}
                        onChangeText={this.onEmailChanged.bind(this)}
                    />

                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry={true}
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={this.onPasswordChanged.bind(this)}
                    />

                </CardSection>

                <CardSection>

                    <Button onPress={this.loginButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>

            </Card>
        )
    };
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);