import { lazy } from 'react'
import PrivateLayout from '~/app/layout/private'
import { Suspense } from '~/components/suspense/Suspense'
import { useHeader } from '~/hook/Header'
const DashBoardContainer = lazy(() => import('~/modules/dashboard/container/DashBoardContainer'))

const DashBoardPage = () => {
  useHeader({
    title: 'DashBoard',
    key: '1'
  })

  return (
    <PrivateLayout>
      <Suspense>
        <DashBoardContainer />
      </Suspense>
    </PrivateLayout>
  )
}

export default DashBoardPage
