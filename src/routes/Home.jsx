import speakText from 'components/speakText';
import { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
  const [text, setText] = useState('');

  const onChangeText = e => {
    const {
      target: { value },
    } = e;
    setText(value);
  };
  const onClickSpeak = () => {
    speakText({ text });
  };
  return (
    <FullScreen>
      <div>
        {/* <div>
          <textarea onChange={onChangeText}></textarea>
        </div> */}
        <div>
          <Button onClick={onClickSpeak}>Speak</Button>
        </div>
        <div>
          <input onChange={onChangeText} type="text" />
        </div>
      </div>
    </FullScreen>
  );
};
const FullScreen = styled.div`
  height: 100%;
  width: 100%;
`;
const Button = styled.button``;
export default Home;
