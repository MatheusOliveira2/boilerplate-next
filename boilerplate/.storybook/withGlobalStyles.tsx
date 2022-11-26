import React from 'react';
import GlobalStyles from '../src/styles/global';

const withGlobalStyles = storyFn => (
    <>
        <GlobalStyles />
        {storyFn()}
    </>
)


export default withGlobalStyles;