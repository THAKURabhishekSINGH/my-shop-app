import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Switch } from 'react-native';
import { Container, Card, Icon } from 'native-base'
import styles from './styles'
import images from '../../themes/images'

export default class Compensation extends Component {

    constructor(props, context) {
        super(props, context);
        this.inputRefs = {};
        this.state = {
            toggled: true
        };
    } 

    //return card to view
    renderCard = (image, title, description) => <Card bordered style={styles.card}>
        {console.log("Image is ", image)}
        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={styles.cardImage} resizeMode={'contain'}/>
        <View style={{flex:0.55}}>
            <View style={styles.headingView}>
                <Text style={styles.cardTitleText}>{title}</Text>
                <Icon name={'play-circle-outline'} type={'MaterialIcons'} style={styles.playIcon}/>
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <Switch style={styles.switchStyle}   onValueChange={ (value) => this.setState({ toggled: value })} value={ this.state.toggled }  thumbColor={'#00A9BA'}/>
    </Card>

    render = () => <Container style={styles.container}>
        <Text style={styles.titleText}>Select your type of Compensation in order to lorem ipsum</Text>
        {console.log("Image is ", images)}
        {this.renderCard(images.customer, 'Customer', 'Lerol isopsum sdidnf dshf dsfhdf fdjfg fhgjsflsjdfn sjdf')}
        {this.renderCard(images.shopkeeper, 'Shopkeeper', 'Lerol isopsum sdidnf dshf dsfhdf fdjfg fhgjsflsjdfn sjdf')}
        {this.renderCard(images.distributer, 'Distributer', 'Lerol isopsum sdidnf dshf dsfhdf fdjfg fhgjsflsjdfn sjdf')}
        <TouchableOpacity style={styles.sendCodeButton}>
            <Text style={styles.sendButtonText}>Submit</Text>
        </TouchableOpacity>
    </Container>
}