import Vue, { PluginObject } from 'vue'
import { PhoonUIComponent, PhoonUIComponentSize, PhoonUiHorizontalAlignment } from './component'

import { version } from 'vue/types/umd'
import {PhAside} from './aside'
import { PhButton } from './button'
import { PhCol } from './col'
import { PhContainer } from './container'
import { PhFooter } from './footer'
import { PhHeader } from './header'
import { PhMain } from './main'
import { PhRow } from './row'
import { PhSelect } from './select'

import { PhIcon } from './icon'

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

/**
 * Component
 */
export class Aside extends PhAside{}
export class Button extends PhButton { }
export class Col extends PhCol { }
export class Container extends PhContainer { }
export class Footer extends PhFooter{}
export class Header extends PhHeader{}
export class Main extends PhMain{}
export class Row extends PhRow { }
export class Select extends PhSelect { }


export class Icon extends PhIcon {}
