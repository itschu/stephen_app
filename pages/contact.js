import Footer from "../components/footer";
import Hero from "../components/hero";
import Nav from "../components/nav";
import { Contact } from "../context/contact";
import { Menu } from "../context/menu";
import ContactForm from "../components/contact-form";

const ContactUs = () => {
	return (
		<Contact>
			<div className={`font-body text-gray-700 overflow-hidden `}>
				<Menu>
					<Nav />
					<Hero full={false} />
					<ContactForm />
					<Footer margin={true} />
				</Menu>
			</div>
		</Contact>
	);
};

export default ContactUs;
