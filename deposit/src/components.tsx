import styled, { ThemeProps as StyledThemeProps } from 'styled-components'

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

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding-top: 5rem;
`

export const Modal = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 400px;
  border-radius: 10px;
  background-color: ${(props: ThemeProps) => ModalBackgroundColor[props.theme.mode]};
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
`

export const ModalTitle = styled.h2`
  color: ${(props: ThemeProps) => TitleColor[props.theme.mode]};
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  position: relative;
`

export const CloseButton = styled.span`
  width: 25px;
  height: 25px;
  display: block;
  top: 0;
  right: 0;
  cursor: pointer;
  position: absolute;
  border-radius: 4px;
  background-color: ${(props: ThemeProps) => CloseButtonBackgroundColor[props.theme.mode]};
  &:before, &:after {
    content: '';
    width: 12px;
    height: 1px;
    top: 50%;
    left: 7px;
    display: block;
    position: absolute;
    background-color: ${(props: ThemeProps) => TitleColor[props.theme.mode]};
  }
  &:after { transform: rotate(-45deg); }
  &:before { transform: rotate(45deg); }
`

export const FromToContainer = styled.div`
  display: flex;
  align-items: end;
  margin-top: 26px;
`

export const FromTo = styled.div`
  flex: 1;
`

export const FromToArrow = styled.span`
  height: 45px;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  font-size: 12px;
  color: ${(props: ThemeProps) => ArrowColor[props.theme.mode]};
`

export const FromToLabel = styled.label`
  font-size: 11px;
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props: ThemeProps) => LabelColor[props.theme.mode]};
`

export const FromToField = styled.div`
  height: 45px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${(props: ThemeProps) => InfoBackgroundColor[props.theme.mode]};
`

export const FromToIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
`

export const FromToAddr = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${(props: ThemeProps) => FieldColor[props.theme.mode]};
`

export const SelectAmountContainer = styled.div`
  margin-top: 20px;
`

export const SelectAmountHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`

export const SelectAmountLabel = styled.label`
  flex: 1;
  font-size: 15px;
  display: block;
  font-weight: 600;
  color: ${(props: ThemeProps) => LabelColor[props.theme.mode]};
`

export const SelectAmountAvailable = styled.p`
  margin: 0;
  font-size: 11px;
  color: ${(props: ThemeProps) => LabelColor[props.theme.mode]};
`

export const SelectAmountAvailableValue = styled.span`
  font-size: 11px;
  font-weight: 500;
  margin-left: 4px;
  color: ${(props: ThemeProps) => LabelColor[props.theme.mode]}
`

export const AmountInputContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props: ThemeProps) => InputBorderColor[props.theme.mode]};
  border-radius: 6px;
`

export const AmountInputIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
`

export const AmountInput = styled.input`
  flex: 1;
  height: 100%;
  font-size: 15px;
  font-weight: 600;
  padding: 0 12px;
  border: none;
  border-left: 1px solid ${(props: ThemeProps) => InputBorderColor[props.theme.mode]};
  appearance: none;
  border-radius: 0;
  color: ${(props: ThemeProps) => TitleColor[props.theme.mode]};
  background-color: transparent;
  &:focus { outline: none }
`

export const AmountTotal = styled.div`
  font-size: 11px;
  font-weight: 500;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${(props: ThemeProps) => TitleColor[props.theme.mode]};
`

export const AmountTotalValue = styled.span`
  font-size: 10px;
  margin: 0 14px 0 6px;
  color: ${(props: ThemeProps) => FieldColor[props.theme.mode]};
`

export const AmountOptionsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const AmountOption = styled.span`
  color: ${(props: ThemeProps) => LabelColor[props.theme.mode]};
  font-size: 11px;
  font-weight: 600;
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props: ThemeProps) => OptionBackgroundColor[props.theme.mode]};
`

export const EstimatedTimeContainer = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 9px;
  margin-top: 24px;
  margin-bottom: 16px;
  border-radius: 6px;
  font-size: 12px;
  color: ${(props: ThemeProps) => SubtitleColor[props.theme.mode]};
  background-color: ${(props: ThemeProps) => InfoBackgroundColor[props.theme.mode]};
`

export const ClockIcon = styled.span`
  width: 13px;
  height: 13px;
  display: block;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
  border: 1px solid ${(props: ThemeProps) => TitleColor[props.theme.mode]};
  &:before, &:after {
    height: 1px;
    content: '';
    top: 0;
    position: absolute;
    display: block;
    background-color: ${(props: ThemeProps) => TitleColor[props.theme.mode]};
  }
  &:after {
    top: 4px;
    left: 3px;
    width: 5px;
    transform: rotate(90deg);
  }
  &:before {
    top: 7px;
    left: 5px;
    width: 3px;
    transform: rotate(35deg);
  }
`

export const EstimatedTime = styled.span`
  font-weight: 600;
  margin-left: 4px;
  color: ${(props: ThemeProps) => TitleColor[props.theme.mode]};
`

export const TransferButton = styled.button`
  height: 54px;
  width: 100%;
  display: block;
  border: none;
  outline: none;
  font-weight: 600;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 13px;
  transition: all 0.2s ease-in-out;
  &:hover { filter: brightness(1.05) }
  color: ${(props: ThemeProps) => PrimaryButtonColor[props.theme.mode]};
  background-color: ${(props: ThemeProps) => PrimaryButtonBackgroundColor[props.theme.mode]};
`

export const CancelButton = styled.button`
  margin: auto;
  padding: 3px 10px;
  display: block;
  border: none;
  outline: none;
  font-size: 11px;
  font-weight: 600;
  text-center: center;
  cursor: pointer;
  margin-bottom: 2px;
  color: ${(props: ThemeProps) => SecondaryButtonColor[props.theme.mode]};
  background-color: transparent;
`

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
`  

export const SwitchWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  transform: scale(0.28);
  transform-origin: 100% 50%;
`

export const SwitchLabel = styled.label`
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: ${(props: ThemeProps) => ModalBackgroundColor[props.theme.mode]};
  border-radius: 50px;
  cursor: pointer;
`

export const SwitchInput = styled.input`
  position: absolute;
  display: none;
`

export const SwitchSlider = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
  &:before {
    content: "";
    position: absolute;
    top: 13px;
    left: 16px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    box-shadow: inset 28px -4px 0px 0px ${(props: ThemeProps) => TitleColor[props.theme.mode]};
    background-color: ${(props: ThemeProps) => ModalBackgroundColor[props.theme.mode]};
    transition: 0.3s;
  }
  input:checked ~ & {
    background-color: ${(props: ThemeProps) => TitleColor[props.theme.mode]};
  }
  input:checked ~ &:before {
    transform: translateX(95px);
    background-color: ${(props: ThemeProps) => ModalBackgroundColor[props.theme.mode]};
    box-shadow: none;
  }
`

export function PenIcon({ size = '14px', color = '', margin = '', cursor = 'pointer' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size, color, margin, cursor }} viewBox="0 0 20 20" fill="currentColor">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
}

export type SwitchProps = {
  checked?: boolean
  onChange: (checked: boolean) => void
}

export function Switch({ checked = false, onChange }: SwitchProps) {
  return <SwitchWrapper>
    <SwitchLabel>
      <SwitchInput type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <SwitchSlider />
    </SwitchLabel>
  </SwitchWrapper>
}