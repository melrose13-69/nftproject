interface NavigationItem {
    text: string
    href?: string
}

export interface NavigationProps {
    navigation: NavigationItem[] | []
    className?: string
}