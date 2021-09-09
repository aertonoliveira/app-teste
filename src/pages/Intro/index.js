import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Slider,
  Content,
  Image,
  Title,
  Description,
  DoneButton,
} from './styles';

const slides = [
  {
    key: 'one',
    title: 'Lembrar',
    text: 'ashdjashdkjhaskjdhaksjhdjkashdkjahsjdhas',
    image:
      'https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
  },
  {
    key: 'two',
    title: 'de',
    text: 'ashdjashdkjhaskjdhaksjhdjkashdkjahsjdhas',
    image:
      'https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
  },
  {
    key: 'three',
    title: 'pagar os devs',
    text: 'ashdjashdkjhaskjdhaksjhdjkashdkjahsjdhasasdkjaskjdkasjdjaskdjaksjdk',
    image:
      'https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
  },
];

export default function Intro() {
  const navigation = useNavigation();

  const renderItem = ({ item: { title, image, text } }) => {
    return (
      <Content>
        <Image source={{ uri: image }} />
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Content>
    );
  };

  return (
    <Container>
      <Slider
        renderItem={renderItem}
        data={slides}
        showNextButton={false}
        onDone={() => navigation.navigate('SingIn')}
        renderDoneButton={() => <DoneButton>Continuar</DoneButton>}
      />
    </Container>
  );
}
