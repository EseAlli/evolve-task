import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';

const TransactionContext = createContext();

export const useTransactionContext = () => {
    return useContext(TransactionContext);
};

export const TransactionProvider = ({children}) => {
    const [debitMandateFields, setDebitMandateFields] = useState("");
    
    // create profile
    const createNewProfile = async (data) => {
        await http.post("/profile", data);
    };

    // create new bank
    const createNewBank = async (data) => {
        await http.post("/bank", data);
    };

    const activateMandate = async (data) => {
        await http.post("/activatemandate", data);
    };


    useEffect(()=>{
        const readAllMandates = async () => {
            const response = await http.get("/debitmandate");
            const responseArr = Object.values(response.data);
            setDebitMandateFields(responseArr);
        };
        return readAllMandates;
    }, []);

    const value = {
        createNewProfile,
        createNewBank,
        debitMandateFields,
        activateMandate,
    };

    // context
    return(
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    )
}; 