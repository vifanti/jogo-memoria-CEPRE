import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const Game: React.FC = () => {
  console.log('teste');

  return (
    <Container>
      <Text>Pagina inicial do game</Text>
    </Container>
  );
};

export default Game;
