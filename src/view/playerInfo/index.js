import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import a from '@/assets/img/a.jpg'

const PlayerInfo = () => {
  const parmas = useLocation();
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    console.log(parmas?.state?.id);
    setImgList([
      { id: 1, img: a },
      { id: 2, img: a },
      { id: 3, img: a },
      { id: 4, img: a },
      { id: 5, img: a },
      { id: 6, img: a },
      { id: 7, img: a }
    ])
  }, [parmas])
  return (
    <div>
      <div className='playerImgBox'>{imgList.map(i => {
        return (
          <div className='playerImg' key={i.id}>
            <img src={i.img} alt="" />
          </div>
        )
      })}
      </div>
    </div>
  )
}
export default PlayerInfo;