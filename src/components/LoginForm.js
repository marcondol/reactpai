import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    Actions.main('reset');
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
        return (<Card >
                <CardSection>
                  <Input 
                    label="Email"
                    placeholder="email@gmail.com"
                    onChangeText={email => this.setState({ email })}
                    value={this.props.email}
                  />
                </CardSection>
                <CardSection>
                  <Input
                    secureTextEntry 
                    label="Password"
                    placeholder="Password"  
                    onChangeText={password => this.setState({ password })}
                    value={this.props.password}                
                  />
                </CardSection>
                  <Text style={styles.errorTextStyle}>
                    {this.props.error} 
                  </Text>
                <CardSection>
                  {this.renderButton()}
                </CardSection>

            </Card>
            );
  }

}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
