import React from "react";
import { View, Image, Text,StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons,SimpleLineIcons } from "@expo/vector-icons";

function Contact({name,phone,image}) {
  return (
    <View style={styles.maincont}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.infocont}>
        <Text style={styles.name}>{name}</Text>
        <Text>{phone}</Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="local-phone" size={30} color="#009cf5" />
      </View>
      <View>
        <MaterialCommunityIcons name="message-processing" size={30} color="#009cf5"  />
          </View>
          <View>
        <SimpleLineIcons name="options-vertical" size={30} color="#009cf5"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    maincont: {
        paddingTop: 40,
        flexDirection: 'row',
        marginHorizontal: 30,
      
    },
    image: {
        height: 50,
        width: 50,
        borderRadius:50,
    },
    name: {
        fontWeight: "bold",
        fontSize: 17,
    },
    infocont: {
        marginHorizontal: 15,
        flex:4,

    },
    icon: {
        flex:1
    }

})

export default Contact;
