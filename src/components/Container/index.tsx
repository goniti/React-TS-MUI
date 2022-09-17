import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container: FC<InferProps<typeof propTypes>> = ({ children }): JSX.Element => {
    return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = propTypes;

export { Container };
