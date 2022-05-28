import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Link } from '../Icon/types'

interface Social extends Link {
    icon: IconDefinition
}

export interface MemberProps {
    src: string
    socials: Social[]
    nickname: string
}