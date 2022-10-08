import React , {Suspense} from 'react'
import Banner from '../components/Banner/Banner'
// import CoinsTable from '../components/Banner/CoinsTable'

const CoinsTable=React.lazy(()=>import("../components/Banner/CoinsTable"));
const Homepage = () => {
  return (
    <>
    <Banner/>
    <Suspense fallback={<div>Loading...</div>}>
<CoinsTable/>
    </Suspense>
    </>
  )
}

export default Homepage