import styled from 'styled-components'
import { ModalBackgroundColor, ThemeProps, TitleColor } from './constants'

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

export type SwitchProps = {
  checked?: boolean
  onChange: (checked: boolean) => void
}

export default function Switch({ checked = false, onChange }: SwitchProps) {
  return <SwitchWrapper>
    <SwitchLabel>
      <SwitchInput type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <SwitchSlider />
    </SwitchLabel>
  </SwitchWrapper>
}
