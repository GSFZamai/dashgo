import { Box, Stack, Divider, Link, Text, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';
   
interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps) {
    return(
        <Box>
            <Text textAlign="center" mb="2" fontWeight="bold" color="gray.400" fontSize="small">{title.toUpperCase()}</Text>
            <Divider borderColor="blue.700" />
            <Stack spacing="4" mt="8" align="strech">
                {children}
            </Stack>
        </Box>
    )
}