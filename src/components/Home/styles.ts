import styled from 'styled-components/native';

interface Props {
  isShow: boolean
}

export const Container = styled.View`
  flex: .8;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 50px;
`;

export const Button = styled.TouchableOpacity<Props>`
  display: ${(props: Props) => props.isShow? 'flex' : 'none'};
  padding: 10px 10px;
  border-radius: 8px;
  background-color: #9F34F0;
`;

export const TextForButton = styled.Text`
  font-size: 25px;
  color: white;
`;