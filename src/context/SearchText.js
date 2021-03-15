import React , {createContex, createContext, useState, useContext} from 'react';

const CountContext = createContext();

export default function CountProvider({children}){
    const [searchText, setSearchText] = useState('');
    const [superheroData, setSuperheroData] = useState([]);

    return(
        <CountContext.Provider 
        value={{
            searchText, 
            setSearchText, 
            superheroData, 
            setSuperheroData
        }}>
        {children}
        </CountContext.Provider>
    )
}

export function useCount(){
   const context =  useContext(CountContext);
   const {searchText, setSearchText, superheroData, setSuperheroData} = context;

   return{searchText, setSearchText, superheroData, setSuperheroData}
}