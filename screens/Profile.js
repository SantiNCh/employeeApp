import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = ()=>{

    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:12345")
        }else{
            Linking.openURL("telprompt:12345")
        }
    }

    return(
        <View style={styles.root}>
            <LinearGradient 
                colors={["#0a70ff", "#6bc1ff"]}
                style={{height:"20%"}}
            />
            
            <View style={{alignItems:"center"}}>
                <Image 
                    style={{width:140, height:140, borderRadius:70, marginTop: -50}}
                    source={{uri:"https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80"}}
                />
            </View>

            <View style={{alignItems:"center", margin:15}}>
                <Title>Exosis</Title>
                <Text style={{fontSize: 18}}>web developer</Text>
            </View>

            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:abc@abc.com")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.myText}>abc@abc.com</Text>
                </View>
            </Card>

            <Card style={styles.mycard} onPress={()=>{
                openDial()
            }}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.myText}>12343242</Text>
                </View>
            </Card>

            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.myText}>122420 ARS</Text>
                </View>
            </Card>

            <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>
                <Button icon="account-edit" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
                    Edit
                </Button>
                <Button icon="delete" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
                    Fire employee
                </Button>
            </View>

        </View>
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
    root:{
        flex: 1
    },
    mycard:{
        margin: 3
    },
    cardContent:{
        flexDirection: "row",
        padding: 8
    },
    myText:{
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5
    }

})
export default Profile;
