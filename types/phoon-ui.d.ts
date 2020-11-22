import Vue, { PluginObject } from 'vue'
import { PhoonUIComponent, PhoonUIComponentSize, PhoonUiHorizontalAlignment } from './component'

import { version } from 'vue/types/umd'
import { PhButton } from './button'
import {PhCol} from './col'
import { PhRow  } from './row'
import { PhSelect } from './select'

export interface InstallationOptions {
    locale: any,
    i18n: any,
    size: string
}

export const version: string

export function install(Vue: typeof Vue, Options: InstallationOptions): void

export type Component = PhoonUIComponent
export type ComponentSize = PhoonUIComponentSize
export type HorizontalAlignment = PhoonUiHorizontalAlignment

export class Button extends PhButton { }
export class Col extends PhCol {}
export class Row extends PhRow { }
export class Select extends PhSelect { }
