import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Container, Content } from 'native-base'
import styles from './styles'

export default class Verification extends Component {

    render = () => <Container style={styles.container}>
        <Text style={styles.titleText}>Phone Number Verification</Text>
        <View style={styles.inputView}>
            <Text style={styles.conuntryCode}>+91</Text>
            <TextInput
                style={styles.inputText}
                placeholder='9999999999'
            />
        </View>
        <View style={styles.seprator} />
        <TouchableOpacity style={styles.sendCodeButton}>
            <Text style={styles.sendButtonText}>Send Verification Code</Text>
        </TouchableOpacity>
    </Container>
}