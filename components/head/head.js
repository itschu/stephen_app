import Head from "next/head";

const HtmlHead = ({ currentPage, order = "normal" }) => {
	return (
		<Head>
			<title>{`${currentPage} | Global Electrical Tech`}</title>
			<meta
				name="description"
				content="We are skilled &amp; professional technician ready to render our services in any part of Nigeria, carry out Ac installatin and maintenance with electrical wiring and maintenance"
			/>
			<link rel="icon" href="/logo.png" type="image/x-icon" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta
				name="keyword"
				content="electrical works, wiring, air conditioner maintenance, air conditioner repairs, ac maintenance, ac repairs, ac installation, air conditioner installation, home wiring, office wiring, electrical maintenance"
			/>
		</Head>
	);
};

export default HtmlHead;
