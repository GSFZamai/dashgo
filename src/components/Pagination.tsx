
import { Button } from "@chakra-ui/button";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";


export function Pagination() {
    return (
        <Stack
            direction="row"
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >

            <Box>
                <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack
                spacing="2"
                direction="row"
            >

                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="blue"
                    disabled
                    _disabled={{
                        bg: 'blue.500',
                        cursos: 'default'
                    }}
                >
                    1
                </Button>

                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="blue"
                    disabled
                    _disabled={{
                        bg: 'blue.500',
                        cursos: 'default'
                    }}
                >
                    2
                </Button>

                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="blue"
                    disabled
                    _disabled={{
                        bg: 'blue.500',
                        cursos: 'default'
                    }}
                >
                    3
                </Button>

                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="blue"
                    disabled
                    _disabled={{
                        bg: 'blue.500',
                        cursos: 'default'
                    }}
                >
                    4
                </Button>

            </Stack>
        </Stack>
    )
}