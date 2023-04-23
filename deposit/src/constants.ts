import { ThemeProps as StyledThemeProps } from 'styled-components'

export const ATOM_ICON_URL = 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png'
export const OSMO_ICON_URL = 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'

export enum ThemeMode {
  Dark = 'Dark',
  Light = 'Light'
}

export type ThemeProps = StyledThemeProps<{ mode: ThemeMode }>

export const TitleColor = {
  [ThemeMode.Dark]: 'rgba(255, 255, 255, 1)',
  [ThemeMode.Light]: 'rgba(39, 44, 48, 1)'
}

export const SubtitleColor = {
  [ThemeMode.Dark]: 'rgba(211, 215, 221, 1)',
  [ThemeMode.Light]: 'rgba(36, 41, 48, 1)'
}

export const LabelColor = {
  [ThemeMode.Dark]: 'rgba(95, 110, 120, 1)',
  [ThemeMode.Light]: 'rgba(95, 107, 121, 1)'
}

export const FieldColor = {
  [ThemeMode.Dark]: 'rgba(90, 100, 110, 1)',
  [ThemeMode.Light]: 'rgba(108, 120, 133, 1)'
}

export const ArrowColor = {
  [ThemeMode.Dark]: 'rgba(100, 100, 100, 1)',
  [ThemeMode.Light]: 'rgba(65, 74, 92, 1)'
}

export const ModalBackgroundColor = {
  [ThemeMode.Dark]: 'rgba(32, 36, 38, 1)',
  [ThemeMode.Light]: 'rgba(255, 255, 255, 1)'
}

export const InputBorderColor = {
  [ThemeMode.Dark]: 'rgba(46, 51, 58, 1)',
  [ThemeMode.Light]: 'rgba(203, 208, 216, 1)'
}

export const InfoBackgroundColor = {
  [ThemeMode.Dark]: 'rgba(20, 20, 23, 1)',
  [ThemeMode.Light]: 'rgba(235, 240, 247, 1)'
}

export const OptionBackgroundColor = {
  [ThemeMode.Dark]: 'rgba(39, 44, 48, 1)',
  [ThemeMode.Light]: 'rgba(235, 241, 247, 1)'
}

export const PrimaryButtonColor = {
  [ThemeMode.Dark]: 'rgba(27, 29, 33, 1)',
  [ThemeMode.Light]: 'rgba(255, 255, 255, 1)'
}

export const PrimaryButtonBackgroundColor = {
  [ThemeMode.Dark]: 'rgba(235, 240, 247, 1)',
  [ThemeMode.Light]: 'rgba(39, 43, 48, 1)'
}

export const SecondaryButtonColor = {
  [ThemeMode.Dark]: 'rgba(94, 106, 122, 1)',
  [ThemeMode.Light]: 'rgba(110, 120, 130, 1)'
}

export const CloseButtonColor = {
  [ThemeMode.Dark]: 'rgba(87, 98, 114, 1)',
  [ThemeMode.Light]: 'rgba(94, 106, 121, 1)'
}

export const CloseButtonBackgroundColor = {
  [ThemeMode.Dark]: 'rgba(40, 45, 50, 1)',
  [ThemeMode.Light]: 'rgba(246, 249, 253, 1)'
}

export const getLabelColor = (props: ThemeProps) => LabelColor[props.theme.mode]

export const getFieldColor = (props: ThemeProps) => FieldColor[props.theme.mode]

export const getArrowColor = (props: ThemeProps) => ArrowColor[props.theme.mode]

export const getTitleColor = (props: ThemeProps) => TitleColor[props.theme.mode]

export const getSubtitleColor = (props: ThemeProps) => SubtitleColor[props.theme.mode]

export const getInputBorderColor = (props: ThemeProps) => InputBorderColor[props.theme.mode]

export const getInfoBackgroundColor = (props: ThemeProps) => InfoBackgroundColor[props.theme.mode]

export const getModalBackgroundColor = (props: ThemeProps) => ModalBackgroundColor[props.theme.mode]

export const getOptionBackgroundColor = (props: ThemeProps) => OptionBackgroundColor[props.theme.mode]

export const getCloseButtonBackgroundColor = (props: ThemeProps) => CloseButtonBackgroundColor[props.theme.mode]

export const getPrimaryButtonColor = (props: ThemeProps) => PrimaryButtonColor[props.theme.mode]

export const getPrimaryButtonBackgroundColor = (props: ThemeProps) => PrimaryButtonBackgroundColor[props.theme.mode]

export const getSecondaryButtonColor = (props: ThemeProps) => SecondaryButtonColor[props.theme.mode]