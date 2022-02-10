import Document, { Html, Main, Head, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
					<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
