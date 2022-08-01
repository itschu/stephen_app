import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

const Menu = ({ children }) => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<MenuContext.Provider value={{ showMenu, setShowMenu }}>
			{children}
		</MenuContext.Provider>
	);
};

const useMenu = () => useContext(MenuContext);

export { Menu, useMenu };
