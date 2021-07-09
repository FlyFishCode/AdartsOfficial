import { Input, Button, Form } from 'antd'
import { useTranslation } from 'react-i18next'
const PasswordSetting = () => {
  const { t } = useTranslation()
  const handleFinish = (values) => {
    console.log(values);
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
              },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (/^[a-z]{6,20}$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t(41)));
                }
              })
            ]}
          >
            <Input.Password placeholder={t(41)} allowClear />
          </Form.Item>
          <Form.Item
            label={t(109)}
            name="newPassword"
            dependencies={['oldPassword']}
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (!value || getFieldValue('oldPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t(110)));
                }
              })
            ]}
          >
            <Input.Password placeholder={t(41)} allowClear />
          </Form.Item>
          <Form.Item
            label={t(37)}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (/^[a-z]{6,20}$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t(41)));
                }
              })]}
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