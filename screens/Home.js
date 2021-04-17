import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert} from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home = ({navigation}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () =>{
         //This line is always different when i run ngrok http <port>
         fetch("http://df6a2757234e.ngrok.io/")
         .then(res=>res.json())
         .then(results=>{
             setData(results)
             setLoading(false)
         }).catch(err=>{
            Alert.alert("Something went wrong")
         })
    }

    useEffect(()=>{
        //This line is always different when i run ngrok http <port>
        fetch("http://df6a2757234e.ngrok.io/")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
            setLoading(false)
        })
    }, [])

    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard} onPress={()=>navigation.navigate("Profile",{item})}>
                <View style={styles.cardView}> 
                    <Image 
                        style={{width:60, height:60, borderRadius:30}}
                        source={{uri:item.picture}}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>
                    
                </View>
                
            </Card>
        )
    });

    return(
        <View style={{flex:1}}>
            
            <FlatList 
            data={data} 
            renderItem={({item})=>{
                return renderList(item)
            }} 
            keyExtractor={item=>item._id}
            onRefresh={()=>fetchData()}
            refreshing={loading}/>
            <FAB onPress={()=>navigation.navigate("Create")}
                style={styles.fab}
                small={false}
                theme={{colors:{accent:"#006aff"}}}
                icon="plus"
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    mycard:{
        margin: 5
    },
    cardView:{
        flexDirection:"row",
        padding: 6
    },
    text:{
        fontSize:20,
        marginLeft:10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home;