import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Container, Content, Item, Input, Icon } from 'native-base'
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles'

export default class ProfileDetails extends Component {

    constructor(props, context) {
        super(props, context);
        this.inputRefs = {};
        this.state = {
            selectedIndex: 0,
            thumbPosition: new Animated.Value(0),
            textWidth: undefined,
            language: [{ label: 'English', value: 'english' }, { label: 'Hindi', value: 'hindi' }, { label: 'Sanskrit', value: 'sanskrit' }],
            favLanguage: ''
        };
    }

    render = () => <Container style={styles.container}>
        <Text style={styles.titleText}>Profile Details</Text>
        <RNPickerSelect placeholder={{
            label: 'Prefered Language',
            value: null,
        }}
            items={this.state.language}
            onValueChange={(value) => {
                this.setState({ favLanguage: value });
            }}
            hideDoneBar={true}
            style={{ ...styles }}
            value={this.state.favColor}
            ref={(el) => { this.inputRefs.picker = el }}
        />
        <RNPickerSelect placeholder={{
            label: 'Prefered Language',
            value: null,
        }}
            items={this.state.language}
            onValueChange={(value) => {
                this.setState({ favLanguage: value });
            }}
            hideDoneBar={true}
            style={{ ...styles }}
            value={this.state.favColor}
            ref={(el) => { this.inputRefs.picker = el }}
        />
        <Item style={styles.inputBox}>
            <Input placeholder='Add More Categories (max 2) ' placeholderTextColor={'#C9C8CF'} />
            <Icon active name='plus' type='FontAwesome' style={styles.plusIcon} />
        </Item>
        <TouchableOpacity style={styles.sendCodeButton}>
            <Text style={styles.sendButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
    </Container>
}