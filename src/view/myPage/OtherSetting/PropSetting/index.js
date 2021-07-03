import { useTranslation } from 'react-i18next'
const PropSetting = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='PropSetting'>{t(72)}</div>
    </div>
  )
}
export default PropSetting