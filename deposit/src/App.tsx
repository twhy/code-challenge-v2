import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  ThemeMode, Container, SwitchContainer, Switch, Modal, ModalTitle,
  CloseButton, FromToContainer, FromTo, FromToLabel, FromToField,
  FromToIcon, FromToAddr, FromToArrow, SelectAmountContainer,
  SelectAmountHeader, SelectAmountLabel, SelectAmountAvailable,
  SelectAmountAvailableValue, AmountInputContainer, AmountInputIcon,
  AmountInput, AmountTotal, AmountTotalValue, AmountOptionsContainer,
  AmountOption, EstimatedTimeContainer, EstimatedTime, TransferButton,
  CancelButton, ClockIcon, PenIcon, FieldColor
} from './components'

const ATOM_ICON_URL = 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png'
const OSMO_ICON_URL = 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'

function App() {
  const [check, setCheck] = useState(true)
  const [theme, setTheme] = useState({ mode: ThemeMode.Light })
  
  function onChange(checked: boolean) {
    setCheck(checked)
    setTheme({ mode: checked ? ThemeMode.Light : ThemeMode.Dark })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SwitchContainer>
          <Switch checked={check} onChange={onChange} />
        </SwitchContainer>
        <Modal>
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
        </Modal>
      </Container>
    </ThemeProvider>
  )
}

export default App
