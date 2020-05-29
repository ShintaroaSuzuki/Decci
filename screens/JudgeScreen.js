import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Subscribe } from 'unstated';
import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import StateContainer from '../container/StateContainer';
import BaseStyles from '../styles/BaseStyles';

class JudgeScreenContent extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            judgeName: ''
        }
    }

    render() {
        let globalState = this.props.globalState
        return (
            <View style={BaseStyles.container}>
                <Text style={{fontSize: 22, marginBottom: 35}}>話をデッチあげていたのは誰？</Text>
                <View style={{alignItems: "center"}}>
                    <RNPickerSelect
                        style={pickerStyle}
                        onValueChange={(value) => this.setState({judgeName: value})}
                        items={globalState.state.names.map((name) => {return({label: name, value: name})})}
                        placeholder={{ label: '選択してください', value: '' }}
                    />
                </View>
                <View style={{width: 200, borderTopWidth: 2, borderTopColor: "#555", alignItems: "center"}}>
                <Button
                    mode="outlined"
                    onPress={() => {
                        if (this.state.judgeName != '') {
                            this.props.navigation.navigate('Result', {judgeName: this.state.judgeName});
                        } else {
                            return
                        }
                    }}
                    color="#24f2cc"
                    compact={true}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}                               
                >
                    決定
                </Button>
                </View>
            </View>
        );
    }
}


const JudgeScreen = ({ navigation }) => {
    return (
        <Subscribe to={[StateContainer]}>
            {globalState => <JudgeScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
}

export default JudgeScreen;

const styles = StyleSheet.create({
    button: {
        width: 80,
        marginTop: 40,
    },
    buttonLabel: {
        fontSize: 25,
    },
});

const pickerStyle = {
	inputIOS: {
        fontSize: 25,
        marginBottom: 3,
	},
	inputAndroid: {
        fontSize: 25,
        marginBottom: 3,
	},
};