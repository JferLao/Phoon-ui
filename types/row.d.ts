import { PhoonUIComponent, PhoonUIComponentSize } from './component'

export type HorizontalAlignment = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

export type VertialAlignment = 'top' | 'middle' | 'bottom'

export declare class PhRow extends PhoonUIComponent {
    gutter: number
    type: String
    justify: HorizontalAlignment
    align: VertialAlignment
    tag: String
}