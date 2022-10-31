import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class App extends React.Component {
  render() {
    let nama = 'Ade'

    nama = nama + ' Rahmat Setiawan'

    let umur = 2022 - 2003

    return (
      <View
        style = {{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Text
          style = {{
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          {nama}
        </Text>

        <TouchableOpacity
          onPress = {() => {
            alert(umur)
          }}
          style = {{
            backgroundColor: 'orange',
            marginTop: 10,
            padding: 10
          }}
        >
          <Text
            style = {{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            Cek Umur
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}