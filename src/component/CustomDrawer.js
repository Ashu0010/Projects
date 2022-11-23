import { Text, View, SafeAreaView, Image, StyleSheet, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class CustomDrawer extends Component {
    render() {
        return (

            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://mobimg.b-cdn.net/v2/fetch/e7/e7632726572f06818620fcb92c776ee3.jpeg?w=300' }}
                    resizeMode='stretch'
                    style={styles.container}>

                    <LinearGradient
                        colors={["#000000", '#151BDD', '#BE5DF6', '#151BDD', '#BE5DF6', '#151BDD',]}
                        start={{ x: 0.4, y: 0.24 }}
                        end={{ x: 0.1, y: 0.1 }}
                        style={styles.linearGradient}
                    >
                        <SafeAreaView style={styles.container}>
                            <TouchableOpacity>
                                <View
                                    style={styles.topIcon}>
                                    <Image
                                        source={require('../utils/assets/icons/icons8-kuromi-50.png')}
                                        style={styles.icons}
                                        resizeMode="stretch"
                                    />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View
                                    style={styles.log}>
                                    <Text style={styles.logText}>LOG IN</Text>
                                </View>
                            </TouchableOpacity>

                            <View
                                style={styles.line}>
                                <TouchableOpacity>
                                    <View
                                        style={styles.space}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-christmas-star-50.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Remove Ads</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={styles.wallpaperLine}>
                                <TouchableOpacity>
                                    <View
                                        style={styles.wallpaper}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-wallpaper-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Wallpapers</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View
                                        style={styles.wallpaper}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-video-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Video Wallpapers</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View
                                        style={styles.wallpaper}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-audio-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Ringtones</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View
                                        style={styles.wallpaper}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-notification-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Notification Sounds</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={styles.line}>
                                <TouchableOpacity>
                                    <View
                                        style={styles.space}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-favorite-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>My Zedge</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={styles.line}>
                                <TouchableOpacity>
                                    <View
                                        style={styles.space}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-send-letter-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Upload Contents</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>

                                <TouchableOpacity>
                                    <View
                                        style={styles.space}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-settings-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Settings</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View
                                        style={styles.space}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-questions-48.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Help</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View
                                        style={styles.space}>
                                        <Image
                                            source={require('../utils/assets/icons/icons8-info-squared-64.png')}
                                            style={styles.icon}
                                        />
                                        <Text style={styles.text}>Information</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                        </SafeAreaView>
                    </LinearGradient>
                </ImageBackground>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icons: {
        height: 37,
        width: 37,
        marginTop: 10,
    },
    icon: {
        height: 25,
        width: 25,
        backgroundColor: 'white',
        borderRadius: 7,
    },
    wallpaper: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    line: {
        borderBottomWidth: 0.4,
        borderBottomColor: 'grey',
        borderTopWidth: 0.4,
        height: 60,
        borderTopColor: 'grey',
    },
    space: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topIcon: {
        backgroundColor: 'rgb(255,255,255)',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        marginHorizontal: 15,
    },
    log: {
        backgroundColor: 'rgb(255,255,255)',
        width: 120,
        height: 33,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    logText: {
        fontWeight: '400'
    },
    wallpaperLine: {
        borderBottomWidth: 0.4,
        borderBottomColor: 'grey',
        height: 180,
    },
    text: {
        width: '82%',
        color: 'rgb(255,255,255)',
        fontSize: 16,
        fontWeight: '500',
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.87,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
