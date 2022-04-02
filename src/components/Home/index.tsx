import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  Button,
  TextForButton
} from './styles';

const Home: React.FC = () => {
  const [skullEmote, setSkullEmote] = useState(false);
  const [isShowState, setIsShowState] = useState(true);
  /*Se quise simplificar
  const isShowState = !skullEmote
  */

  const goodMessage = 'Você não sabe nada de marketing!!! 🤨😨';
  const badMessage = 'Você teve sorte que não foi um ransomware, mas vamos usalos para vender na deep web☠️';

  const changeStateWithDelay = () => {
    setTimeout( 
      ()=> {
        setSkullEmote(true)
        setIsShowState(false)
      },
      3000 // 3s
    )
    
  };

  return(
    <Container>

      <Title> { skullEmote? badMessage : goodMessage } </Title>
      <Button
        isShow={isShowState}
        onPressOut={
          ()=> {
            alert('Vendo o seus dados');
            setTimeout(() => alert('Acabamos de pegar os seus dados'), 2000); //2s
            changeStateWithDelay();
        }}
      >
        <TextForButton> Clike para saber o porque 🤓!!! </TextForButton>
      </Button>

    </Container>
  );
}

export default Home;