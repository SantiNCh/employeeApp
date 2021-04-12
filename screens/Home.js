import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home = (props) => {
    const data = [
        {id:1, name:"Santi", position:"web dev"},
        {id:2, name:"Santi2", position:"web dev2"},
        {id:3, name:"Santi3", position:"web dev3"},
        {id:4, name:"Santi4", position:"web dev4"},
    ];

    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard}>
                <View style={styles.cardView}> 
                    <Image 
                        style={{width:60, height:60, borderRadius:30}}
                        source={{uri:"https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80"}}
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
                keyExtractor={item=>`${item.id}`}
            
            />
            <FAB onPress={()=>props.navigation.navigate("Create")}
                style={styles.fab}
                small={false}
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