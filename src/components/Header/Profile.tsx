import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return(
        <Flex align="center">
           { showProfileData && (
                        <Box mr="4">
                        <Text>Gabriel Zamai</Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >
                            gabriel.zamai@bkbank.com.br
                        </Text>
                    </Box>
           )}

            <Avatar size="md" name="Gabriel Zamai" src="#" />
    </Flex>
    )
}