import { TimeFrameProvider } from './contexts/TimeFrameContext'
import Dashboard from './Dashboard'

function App() {
  return (
    <TimeFrameProvider>
      <Dashboard />
    </TimeFrameProvider>
  )
}

export default App
