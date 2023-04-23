import styled from 'styled-components'
import { ATOM_ICON_URL, OSMO_ICON_URL, ArrowColor, CloseButtonBackgroundColor, FieldColor, InfoBackgroundColor,
  InputBorderColor, LabelColor, ModalBackgroundColor, OptionBackgroundColor, PrimaryButtonBackgroundColor, PrimaryButtonColor,
  SecondaryButtonColor, SubtitleColor, ThemeProps, TitleColor } from './constants'

export const ModalContainer = styled.div`
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

export function PenIcon({ size = '14px', color = '', margin = '', cursor = 'pointer' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size, color, margin, cursor }} viewBox="0 0 20 20" fill="currentColor">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
}

export default function Modal({ theme }: ThemeProps) {
  return <ModalContainer>
    <ModalTitle>
      Deposit ATOM
      <CloseButton />
    </ModalTitle>
    <FromToContainer>
      <FromTo>
        <FromToLabel>From Cosmos Hub</FromToLabel>
        <FromToField>
          <FromToIcon src={ATOM_ICON_URL} />
          <FromToAddr>atom1xy5y...m6wwz9a</FromToAddr>
        </FromToField>
      </FromTo>
      <FromToArrow>→</FromToArrow>
      <FromTo>
        <FromToLabel>To Osmosis</FromToLabel>
        <FromToField>
          <FromToIcon src={OSMO_ICON_URL} />
          <FromToAddr>osmo1xy5y...w9a</FromToAddr>
          <PenIcon color={FieldColor[theme.mode]} margin="0 0 0 14px" />
        </FromToField>
      </FromTo>
    </FromToContainer>
    <SelectAmountContainer>
      <SelectAmountHeader>
        <SelectAmountLabel>Select amount</SelectAmountLabel>
        <SelectAmountAvailable>
          Available
          <SelectAmountAvailableValue>2 ATOM</SelectAmountAvailableValue>
        </SelectAmountAvailable>
      </SelectAmountHeader>
      <AmountInputContainer>
        <AmountInputIcon src={ATOM_ICON_URL} />
        <AmountInput type="number" value={2} onChange={() => {}} />
        <AmountTotal>
          ATOM
          <AmountTotalValue>≈ $1,013</AmountTotalValue>
        </AmountTotal>
      </AmountInputContainer>
      <AmountOptionsContainer>
        <AmountOption>Max</AmountOption>
        <AmountOption>1/2</AmountOption>
        <AmountOption>1/3</AmountOption>
      </AmountOptionsContainer>
    </SelectAmountContainer>
    <EstimatedTimeContainer>
      <ClockIcon />
      Estimated time: <EstimatedTime>20 seconds</EstimatedTime>
    </EstimatedTimeContainer>
    <TransferButton>Transfer</TransferButton>
    <CancelButton>Cancel</CancelButton>
  </ModalContainer>
}