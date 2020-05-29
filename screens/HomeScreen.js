import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Subscribe } from 'unstated';
import { Text, Button } from 'react-native-paper';
import StateContainer from '../container/StateContainer';
import BaseStyles from '../styles/BaseStyles';
import * as Animatable from 'react-native-animatable';

class HomeScreenContent extends React.Component {
    render() {
        let globalState = this.props.globalState
        return (
            <View style={BaseStyles.container}>
                <Animatable.Text 
                    animation="slideInDown" 
                    iterationCount="infinite"
                    direction="alternate" 
                    style={{fontSize: 25, marginBottom: 40}}
                >
                    プレイ人数は？
                </Animatable.Text>
                <View style={styles.buttons}>
                    <Button
                        mode="contained"
                        icon="minus"
                        compact={true}
                        onPress={() => {
                            globalState.reducePlayer()
                        }}
                        color="#24f2cc"
                        uppercase={false}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}
                    />
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', fontSize: 40, marginHorizontal: 32}}>{globalState.state.numPlayer}</Text>
                    </View>
                    <Button
                        mode="contained"
                        icon="plus"
                        compact={true}
                        onPress={() => {
                            globalState.addPlayer()
                        }}
                        color="#24f2cc"
                        uppercase={false}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}
                    />
                </View>
                <Button
                    mode="outlined"
                    onPress={() => {
                        globalState.changeDecciNum();
                        globalState.sortThemes();
                        this.props.navigation.navigate('Name');
                    }}
                    color="#24f2cc"
                    uppercase={false}
                    labelStyle={styles.buttonLabel}
                >
                    スタート
                </Button>                
            </View>
        );
    }
}


const HomeScreen = ({ navigation }) => {
    return (
        <Subscribe to={[StateContainer]}>
            {globalState => <HomeScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 40,
        justifyContent: 'center',
    },
    buttonLabel: {
        fontSize: 25,
    }
});