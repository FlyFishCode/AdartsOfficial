import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PlayerInfo = () => {
  const parmas = useLocation();
  useEffect(() => {
    console.log(parmas.state.id);
  }, [parmas])
  return (
    <div>
      选手介绍
    </div>
  )
}
export default PlayerInfo;