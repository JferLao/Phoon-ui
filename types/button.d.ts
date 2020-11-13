import { PhoonUIComponent,PhoonUIComponentSize } from './component'

export type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'text' | 'dashed' | 'default'

export type ButtonNativeType = 'button' | 'submit' | 'reset' 

export declare class PhButton extends PhoonUIComponent {
    size:PhoonUIComponentSize
    type:ButtonType
    ghost:boolean
    plain:boolean
    round:boolean
    loading:boolean
    disabled:boolean
    icon:string
    block:boolean
    nativeType:ButtonNativeType
}