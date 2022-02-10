import {
	Box,
	Flex,
	Image,
	Text,
	Spacer,
	Center,
	Heading,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Ideas IQ</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Box>
				<Flex>
					<Image src="/logo/Logo@svg.svg" alt="Logo" width={100} />
					<Spacer />
					<Box w={400}>
						<Flex justifyContent="space-between">
							<Text>Home</Text>
							<Text>Home</Text>
							<Text>Home</Text>
						</Flex>
					</Box>
				</Flex>
				<Center>
					<Heading>Hello World</Heading>
				</Center>
			</Box>
		</>
	)
}

export default Home
