import { useTranslation } from 'react-i18next';
import NoData from '@/common/components/NoData'
const PropSetting = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className='myPageTitle' id='PropSetting'>{t(72)}</div>
            <NoData />
        </div>
    )
}
export default PropSetting