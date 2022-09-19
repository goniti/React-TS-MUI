import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    width: 30vw;
    flex-direction: column;
`;

const Container: FC<InferProps<typeof propTypes>> = ({ children }): JSX.Element => {
    return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = propTypes;

export { Container };
