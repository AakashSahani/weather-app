import Head from 'next/head';

function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Header /> */}
			<main className="flex flex-col text-white">{children}</main>
		</div>
	);
}

Layout.defaultProps = {
	title: 'Weather',
	keywords: 'weather',
	description: 'Easiest way to check weather',
};

export default Layout;
