import {
	Box,
	Flex,
	Image,
	Text,
	Spacer,
	Center,
	Heading,
	Input,
	Button,
} from '@chakra-ui/react'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const loginHandler = async () => {
		console.log(email)
		console.log(password)
		const res = await axios.post(
			'https://ideas-iq.herokuapp.com/api/auth/login',
			{
				email,
				password,
			}
		)
		console.log(res.data)
	}

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
				<Input
					placeholder={'Email'}
					onInput={(e: any) => setEmail(e.target.value)}
				/>
				<Input
					placeholder={'Password'}
					onInput={(e: any) => setPassword(e.target.value)}
				/>
				<Button onClick={loginHandler}>Login</Button>
			</Box>
		</>
	)
}

export default Home
