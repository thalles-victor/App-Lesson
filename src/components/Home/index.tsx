import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { Container, Title, Button, TextForButton } from './styles';

const Home: React.FC = () => {
  const [skullEmote, setSkullEmote] = useState(false);
  const [isShowState, setIsShowState] = useState(true);

  const goodMessage = 'Você não sabe nada de marketing!!! 🤨😨';
  const badMessage = 'Você teve sorte que não foi um ransomware, mas vamos usalos para vender na deep web☠️';

  const delay = () => {
    setTimeout( ()=> {
      setSkullEmote(true)
      setIsShowState(false)
    }, 3000)
    
  }

  return(
    <Container>
      <Title>
        {
          skullEmote? badMessage : goodMessage
        }
      </Title>
      <Button
        isShow={isShowState}
        onPressOut={async ()=> {
          alert('Vendo o seus dados');
          setTimeout(() => alert('Acabamos de pegar os seus dados'), 2000);
          delay();
        }}
      >
        <TextForButton> Clike para saber o porque 🤓!!! </TextForButton>
      </Button>
    </Container>
  );
}

export default Home;