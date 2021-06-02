import Link from 'next/link';

import { ElementType } from "react";

import { LinkProps, Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';
import { useRouter } from 'next/dist/client/router';

interface NavLinkProps extends LinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({children, icon, href, ...rest}: NavLinkProps) {


    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}