import React, { useEffect, useState } from 'react';
import {
  Container,
  Input,
  Box,
  Button,
  Center,
  Flex,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { loginRoute } from '../../utils/APIRoutes';
import { toastOptions } from '../../utils/toastOptions';

export default function Login() {
  const [values, setValues] = useState({
    userName: '',
    password: '',
  });
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('chat-app-user')) {
      router.replace('/');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userName, password } = values;

    try {
      const res = await axios.post(loginRoute, {
        userName,
        password,
      });
      localStorage.setItem('chat-app-user', JSON.stringify(res.data.user));
      router.replace('/');
    } catch (error) {
      toast.error('Error occured when trying to log in', toastOptions);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Box pt="20vh" height="100vh">
      <Container p={4}>
        <Box bg="white" px={16} py={8} rounded="md" boxShadow="2xl">
          <form onSubmit={handleSubmit}>
            <Flex justifyContent="center" alignItems="center">
              <Image
                src="/assets/logo-no-background.svg"
                alt="picture displaying logo"
                width={120}
                height={100}
              />
            </Flex>
            <VStack spacing={4}>
              <Input
                required
                placeholder="Username"
                name="userName"
                onChange={handleChange}
              />
              <Input
                required
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <Button width="100%" type="submit" colorScheme="teal">Login</Button>
            </VStack>
          </form>
          <Center mt={3}>
            <span>
              don&apos;t have an account ?
              {' '}
              <Link style={{ color: 'blue' }} href="/register">Sign-Up</Link>
            </span>
          </Center>
        </Box>
      </Container>
      <ToastContainer />
    </Box>
  );
}
