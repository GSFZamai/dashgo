import { FormLabel, Input as ChakraInput, FormControl, InputProps as ChakraInputProps, InputGroup, FormErrorMessage } from '@chakra-ui/react';
import { forwardRef, ReactElement, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    children?: ReactElement;
    error?: FieldError;
}



const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({error = null ,name, label, children, ...rest}: InputProps, ref) => {
    return (
      
      <InputGroup>
        <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

          {children}
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
              ref={ref}
              {...rest}
              />

              {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
              )}
        </FormControl>
      </InputGroup>

    )

}

export const Input = forwardRef(InputBase);