export enum RoadmapStartView {
    STORY = 'story',
    ROADMAP = 'roadmap'
}

export enum RoadmapMapView {
    TEXT1 = 'text1',
    TEXT2 = 'text2'
}

export interface RoadmapStartTypes {
    setView(state: RoadmapStartView | null): void
}
export interface RoadmapStoryTypes {
    onReturnClick(): void
}
export interface RoadmapMapTypes {
    onReturnClick(): void
}

export interface ButtonTypes {
    text: string
    icon?: string
    className: string
    onClick?(): void
}