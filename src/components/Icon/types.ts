import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface Link {
    to: string
    target?: string
}

export interface IconState {
    icon: IconDefinition
    className?: string
    link?: Link
}