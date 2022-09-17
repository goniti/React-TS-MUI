import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    border-radius: 1px;
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
