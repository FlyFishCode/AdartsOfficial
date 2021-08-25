import { useTranslation } from 'react-i18next';

const AwardRanting = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='myPageTitle'>{t(200)}</div>
    </div>
  )
}
export default AwardRanting;