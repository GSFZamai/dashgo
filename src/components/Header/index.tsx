import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { Logo } from './Logo'
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth= {1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            { !isWideScreen && (
                <IconButton
                    aria-label="Open Navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                >
                </IconButton>
            )}

            <Logo />
           { isWideScreen && <SearchBox /> } 

            <Flex
                align="center"
                ml="auto"
            >
                
                    <NotificationsNav />
                    <Profile showProfileData={isWideScreen} />

            </Flex>
        </Flex>
    )
}