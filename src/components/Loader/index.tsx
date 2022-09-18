import React from 'react';
import styled, { keyframes } from 'styled-components';
import { color } from '../../styles/color';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Spinned = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid ${color.primary};
    border-right: 2px solid ${color.primary};
    border-bottom: 2px solid ${color.primary};
    border-left: 3px solid ${color.secondary};
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

const Loader = (): JSX.Element => {
    return (
        <LoaderWrapper>
            <Spinned />
        </LoaderWrapper>
    );
};

export { Loader };
