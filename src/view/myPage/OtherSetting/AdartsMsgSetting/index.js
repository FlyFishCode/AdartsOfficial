import { useTranslation } from 'react-i18next'
const AdartsMsgSetting = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='AdartsMsgSetting'>{t(71)}</div>
    </div>
  )
}
export default AdartsMsgSetting