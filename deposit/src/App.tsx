import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeMode } from './constants'
import Modal from './Modal'
import Switch from './Switch'

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding-top: 5rem;
`

const SwitchContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
`  

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
        <Modal theme={theme} />
      </Container>
    </ThemeProvider>
  )
}

export default App
