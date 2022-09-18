import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from 'styled-components';
import { color } from '../../styles/color';

const ErrorWrapper = styled.div`
    color: ${color.primary};
    font-weight: 700;
    letter-spacing: .1em;
`;

const propTypes = {
    message: PropTypes.string.isRequired,
};

const Error: FC<InferProps<typeof propTypes>> = ({ message }): JSX.Element => {
    return (
        <ErrorWrapper>
            <p>{message}</p>
        </ErrorWrapper>
    );
};

Error.propTypes = propTypes;

export { Error };
