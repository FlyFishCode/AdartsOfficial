const RenderUrlDom = ({ url }) => {
  if (url) {
    const type = url.split(',')[0].substr(-10).split('.')[1];
    const imgList = ['jpg', 'png', 'jpeg'];
    const videoList = ['mp4'];
    const audioList = ['mp3', 'ogg', 'mpeg'];
    if (imgList.includes(type)) {
      return <img src={url && url.split(',')[0]} alt="" />
    }
    if (videoList.includes(type)) {
      return (
        <video controls style={{ width: '100%', height: '100%' }}>
          <source src={url && url.split(',')[0]} type="video/mp4" />
        </video>
      )
    }
    if (audioList.includes(type)) {
      return (
        <audio controls style={{ width: '100%', height: '100%' }}>
          <source src={url && url.split(',')[0]} type="audio/mp3" />
          <source src={url && url.split(',')[0]} type="audio/ogg" />
          <source src={url && url.split(',')[0]} type="audio/mpeg" />
        </audio>
      )
    }
  }
  return null
}
export default RenderUrlDom;