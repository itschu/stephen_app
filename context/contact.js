import { createContext, useContext, useState } from "react";

const ContactProvider = createContext();

const Contact = ({ children }) => {
	const [showContext, setShowContext] = useState(false);
	return (
		<ContactProvider.Provider value={{ showContext, setShowContext }}>
			{children}
		</ContactProvider.Provider>
	);
};

const useContact = () => useContext(ContactProvider);

export { Contact, useContact };
