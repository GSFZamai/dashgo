import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarContextDrawerContext = createContext({} as SidebarDrawerContextData);


export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure();
    const router = useRouter()

    useEffect(() => {

    }, [router.asPath])

    return (
        <SidebarContextDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarContextDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarContextDrawerContext)