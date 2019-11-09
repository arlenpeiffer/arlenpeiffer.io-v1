import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  font-family: monospace, monospace;
  font-size: 0.85rem;
  height: 100vh;
  justify-content: center;
  line-height: 1.42;
  width: 100vw;
`;

const Box = styled.div`
  background: whitesmoke;
  border-radius: 3px;
  margin-bottom: 1.45rem;
  opacity: 0.65;
  padding: 1.45rem;
  transition: opacity 1.2s;
  :hover {
    opacity: 0.95;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: purple;
  margin: 0 10px;
  transition: color 0.6s;
  :hover {
    color: red;
    opacity: 0.8;
  }
`;

const ComingSoon = () => (
  <Wrapper>
    <Box>👋 Hi I'm Arlen.</Box>
    <Box>My site will go here.</Box>
    <Box>
      <a
        href="https://twitter.com/arlenpeiffer"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon={faTwitter} size="lg" />
      </a>
      <a
        href="https://github.com/arlenpeiffer"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon={faGithub} size="lg" />
      </a>
    </Box>
  </Wrapper>
);

export default ComingSoon;

ReactDOM.render(<ComingSoon />, document.getElementById('root'));
