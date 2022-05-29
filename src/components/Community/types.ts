import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Link } from '../Icon/types'

interface CommunityItem {
    icon: IconDefinition
    link: Link
}

export interface CommunityProps {
    community: CommunityItem[]
    className?: string
}