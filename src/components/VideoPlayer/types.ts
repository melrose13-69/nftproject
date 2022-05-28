import { RefObject } from 'react'

export interface VideoPlayerState {
    urlMp4: string
    urlWebm: string
    className: string
    width?: string
    objectPosition?: number
}
