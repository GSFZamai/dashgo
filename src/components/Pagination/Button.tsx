import { Button } from '@chakra-ui/react'

interface PageButtonProps {
    page: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PageButton({page, isCurrent = false, onPageChange}: PageButtonProps) {
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
        onClick={() => onPageChange(page)}
    >
        {page}
    </Button>
    )
}