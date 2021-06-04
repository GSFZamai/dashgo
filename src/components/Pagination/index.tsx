import { Box, Stack, Text} from "@chakra-ui/layout";
import { PageButton } from "./Button";

interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to- from)]
        .map((_, index) => {
            return from + index + 1;
        }).filter(page => page > 0);
}

export function Pagination({
    totalCountOfRegisters, 
    registerPerPage = 10, 
    currentPage = 1, 
    onPageChange
}: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : []

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : []

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
                {currentPage > ( 1 + siblingsCount) && (
                    <>
                        <PageButton onPageChange={onPageChange} page={1} />
                        {currentPage > (2 + siblingsCount) && <Text color="gray.300" width="8" textAlign="center">...</Text>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PageButton onPageChange={onPageChange} page={page} key={page} />
                })}

                <PageButton onPageChange={onPageChange} page={currentPage} isCurrent />  

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PageButton onPageChange={onPageChange} page={page} key={page} />
                })}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && <Text color="gray.300" width="8" textAlign="center">...</Text> }
                        <PageButton onPageChange={onPageChange} page={lastPage} />
                    </>
                )}

            </Stack>
        </Stack>
    )
}