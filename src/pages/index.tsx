import { Flex, Button, Stack, Icon } from '@chakra-ui/react';
import { Input } from '../components/Form/Input'
import { CgEye } from 'react-icons/cg'
import { useState } from 'react';

export default function SignIn() {

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
      >
        <Stack spacing="4">

            <Input
              name="email" 
              type="email"               
              placeholder="seu@email.com"
              label="E-mail"
            />
            
            <Flex 
              as="label"
            >
            
            <Input 
              name="password" 
              type={exibeSenha ? "text" : "password"} 
              placeholder={exibeSenha ? "Digite sua Senha" : "*************" }
              label="Senha"
            >
              <Icon onClick={handleExibeSenha} as={CgEye} /> 
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
