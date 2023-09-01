import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet, TextInput, Button, FlatList } from 'react-native';

const lab31 = () =>{
  const [text, setText] = useState("");
  const [students, setStudents] = useState([]);

    const handleAddData = () => {
      if (text.trim() !== '') {
        setStudents([...students, text]);
        setText(''); 
      }
    };


  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
      }}><Text style={{ fontSize: 18 }}>สมุดบันทึก</Text>
        <TextInput
          placeholder="ชื่อ"
          style={styles.input}
          value={text}
          onChangeText={(input) => { setText(input); }}
        />
        <Button title="เพิ่มข้อมูล" onPress={handleAddData} />
        </View>
      <View ><FlatList
        data={students}
        renderItem={({ item }) => (<Text style={styles.child}>{item}</Text>)}

      /></View>

      <ScrollView contentContainerStyle={styles.scrollview}>

      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "stretch",

  },
  scrollview: {
    padding: 4
  },
  child: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: 5,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    textAlign: 'center'
  }
});


export default lab31;