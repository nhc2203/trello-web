import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import {useColorScheme} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle/>
      <div>NguyenHungCuong</div>

      <Typography variant='body2' color="text.secondary">Typography</Typography>

      <Button variant='contained'>Hello World</Button>

      <AccessAlarm/>
      <ThreeDRotation/>
    </>
  )
}

export default App
