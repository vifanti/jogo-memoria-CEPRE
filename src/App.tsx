import React from 'react';
import { View, StatusBar, Text } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar hidden />
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>Jogo da memória</Text>
    </View>
  </>
);

export default App;
