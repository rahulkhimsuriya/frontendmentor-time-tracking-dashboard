import { createContext, useState } from 'react'

export const TimeFrameContext = createContext()

export function TimeFrameProvider({ children }) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly')
  const timeframes = ['daily', 'weekly', 'monthly']

  return (
    <TimeFrameContext.Provider
      value={{ selectedTimeframe, setSelectedTimeframe, timeframes }}
    >
      {children}
    </TimeFrameContext.Provider>
  )
}
