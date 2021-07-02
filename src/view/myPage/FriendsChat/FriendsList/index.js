import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

const { Search } = Input;

const FriendsList = () => {
  const { t } = useTranslation();
  const handleSearch = () => {
    console.log(1);
  }
  return (
    <div>
      <div className='myPageTitle' id='FriendsList'>{t(67)}</div>
      <div>
        <Search placeholder="input search text" allowClear onSearch={handleSearch} style={{ width: 200 }} />
      </div>
    </div>
  )
}
export default FriendsList