import { useState, createContext } from "react";

export const MenuContext = createContext();

// eslint-disable-next-line react/prop-types
export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isOpen,
        toggleMenu: handleOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
