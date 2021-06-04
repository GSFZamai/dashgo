import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useMutation } from 'react-query';
import { useRouter } from 'next/dist/client/router';


import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header/';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';

type CreateUserFormData = {
    name: string
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Campo nome é obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha é obrigatória").min(6, "No mínimo 6 caracteres"),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], "A senha de confirmação deve ser igual à senha")
  })

export default function CreateUser() {
    const router = useRouter()
    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date()
            }
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values)
        router.push('/users')
    }

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p="8"
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8"> 
                        <SimpleGrid minChildWidth="240px" spacing ="8" w="100%">
                            <Input
                                error={formState.errors.name} 
                                name="name" 
                                label="Nome Completo" 
                                {...register('name')}
                            />
                            <Input 
                                error={formState.errors.email}
                                name="email" 
                                type="email" 
                                label="E-mail" 
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing ="8" w="100%">
                            <Input 
                                error={formState.errors.password}
                                name="password" 
                                type="password" 
                                label="Senha" 
                                {...register('password')}
                            />
                            <Input 
                                error={formState.errors.password_confirmation}
                                name="password_confirmation" 
                                type="password" 
                                label="Confirmação de senha" 
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                                <Button 
                                    type="submit" 
                                    colorScheme="blue"
                                    isLoading={formState.isSubmitting}
                                >
                                    Salvar
                                </Button>
                        </HStack>
                    </Flex>
                </Box>

            </Flex>
        </Box>
    )
}