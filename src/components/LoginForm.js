import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from "./common";
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

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner spinnerSize='large'/>;
        }
        return (
            <Button onPress={this.loginButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    renderError() {
        if (this.props.errorMessage) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.errorMessage}
                    </Text>
                </View>
            )
        }
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

                {this.renderError()}

                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>

            </Card>
        )
    };
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({auth}) => {
    const {email, password, errorMessage, loading} = auth;

    return {email, password, errorMessage, loading};
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);