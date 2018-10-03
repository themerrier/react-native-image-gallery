import React from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Image } from 'react-native';

import styles from './styles';

class SmartImage extends React.Component {

    state = {
        loaded: true,
        opacity: new Animated.Value(0),
        largeOpacity: new Animated.Value(0),
    }

    onLoadEnd = (ev) => {}
    
    onLoadThumb = (ev) => {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 0.8,
                useNativeDriver: true,
                duration: 100,
            }
          ).start(this.setState({loaded: true}));
    }

    onLoadlarge = (ev) => {
        Animated.timing(
            this.state.largeOpacity,
            {
                toValue: 1,
                useNativeDriver: true,
                duration: 100,
            }
          ).start();
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.props.sourceThumb && (
                    <Animated.View style={[
                        this.props.style,
                        styles.thumb,
                        {opacity: this.state.opacity},
                    ]}>
                        <Image 
                            {...this.props}
                            onLoadEnd={this.onLoadEnd}
                            onLoad={this.onLoadThumb}
                            source={this.props.sourceThumb}
                            style={this.props.style}
                            blurRadius={2}
                        />
                    </Animated.View>
                )}
                <Animated.View style={[
                    this.props.style,
                    styles.large,
                    {opacity: this.state.largeOpacity},
                ]}>
                    <Image 
                        {...this.props}
                        onLoadEnd={this.onLoadEnd}
                        onLoad={this.onLoadlarge}
                        source={this.props.source}
                        style={this.props.style}
                        // blurRadius={2}
                    />
                </Animated.View>
                {!this.state.loaded && (
                    <View style={styles.loader}>
                    </View>
                )}
            </View>
        );
    }
}

SmartImage.propTypes = {
    source: PropTypes.any,
    sourceThumb: PropTypes.any,
    resizeMode: PropTypes.string,
    preloaderSize: PropTypes.string,
}

SmartImage.defaultProps = {
    source: null,
    sourceThumb: null,
    resizeMode: 'contain',
    preloaderSize: 'medium',
    zoom: false
}


export default SmartImage;