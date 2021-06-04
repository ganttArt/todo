import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [displayCompleted, setDisplayCompleted] = useState(false);
  const [numItemsDisplayed, setNumItemsDisplayed] = useState(5);
  const [sortBy, setSortField] = useState('difficulty');

  const state = {
    displayCompleted,
    toggleDisplayCompleted: setDisplayCompleted,
    numItemsDisplayed,
    changeNumItemsDisplayed: setNumItemsDisplayed,
    sortBy,
    changeSortField: setSortField
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
