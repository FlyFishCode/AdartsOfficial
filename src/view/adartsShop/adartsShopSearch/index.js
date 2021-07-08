import { useTranslation } from 'react-i18next'
const AdartsShopSearch = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='adartsShopSearch'>{t(112)}</div>
    </div>
  )
}
export default AdartsShopSearch