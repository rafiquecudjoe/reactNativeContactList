import React from 'react'
import { View, FlatList, Text } from 'react-native'
import Contact from "./components/contact"

function ContactScreen() {

    const contacts = [
        { name: 'Sam Bob', number: "054-441-3229", image: require("./assets/profile1.jpg") },
        { name: 'John Mike', number: "051-441-3229",image:require("./assets/profile2.jpg") },
        { name: 'Eunice Anderson', number: "045-441-3229",image:require("./assets/profile3.jpg")},
        { name: 'Joseph Soup', number: "073-441-3229",image:require("./assets/profile4.jpg") },
        { name: 'Mom', number: "089-441-3229",image:require("./assets/profile5.jpg") },
        { name: 'Daddy', number: "076-441-3229",image:require("./assets/profile6.jpg") },
        { name: 'Sam Bob', number: "056-441-3229",image:require("./assets/profile7.jpg") },
        { name: 'John Mike', number: "053-441-3229",image:require("./assets/profile8.jpg") },
        { name: 'Eunice Anderson', number: "043-441-3229",image:require("./assets/profile9.jpg") },
        { name: 'Joseph Soup', number: "072-441-3229",image:require("./assets/profile10.jpg") },
        { name: 'Mom', number: "081-441-3229",image:require("./assets/profile11.jpg") },
       
    ]
    return (
        <View style={{paddingTop:30}}>
            <FlatList
                data={contacts}
                renderItem={({ item }) => { return <Contact name={item.name} phone={item.number} image={item.image }/>}}
                keyExtractor={(item)=>item.Number}
            
            
            
            />

            
            
        </View>
    )
}

export default ContactScreen
