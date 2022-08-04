import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import WhyWork from "../components/why-work";
import Welcome from "../components/welcome";
import Works from "../components/works";
import Service from "../components/services";
import { Contact } from "../context/contact";
import ContactModal from "../components/contact";
import Nav from "../components/nav";
import { Menu } from "../context/menu";

const Index = () => {
	return (
		<Contact>
			<div className={`font-body text-gray-700 overflow-hidden `}>
				<Menu>
					<Nav />
					<Hero />
					<Welcome />
					<Service />
					<WhyWork />
					<About />
					<Works />
					<Footer />
					<ContactModal />
				</Menu>
			</div>
		</Contact>
	);
};

export default Index;
