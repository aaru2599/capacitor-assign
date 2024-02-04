import { Detector } from 'react-detect-offline'
import Home from './Home'

const CheckInternet = () => {
  return (
   <>
   <Detector
   render={({online})=>(
    online?<Home/>:<div>
        <h2>No Internet</h2>
    </div>
   )}
   />
   </>
  )
}

export default CheckInternet