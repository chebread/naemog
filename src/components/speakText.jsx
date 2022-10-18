const speakText = ({ text }) => {
  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.rate = 0.8; // 속도: 0.1 ~ 10
  speechMsg.pitch = 1; // 음높이: 0 ~ 2
  speechMsg.lang = 'ko-KR';
  speechMsg.text = text;
  window.speechSynthesis.speak(speechMsg);
};

export default speakText;
