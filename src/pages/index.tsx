import { Flex, Button, Stack, Icon, InputGroup, InputRightElement, Input as ChakraInput, StatLabel, FormLabel } from '@chakra-ui/react';
import { Input } from '../components/Form/Input'
import { CgEye } from 'react-icons/cg'
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha Obrigatória")
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
  
  }

  const [exibeSenha, setExibeSenha] = useState(false);

  const handleExibeSenha = () => {
      if(!exibeSenha) {
        setExibeSenha(true)
      }else {
        setExibeSenha(false)
      }
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

            <Input
              error={formState.errors.email}
              name="email" 
              type="email"               
              placeholder="seu@email.com"
              label="E-mail"
              {...register('email', {required: 'E-mail necessário'})}
            />
            
            <Flex 
              as="label"
            >
            
              <Input
                error={formState.errors.password}
                name="password" 
                type={exibeSenha ? "text" : "password"} 
                placeholder={exibeSenha ? "Digite sua Senha" : "*************" }
                label="Senha"
                autoComplete="off"
                {...register('password', {required: 'Senha Inválida'})}
              >
                <InputRightElement
                children={<Icon onClick={handleExibeSenha} as={CgEye} />  }
              />
              </Input>
                           

            </Flex>


            

          <Button 
            type="submit" 
            mt="6" 
            bgColor="blue.700"
            color="gray.900"
            _hover={{
              bgColor: "gray.900",
              color: 'blue.700'
            }}
          >
            Entrar
          </Button>

        </Stack>
      </Flex>
    </Flex>
  )
}
