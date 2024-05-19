import React, {createContext,useContext} from 'react';

const LinkContext = createContext({
    link: '',
    setLink: (newLink) => {
        this.link = newLink;
    }
})

export {LinkContext}