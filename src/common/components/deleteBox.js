import { Modal } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const useDeleteBox = () => {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  let handleBtnClick = null
  const CustomModal = (props) => {
    handleBtnClick = props.handleBtnClick;
    return (
      <Modal
        visible={visible}
        centered
        title={t(97)}
        closable={false}
        okText={t(19)}
        cancelText={t(127)}
        onOk={handleOkClick} onCancel={handleCancelClick}
      >
        {t(126)}
      </Modal>
    );
  }
  const show = () => {
    setVisible(true)
  }
  const handleOkClick = () => {
    setVisible(false)
    handleBtnClick(true)
  }
  const handleCancelClick = () => {
    setVisible(false)
  }
  return {
    show,
    CustomModal
  }
}
export default useDeleteBox;