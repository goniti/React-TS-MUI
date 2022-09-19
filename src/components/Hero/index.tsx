import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const HeroStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

const Hero: FC<InferProps<typeof propTypes>> = ({ children }): JSX.Element => {
    return <HeroStyled>{children}</HeroStyled>;
};

Hero.propTypes = propTypes;

export { Hero };
