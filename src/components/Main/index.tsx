import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { color } from '../../styles/color';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const MainWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.secondary};
    height: 100vh;
`;

const Main: FC<InferProps<typeof propTypes>> = ({ children }): JSX.Element => {
    return <MainWrapper>{children}</MainWrapper>;
};

Main.propTypes = propTypes;

export { Main };
