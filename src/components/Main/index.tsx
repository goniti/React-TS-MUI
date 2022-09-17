import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const MainWrapper = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const Main: FC<InferProps<typeof propTypes>> = ({ children }): JSX.Element => {
    return <MainWrapper>{children}</MainWrapper>;
};

Main.propTypes = propTypes;

export { Main };
