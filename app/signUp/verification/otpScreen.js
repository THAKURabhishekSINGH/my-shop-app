import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Container, Content } from 'native-base'
import CodeInput from 'react-native-confirmation-code-input';
import styles from './styles'
import metrics from '../../themes/metrics'

export default class Verification extends Component {

    render = () => <Container style={styles.container}>
        <Text style={[styles.titleText, { marginTop: metrics.screenHeight * 0.01499250375 }]}>A verification code has been sent to</Text>
        <Text style={styles.phoneText}>+66 6666 66 66</Text>
        <Text style={styles.infoText}>Type your 5 digit code in order to verify</Text>
        <CodeInput
            ref="codeInputRef2"
            keyboardType="numeric"
            codeLength={5}
            placeholder={'0'}
            className='border-b'
            compareWithCode='12345'
            autoFocus={false}
            activeColor='rgba(49, 180, 4, 1)'
            inactiveColor='rgba(49, 180, 4, 1.3)'
            codeInputStyle={styles.otpText}
            containerStyle={{ flex: 0.6 }}
            onFulfill={(isValid, code) => console.log(isValid, code)}
        />
        <Text style={styles.didReceiveCode}>Didn't receive the verification code?</Text>
        <Text style={styles.resendCode}>Resend it from here</Text>
        <TouchableOpacity style={styles.sendCodeButton}>
            <Text style={styles.sendButtonText}>Verify Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
    </Container>
}