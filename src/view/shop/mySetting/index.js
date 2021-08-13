// import { useState,useEffect } from 'react';
import { Row, Col, Select } from 'antd';

// import NoData from '@/common/components/noData';

const { Option } = Select;



const MySetting = () => {
  const handleChange = (value) => {
    console.log(value);
  }
  return (
    <div>
      <Row className='myPageTitle'>MySetting</Row>
      <Row className='MySettingRow'>Style</Row>
      <Row>
        <Col span='12'>
          <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span='12'>
          <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
      </Row>
    </div>
  )
}
export default MySetting