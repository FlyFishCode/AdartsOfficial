import { useTranslation } from 'react-i18next'
const PasswordSetting = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='PasswordSetting'>{t(73)}</div>
    </div>
  )
}
export default PasswordSetting