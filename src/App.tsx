import './App.css'
import { Application } from './comonents/application/Application'
import { Counter } from './comonents/counter/Counter'
import { MuiMode } from './comonents/mui/Mui'
import { Skills } from './comonents/skills/Skills'
import { AppProviders } from './providers/AppProvider'

function App() {
  return (
    <AppProviders>
      <Application />
    </AppProviders>
  )
}

export default App
