import { Input, Button, Form, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { passwordChangeHttp } from '@/api';
import { MD5 } from '@/common/Utlis'

const PasswordSetting = () => {
  const { t } = useTranslation()
  const handleFinish = (values) => {
    const data = {
      oldPassword: MD5(values.oldPassword),
      newPassword: MD5(values.newPassword),
      memberId: sessionStorage.getItem('websiteMemberId')
    }
    passwordChangeHttp(data).then(res => {
      if (res.data.code === 100) {
        message.info(res.data.msg)
      } else {
        message.warning(res.data.msg)
      }
    })
  }
  return (
    <div>
      <div className='myPageTitle' id='PasswordSetting'>{t(73)}</div>
      <div className='labelInfo'>{t(107)}</div>
      <div className='PasswordSettingBox'>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          onFinish={handleFinish}
        >
          <Form.Item
            label={t(108)}
            name="oldPassword"
            rules={[
              {
                required: true,
                message: 'Please input your old password!'
              }
            ]}
          >
            <Input.Password placeholder={t(41)} allowClear />
          </Form.Item>
          <Form.Item
            label={t(109)}
            name="newPassword"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password placeholder={t(41)} allowClear />
          </Form.Item>
          <Form.Item
            label={t(37)}
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t(110)));
                }
              })
            ]}
          >
            <Input.Password placeholder={t(41)} allowClear />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 11 }}>
            <Button type="primary" htmlType="submit">{t(19)}</Button>
          </Form.Item>
        </Form>
      </div>
    </div >
  )
}
export default PasswordSetting