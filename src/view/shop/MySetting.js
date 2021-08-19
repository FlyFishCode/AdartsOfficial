// import { useState,useEffect } from 'react';
import { Col, Row, Select, Button, Input, Collapse } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// import NoData from '@/common/components/NoData';
import a from '@/assets/img/a.jpg';

const { Option } = Select;
const { Panel } = Collapse;

const MySetting = () => {
    const { t } = useTranslation();
    const [template, setTemplate] = useState([]);
    const handleChange = (value) => {
        console.log(value);
    }
    const handleDelete = (e, id) => {
        e.stopPropagation();
        console.log(id);
    }
    const handleSave = () => {
        console.log('SAVE');
    }
    const getTemplate = () => {
        setTemplate([
            { id: 1, value: 'CHINA', name: 'CHINA (中国)' },
            { id: 2, value: 'USA', name: 'USA (美国)' },
            { id: 3, value: 'Japan', name: 'Japan (日本)' },
            { id: 4, value: 'Korea', name: 'Korea (韩国)' },
        ])
    }
    useEffect(() => {
        getTemplate()
    }, [])
    return (
        <div>
            <div className='Title'>{t(166)}</div>
            <div className='templateBox'>
                <Row>
                    <Col span='2' className='labelTitle'>{t(173)}</Col>
                    <Col span='10'>
                        <Select
                            style={{ width: '100%' }}
                            onChange={handleChange}
                            optionLabelProp="label"
                        >
                            {template.map(i => {
                                return (
                                    <Option key={i.id} value={i.value} label={i.name}>
                                        <div className="optionLabel">
                                            <div>{i.name}</div>
                                            <Button type='danger' size='small' onClick={(e) => handleDelete(e, i.id)}>Delete</Button>
                                        </div>
                                    </Option>
                                )
                            })}
                        </Select>
                    </Col>
                    <Col span='8' offset='2'><Input placeholder="请输入模板名称" /></Col>
                    <Col span='2'><Button onClick={handleSave}>{t(174)}</Button></Col>
                </Row>
                <div>
                    <div>*  最多储存10个模板</div>
                    <div>*  若您想要保存另外模板時，請在模板选择中，刪除不必要的模板</div>
                </div>
            </div>
            <div className='RowBox'>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header={t(175)} key="1">
                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Style ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Mark Award ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Effect ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Sound ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Bull Sound ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Bull ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                        </div>
                    </Panel>
                </Collapse>
            </div>
            <div className='RowBox'>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header={t(177)} key="1">
                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>THREE IN THE BLACK ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>HAT TRICK ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>TON 80  ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>HIGT TON ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>LOW TON ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>THREE IN A BEN ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>WHITE HORSE ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>NINE MARK ({1})</div>
                                <div>
                                    <Select value="lucy" style={{ width: '100%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className='ShopPropSettingImg'><img src={a} alt="" /></div>
                                <div className='ShopPropShopName'>{11111111111111}</div>
                                <div className='ShopPropShopName'><FieldTimeOutlined />-{'asdasdasdsa'}日<Button danger size='small'>{t(178)}</Button></div>
                            </div>
                        </div>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}
export default MySetting