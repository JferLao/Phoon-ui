import { PhoonUICompone } from './component';

export interface ResponsiveColumnProperties {
    span: number,
    offset:number
}

export type ResponsiveColumn = number | ResponsiveColumnProperties

export declare class PhCol extends PhoonUICompone{
    span:number
    offset:number
    pull:number
    push:number
    tag:String
    xs:ResponsiveColumn
    sm:ResponsiveColumn
    md:ResponsiveColumn
    lg:ResponsiveColumn
    xl:ResponsiveColumn
    xxl:ResponsiveColumn
}