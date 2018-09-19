import React, { Component } from 'react';
import {
    Animated,
    PropTypes,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import fonts from '../themes/fonts'
import metrics from '../themes/metrics'

export default class AnimatedSegmentedControl extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedIndex: 0,
            thumbPosition: new Animated.Value(0),
            textWidth: undefined,
            textHeight: undefined
        };
    }

    handleSelected(idx) {
        const { values, onChange, onValueChange } = this.props;
        const { thumbPosition } = this.state;

        onChange && onChange({ index: idx, value: values[idx] });
        onValueChange && onValueChange(values[idx]);

        this.setState({ selectedIndex: idx });
        Animated.spring(thumbPosition, { toValue: idx }).start();
    }

    handleTextsLayout(layouts) {
        let textHeight = 0;
        let textWidth = 0;
        layouts.forEach(({ width, height }) => {
            if (width >= textWidth) {
                textWidth = width;
                textHeight = height;
            }
        });
        if (textWidth === this.state.textWidth) return;
        this.setState({ textWidth, textHeight });
    }

    getRootStyle() {
        const {
            borderWidth,
            borderRadius,
            borderColor,
            backgroundColor,
            style
        } = this.props;

        return styles.root
    }

    getThumbStyle() {
        const { borderRadius, selectedBorderRadius, selectedBackgroundColor, values } = this.props;
        const { thumbPosition, textWidth = 0, textHeight } = this.state;
        return [
            styles.thumb,
            {
                width: textWidth + metrics.screenWidth*0.008,
                height: textHeight + metrics.screenHeight*0.01499250375,
                transform: [{
                    translateX: thumbPosition.interpolate({
                        inputRange: [0, values.length - 1],
                        outputRange: [0, (values.length - 1) * textWidth]
                    })
                }]
            }
        ];
    }

    getTextStyle(idx) {
        const { textPadding } = this.props;
        const { selectedIndex, textWidth } = this.state;

        return [
            styles.text,
            {
                width: textWidth,
                padding: textPadding,
                color: selectedIndex === idx ? 'white' : 'grey'
            }
        ];
    }

    render() {
        const { values } = this.props;
        const onLayouts = [];
        const promises = values.map((v, i) =>
            new Promise((resolve, reject) => {
                onLayouts[i] = (e) => resolve(e.nativeEvent.layout);
            })
        );
        Promise.all(promises).then(this.handleTextsLayout.bind(this));

        const optionViews = values.map((val, idx) => (
            <TouchableOpacity
                key={idx}
                onPress={() => this.handleSelected(idx)}
                onLayout={onLayouts[idx]}
                style={styles.segmentButton}
            >
                <Text style={this.getTextStyle(idx)}>{val}</Text>
            </TouchableOpacity>
        ));

        return (
            <View style={styles.segmentView}>
                <View style={this.getRootStyle()}>
                    <Animated.View style={this.getThumbStyle()} />
                    {optionViews}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center'
    },
    root: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#D1ECF1',
        height: metrics.screenHeight * 0.04497751124,
        width: '100%',
        borderRadius: metrics.screenWidth * 0.04
    },
    thumb: {
        marginTop: -metrics.screenHeight * 0.007496251874,
        position: 'absolute',
        borderRadius: metrics.screenWidth * 0.05333333333,
        backgroundColor: '#00A9BA'
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: metrics.screenWidth * 0.02933333333,
        fontFamily: fonts.type.regular,
        paddingLeft: 2,
    },
    segmentView: {
        marginTop: metrics.screenHeight * 0.1049475262,
        marginHorizontal: metrics.screenWidth * 0.04533333333,
        height: metrics.screenHeight * 0.04497751124,
        borderRadius: metrics.screenWidth * 0.04
    },
    segmentButton: {
        flex: 0.33,
        height: metrics.screenHeight * 0.04497751124,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
