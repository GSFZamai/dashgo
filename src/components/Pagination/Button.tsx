import { Button } from '@chakra-ui/react'

interface PageButtonProps {
    page: number;
    isCurrent?: boolean;
}

export function PageButton({page, isCurrent = false}: PageButtonProps) {
    if (isCurrent) {
        return(
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="blue"
                disabled
                _hover={{
                    bg: 'blue.900'
                }}
                _disabled={{
                    bg: 'blue.900',
                    cursor: 'default',
                }}
            >
                {page}
            </Button>
        )
    }

    return (
        <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="blue"
    >
        {page}
    </Button>
    )
}