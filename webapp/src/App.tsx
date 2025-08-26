import { TRPCProvider } from './lib/trpcProvider'
import { AllIdeasPage } from './pages/AllIdeasPage'

export const App = () => {
  return (
    <TRPCProvider>
      <AllIdeasPage />
    </TRPCProvider>
  )
}
