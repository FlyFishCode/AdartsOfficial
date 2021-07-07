import { upLoadImgHttp } from '@/api'

const upLoadImg = (data) => {
    upLoadImgHttp(data).then(res => {
        return res
    })
}
export {
    upLoadImg
}