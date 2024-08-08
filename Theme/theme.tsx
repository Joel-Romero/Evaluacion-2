import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
      globalMargin:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#003B6F',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      imagen:{
            width:150,
            height:150,
            borderRadius:10,
            textAlign: 'center',
        },
        button: {
          backgroundColor: 'white',
          padding: 10,
          margin: 10,
          alignItems: 'center',
      },
      buttonText: {
          color: 'black',
          fontSize: 20,
      },
      input: {
        height: 50,
        paddingHorizontal: 120,
        marginBottom: 30,
        width: '70%',
        backgroundColor: 'white',
        
    },
    result: {
      textAlign: 'center',
      marginVertical: 1,
  }
      });


