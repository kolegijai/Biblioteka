import React, { Component } from 'react';
import { CheckBox, Button, SearchBar } from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
 // AsyncStorage
} from 'react-native';

export default class HomeScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
            pavadinimas: 'Knygos pavadinimas',
            autorius: '',
            metai: '',
            puslapiai: '',
            checked: false,
            blank: '',
            temp: '',
        };
      }

    static navigationOptions = {
        drawerLabel: 'Ideti knyga',
    };
    render(){
        return(
            <ScrollView style={{ backgroundColor: '#aa4600' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>

                <Text style={{color:'#fffffa', fontSize:20, fontWeight: 'bold',paddingTop: 70}}>
                 Prideti knygą
                </Text>
                <Text style={{color:'#fffffa', fontSize:14, fontWeight: 'bold',paddingTop: 20}}>
                 Knygos pavadinimas
                </Text>
                <TextInput
                 editable = {true}
                 width = {500}
                 style = {styles.textfield}
                 onChangeText={(pavadinimas) => this.setState({pavadinimas})}
                 />

                <Text style={{color:'#ffffff', fontSize:14, fontWeight: 'bold',paddingTop: 10}}>
                 Knygos autorius
                </Text>
                <TextInput
                 editable = {true}
                 maxLength = {20}
                 width = {300}
                 style = {styles.textfield}
                 onChangeText={(autorius) => this.setState({autorius})}
                 />



                 <Button
                 onPress={this.saveData}
                    raised
                    color = 'black'
                    backgroundColor = 'brown'
                    title='Prideti' />



            </View>
            </ScrollView>
        );
    }

    pressCheckBox = () => {
        this.setState((state) => ({
            checked: !state.checked
        }));
    }

    saveData = () =>{
      const { navigate } = this.props.navigation;
        let knygosInfo = {
            pavadinimas: this.state.pavadinimas,
            skaityta: this.state.checked
        }
       // let knygosPav = this.state.pavadinimas;
        var stringed = JSON.stringify(knygosInfo);
        AsyncStorage.setItem('knyga2', stringed);
        navigate('PerskaitytosScreen');
    }

    displayData = async () => {
        try{
            let info = await AsyncStorage.getItem('knyga');
            let infoIskaidyta = JSON.parse(info);
            alert(infoIskaidyta.pavadinimas + '' + infoIskaidyta.skaityta);
        }
        catch(err){
            alert(err);
        }
    }

}


    const styles = StyleSheet.create({
      textfield: {
        color: '#bfffff',
        fontSize:22,
        fontWeight: 'bold',
        paddingTop: 10},

      }
    );
