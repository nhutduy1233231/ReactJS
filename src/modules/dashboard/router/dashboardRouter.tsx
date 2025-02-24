import DashBoardPage from '~/modules/dashboard/page/DashBoardPage'
import { dashboardSiteMap } from '~/modules/dashboard/router/dashboardSiteMap'

export const dashboardRouter = [
  {
    path: dashboardSiteMap.dashboard,
    element: <DashBoardPage />
  }
]
