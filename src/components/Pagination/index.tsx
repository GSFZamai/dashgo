import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { PageButton } from "./Button";

export function Pagination() {
    return (
        <Stack
            direction={["column", "row"]}
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
                <PageButton page={1} isCurrent={true} /> 
                <PageButton page={2} /> 
                <PageButton page={3} /> 
                <PageButton page={4} /> 
                <PageButton page={5} /> 
                <PageButton page={6} /> 

            </Stack>
        </Stack>
    )
}