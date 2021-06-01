import { Flex, FormLabel, Input as ChakraInput, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    children?: ReactElement;
}

export function Input({name, label, children, ...rest}: InputProps) {
    return (

        <FormControl>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <Flex 
          as="label"
          flex="1"
          maxWidth={400}
          color="gray.200"
          bg="gray.800"
          borderRadius="full"
        >
          <ChakraInput
              id={name}
              name={name}
              focusBorderColor="blue.400"
                bgColor= "gray.900"
                variant="filled"
                _hover={{
                  bgColor: "gray.900"
                }}
                size="lg"
              {...rest}
          />
          {children}
        </Flex>

    </FormControl>

    )

}