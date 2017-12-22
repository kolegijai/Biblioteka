import React, { Component } from 'react';
import { CheckBox, Button } from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  ListItem

} from 'react-native';

export default class PerskaitytosScreen extends Component<{}> {


    componentDidMount() {
        //this.displayData
      }

    constructor(props) {
        super(props);
        this.displayData = this.displayData.bind(this);
        this.state = {
          knygos: [],
            temp: '',
        };
      }

    static navigationOptions = {
        drawerLabel: 'Perskaitytos knygos',
    };



    render(){


        return(
          <ScrollView style={{ backgroundColor: '#aa4600' }}>
          <View style={{ flex: 1, alignItems: 'center', paddingTop: 100 }}>






                 <Button
                 onPress={this.displayData}
                    raised
                    icon={{name: 'plus', type: 'font-awesome'}}
                    title='Gauti visas knygas' />
            </View>
            </ScrollView>
        );
    }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#A4A4A4',

  },
  flexbox1: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 50,
    paddingLeft: 50,
    marginTop: 30,
    flexWrap: 'wrap'
    },

});
