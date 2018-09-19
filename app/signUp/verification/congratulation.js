import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated, TextInput, Modal, ActivityIndicator } from 'react-native';
import { Content, Icon } from 'native-base'
import styles from './styles'
import metrics from '../../themes/metrics'

export default class Verification extends Component {

    render = () => <Modal
        animationType={'fade'}
        transparent={true}
        visible={true}>
        <View style={styles.modalView}>
            <View style={styles.modalDetailView}>
                <ActivityIndicator size={'large'}
                    color={'rgb(24,152,241)'}
                    animation={true}
                />
                <View style={styles.checkIconView}><Icon name={'check'} type={'MaterialIcons'} style={styles.checkIcon} /></View>
                <Text style={styles.congratulationText}>Congratulations!</Text>
                <Text style={styles.modalPhoneNoText}>Your Phone Number</Text>
                <Text style={styles.modalPhoneNo}>+971 9999 99 99</Text>
                <Text style={styles.modalVerifiedText}>Is now verified enjoy lero ipsum color</Text>
                <TouchableOpacity style={[styles.sendCodeButton, { marginTop: metrics.screenHeight * 0.03748125937, width: '80%' }]}>
                    <Text style={styles.sendButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
}