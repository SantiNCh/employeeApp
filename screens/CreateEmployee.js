import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateEmployee = () =>{

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [picture, setPicture] = useState("");
    const [modal, setModal] = useState(false);

    return (
        <View style={styles.root}>
            <TextInput
                label="Name"
                style={styles.inputStyle}
                value={name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />

            <TextInput
                label="Email"
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Phone"
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />

            <TextInput
                label="Salary"
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />
               
            <Button icon="upload" mode="contained" onPress={() => setModal(true)}>
                Press me
            </Button> 

            <Modal
            animationType="slide"
            transparent={false}
            visible={modal}
            onRequestClose={()=>{
                setModal(false)
            }}
            >
                <View>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                            Cancel
                        </Button>
                        <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                            Cancel
                        </Button>
                    </View>
                    <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                        Cancel
                    </Button> 
                </View>
            </Modal>              
        </View>
    );
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
    inputStyle:{
        margin: 5
    }
})

export default CreateEmployee;