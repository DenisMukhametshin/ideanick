import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TRPCProvider } from './lib/trpcProvider'
import { AllIdeasPage } from './pages/AllIdeasPage'
import * as routes from './lib/routes'
import { ViewIdeaPage } from './pages/ViewIdeaPage'
import { Layout } from './components/Layout'
import './styles/global.scss'
import { NewIdeaPage } from './pages/NewIdeaPage'

export const App = () => {
  return (
    <TRPCProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
            <Route path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TRPCProvider>
  )
}
