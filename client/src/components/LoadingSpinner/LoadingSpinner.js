import React from 'react';
import { Spinner, LoadingText } from './LoadingSpinner.elements';

const LoadingSpinner = () => {
    return (
        <>
            <Spinner></Spinner>
            <LoadingText>Please Wait...</LoadingText>
        </>
    )
}

export default LoadingSpinner
