import { useTranslation } from 'react-i18next';
const AddFriends = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='AddFriends'>{t(68)}</div>
    </div>
  )
}
export default AddFriends