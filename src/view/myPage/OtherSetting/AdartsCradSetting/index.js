import { useTranslation } from 'react-i18next'
const AdartsCardSetting = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='AdartsCardSetting'>{t(69)}</div>
    </div>
  )
}
export default AdartsCardSetting