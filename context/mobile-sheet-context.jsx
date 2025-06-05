
import React, { createContext, useContext, useState } from 'react';

const MobileSheetContext = createContext();

export const MobileSheetProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => setIsOpen(!isOpen);
  const closeSheet = () => setIsOpen(false);
  const openSheet = () => setIsOpen(true);

  return (
    <MobileSheetContext.Provider value={{ isOpen, toggleSheet, closeSheet, openSheet }}>
      {children}
    </MobileSheetContext.Provider>
  );
};

export const useMobileSheet = () => {
  const context = useContext(MobileSheetContext);
  if (!context) {
    throw new Error('useMobileSheet must be used within a MobileSheetProvider');
  }
  return context;
};
