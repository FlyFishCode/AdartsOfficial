import { useLocation } from "react-router-dom";
const NewsPage = () => {
  const Location = useLocation();
  console.log(Location.state);
  return (
    <div className='news'>
      新闻列表
    </div>
  )
}
export default NewsPage