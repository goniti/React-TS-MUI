import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    border-radius: 1px;
`;

const Error = (): JSX.Element => {
    return (
        <ErrorWrapper>
            <p>There is an error.</p>
        </ErrorWrapper>
    );
};

export { Error };
