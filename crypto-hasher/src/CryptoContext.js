import React, { useContext } from 'react';
import { createContext } from 'react'
import  axios  from 'axios';
import { formControlClasses } from '@mui/material';



const Crypto = createContext();

const CryptoContext = ({children})=>{
    return(
        <Crypto.Provider>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext;

