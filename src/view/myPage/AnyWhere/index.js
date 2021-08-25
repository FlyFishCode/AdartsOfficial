import { useEffect } from 'react';
import NoData from '@/common/components/NoData'
const AnyWhere = () => {
    useEffect(() => {
    }, [])
    return (
        <div>
            <div className='myPageTitle' id='anyWhere'>Any Where</div>
            <NoData />
        </div>
    )
}
export default AnyWhere