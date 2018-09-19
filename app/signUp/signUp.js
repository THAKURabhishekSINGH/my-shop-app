import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Container, Content } from 'native-base'
import styles from './styles'
import AnimatedSegmentedControl from './animatedSegmengtControl'
import Verification from './verification/verification'
import ProfileDetails from './profileDetails/profileDetails'
import Compensation from './compensation/compensation'

export default class SignUp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedValue : 'Verification'
        };
    }

    renderTab = () => {
        if(this.state.selectedValue == "Verification") {
            return <Verification/>
        } else if(this.state.selectedValue == "Profile Details") {
            return <ProfileDetails/>
        } else {
            return <Compensation/>
        }
    }

    render = () => <Container style={styles.container}>
        <AnimatedSegmentedControl 
            values={["Verification", 'Profile Details', 'Type of compensation']} 
            onValueChange={(e) => this.setState({ selectedValue : e})} 
        />
        {this.renderTab()}
    </Container>
}