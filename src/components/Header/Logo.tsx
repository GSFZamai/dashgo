import { Text } from '@chakra-ui/react'

export function Logo() {
    return(
        <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
    >
        <Text
            as="span"
            color="blue.600"
            fontSize="5xl"
            letterSpacing="-0.2rem"
            fontWeight="bold"
        >
            BK
        </Text>
        dash
    </Text>
    )
}