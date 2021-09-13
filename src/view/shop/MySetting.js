// import { useState,useEffect } from 'react';
import { Col, Row, Select, Button, Input, Collapse, Modal, message } from 'antd';
import { FieldTimeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import NoData from '@/common/components/NoData';
import RenderUrlDom from '@/common/components/RenderUrlDom';

import {
    myItemAllListHttp,
    shopPropSetHttp,
    shopPropUsingListHttp,
    shopPropsInfoHttp,
    shopPropsBuyHttp,
    templateListHttp,
    templateAddHttp,
    templateUpdateHttp,
    templateDeleteHttp,
    templateChangeHttp
} from '@/api';


const { Option } = Select;
const { Panel } = Collapse;

const MySetting = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [template, setTemplate] = useState([]);
    const [templateId, setTemplateId] = useState('-1');
    const [dialogTemplate, setDialogTemplate] = useState([]);
    const [templateVisible, setTemplateVisible] = useState('');
    const [propObj, setPropObj] = useState({});
    const [renewalId, setRenewalId] = useState();

    const [style, setStyle] = useState([]);
    const [markAward, setMarkAward] = useState([]);
    const [effect, setEffect] = useState([]);
    const [sound, setSound] = useState([]);
    const [bull, setBull] = useState([]);
    const [bullSound, setBullSound] = useState([]);
    const [therrInBlack, setTherrInBlack] = useState([]);
    const [therrInBed, setTherrInBed] = useState([]);
    const [hatTrick, setHatTrick] = useState([]);
    const [ton80, setTon80] = useState([]);
    const [higtTon, setHigtTon] = useState([]);
    const [lowTon, setLowTon] = useState([]);
    const [whiteHorse, setWhiteHorse] = useState([]);
    const [nineMark, setNineMark] = useState([]);

    const [styleValue, setStyleValue] = useState(0);
    const [markAwardValue, setMarkAwardValue] = useState(0);
    const [effectValue, setEffectValue] = useState(0);
    const [soundValue, setSoundValue] = useState(0);
    const [bullSoundValue, setBullSoundValue] = useState(0);
    const [bullValue, setBullValue] = useState(0);
    const [threeBlackValue, setThreeBlackValue] = useState(0);
    const [hatTrickValue, setHatTrickValue] = useState(0);
    const [ton80Value, setTon80Value] = useState(0);
    const [higtTonValue, setHigtTonValue] = useState(0);
    const [lowTonValue, setLowTonValue] = useState(0);
    const [threeBenValue, setThreeBenValue] = useState(0);
    const [whiteHorseValue, setWhiteHorseValue] = useState(0);
    const [nineMarkValue, setNineMarkValue] = useState(0);

    const RenderPropItenDom = ({ list, value }) => {
        let obj = {};
        if (list.filter(i => i.id === value).length) {
            obj = list.filter(i => i.id === value)[0];
        }
        const handleRenewal = (id) => {
            if (id) {
                shopPropsInfoHttp({ itemId: id }).then(res => {
                    if (res.data.code === 100) {
                        setRenewalId(id);
                        setPropObj(res.data.data);
                        setVisible(true);
                    }
                })
            }
        }
        return (
            <div>
                <div className='ShopPropSettingImg'><RenderUrlDom url={obj.url} /></div>
                <div className='ShopPropShopName'>{obj && obj.titlt}</div>
                <div style={{ display: 'grid', justifyItems: 'center' }}>
                    <div className='ShopProp'><FieldTimeOutlined />{obj && obj.validDays} Day <Button danger size='small' onClick={() => handleRenewal(obj.id)}>{t(178)}</Button></div>
                </div>
            </div>
        )
    }
    const handleOk = () => {
        shopPropsBuyHttp({ itemId: renewalId }).then(res => {
            if (res.data.code === 100) {
                message.info(res.data.msg);
                setVisible(false);
            }
        })
    }
    const clearPropsSetting = () => {
        setStyleValue(0);
        setMarkAwardValue(0);
        setEffectValue(0);
        setSoundValue(0);
        setBullSoundValue(0);
        setBullValue(0);
        setThreeBlackValue(0);
        setHatTrickValue(0);
        setTon80Value(0);
        setHigtTonValue(0);
        setLowTonValue(0);
        setThreeBenValue(0);
        setWhiteHorseValue(0);
        setNineMarkValue(0);
    }
    const handleChange = (value, type, isSet) => {
        let list = [];
        switch (type) {
            case 1:
                setStyleValue(value);
                list = style;
                break;
            case 2:
                setMarkAwardValue(value);
                list = markAward;
                break;
            case 3:
                setEffectValue(value);
                list = effect;
                break;
            case 4:
                setSoundValue(value);
                list = sound;
                break;
            case 5:
                setBullValue(value);
                list = bull;
                break;
            case 6:
                setBullSoundValue(value);
                list = bullSound;
                break;
            case 71:
                setLowTonValue(value);
                list = lowTon;
                break;
            case 72:
                setHigtTonValue(value);
                list = higtTon;
                break;
            case 73:
                setHatTrickValue(value);
                list = hatTrick;
                break;
            case 74:
                setThreeBenValue(value);
                list = therrInBed;
                break;
            case 75:
                setThreeBlackValue(value);
                list = therrInBlack;
                break;
            case 76:
                setTon80Value(value);
                list = ton80;
                break;
            case 77:
                setWhiteHorseValue(value);
                list = whiteHorse;
                break;
            default:
                setNineMarkValue(value);
                list = nineMark;
                break;
        }
        if (isSet) {
            shopPropSetHttp({ itemId: value, type });
        }
        RenderPropItenDom({ list, value });
    }
    const handleDelete = (id) => {
        templateDeleteHttp([id]).then(res => {
            if (res.data.code === 100) {
                message.info(res.data.msg);
                getTemplate();
            }
        })
    }
    const handleSave = (name, id) => {
        const obj = {
            name,
            itemIds: [
                styleValue,
                markAwardValue,
                effectValue,
                soundValue,
                bullValue,
                bullSoundValue,
                lowTonValue,
                higtTonValue,
                hatTrickValue,
                threeBenValue,
                threeBlackValue,
                ton80Value,
                whiteHorseValue,
                nineMarkValue
            ]
        }
        if (id) {
            obj.id = id;
            templateUpdateHttp(obj).then(res => {
                if (res.data.code === 100) {
                    message.info(res.data.msg);
                    getTemplate();
                }
            })
        } else {
            templateAddHttp(obj).then(res => {
                if (res.data.code === 100) {
                    message.info(res.data.msg);
                    getTemplate();
                }
            })
        }
    }
    const getTemplate = () => {
        templateListHttp().then(res => {
            if (res.data.code === 100) {
                const list = [];
                const tempList = [...res.data.data];
                tempList.unshift({ id: -1, name: t(230) });
                setTemplate(tempList);
                for (let i = res.data.data.length; i < 10; i++) {
                    list.push({ id: '', name: '' });
                }
                setDialogTemplate([...res.data.data, ...list]);
            }
        })
    }
    const handleDialogTemplateChange = (value, index) => {
        const list = [...dialogTemplate];
        list[index].name = value;
        setDialogTemplate(list);
    }
    const handleTypeList = (list, id) => {
        const tempList = list.filter(i => i.type === id)
        tempList.unshift({ id: 0, title: 'Please Select!' })
        return tempList;
    }
    const templateChange = (id) => {
        setTemplateId(id);
        clearPropsSetting();
        templateChangeHttp({ templateId: id }).then(res => {
            if (res.data.code === 100) {
                getUsingPropList()
            }

        })
    }
    const getUsingPropList = () => {
        shopPropUsingListHttp().then(res => {
            if (res.data.code === 100) {
                setTemplateId(String(res.data.data.id));
                res.data.data.list.forEach(i => {
                    handleChange(i.id, i.type, false)
                })
            }
        })
    }
    const getMyAllPropList = () => {
        const obj = {
            type: '',
            pageIndex: 1,
            pageSize: 999,
        }
        myItemAllListHttp(obj).then(res => {
            if (res.data.code === 100) {
                const list = res.data.data.list;
                setStyle(handleTypeList(list, 1));
                setMarkAward(handleTypeList(list, 2));
                setEffect(handleTypeList(list, 3));
                setSound(handleTypeList(list, 4));
                setBull(handleTypeList(list, 5));
                setBullSound(handleTypeList(list, 6));
                setTherrInBlack(handleTypeList(list, 75));
                setTherrInBed(handleTypeList(list, 74));
                setHatTrick(handleTypeList(list, 73));
                setTon80(handleTypeList(list, 76));
                setHigtTon(handleTypeList(list, 72));
                setLowTon(handleTypeList(list, 71));
                setWhiteHorse(handleTypeList(list, 77));
                setNineMark(handleTypeList(list, 78));
            }
        })
    }
    useEffect(() => {
        getTemplate();
        getMyAllPropList();
        getUsingPropList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <div className='Title'>{t(166)}</div>
            <div className='templateBox'>
                <Row>
                    <Col span='2' className='labelTitle'>{t(173)}</Col>
                    <Col span='10'>
                        <Select
                            value={templateId}
                            style={{ width: '100%' }}
                            onChange={templateChange}
                            optionLabelProp="label"
                        >
                            {template.map(i => {
                                return (
                                    <Option key={i.id} value={i.value} label={i.name}>
                                        <div className="optionLabel">
                                            <div>{i.name}</div>
                                            {/* <Button type='danger' size='small' onClick={(e) => handleDelete(e, i.id)}>Delete</Button> */}
                                        </div>
                                    </Option>
                                )
                            })}
                        </Select>
                    </Col>
                    {/* <Col span='8' offset='2'><Input placeholder={t(229)} value={templateValue} onChange={(e) => setTemplateValue(e.target.value)} allowClear /></Col> */}
                    <Col span='2'><Button onClick={() => setTemplateVisible(true)}>{t(174)}</Button></Col>
                </Row>
                <div>
                    <div>*  {t(227)}</div>
                    <div>*  {t(228)}</div>
                </div>
            </div>
            <div className='RowBox'>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header={t(175)} key="1">
                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Style ({style.length - 1})</div>
                                <div>
                                    <Select value={styleValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 1, true)}>
                                        {style.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={style} value={styleValue} />
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Mark Award ({markAward.length - 1})</div>
                                <div>
                                    <Select value={markAwardValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 2, true)}>
                                        {markAward.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={markAward} value={markAwardValue} />
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Effect ({effect.length - 1})</div>
                                <div>
                                    <Select value={effectValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 3, true)}>
                                        {effect.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={effect} value={effectValue} />
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Sound ({sound.length - 1})</div>
                                <div>
                                    <Select value={soundValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 4, true)}>
                                        {sound.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={sound} value={soundValue} />
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Bull Sound ({bullSound.length - 1})</div>
                                <div>
                                    <Select value={bullSoundValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 6, true)}>
                                        {bullSound.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={bullSound} value={bullSoundValue} />
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>Bull ({bull.length - 1})</div>
                                <div>
                                    <Select value={bullValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 5, true)}>
                                        {bull.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={bull} value={bullValue} />
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
                                <div className='ShopPropSettingTitle'>THREE IN THE BLACK ({therrInBlack.length - 1})</div>
                                <div>
                                    <Select value={threeBlackValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 75, true)}>
                                        {therrInBlack.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={therrInBlack} value={threeBlackValue} />
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>HAT TRICK ({hatTrick.length - 1})</div>
                                <div>
                                    <Select value={hatTrickValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 73, true)}>
                                        {hatTrick.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={hatTrick} value={hatTrickValue} />
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>TON 80  ({ton80.length - 1})</div>
                                <div>
                                    <Select value={ton80Value} style={{ width: '100%' }} onChange={(value) => handleChange(value, 76, true)}>
                                        {ton80.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={ton80} value={ton80Value} />
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>HIGT TON ({higtTon.length - 1})</div>
                                <div>
                                    <Select value={higtTonValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 72, true)}>
                                        {higtTon.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={higtTon} value={higtTonValue} />
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>LOW TON ({lowTon.length - 1})</div>
                                <div>
                                    <Select value={lowTonValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 71, true)}>
                                        {lowTon.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={lowTon} value={lowTonValue} />
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>THREE IN A BEN ({therrInBed.length - 1})</div>
                                <div>
                                    <Select value={threeBenValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 74, true)}>
                                        {therrInBed.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={therrInBed} value={threeBenValue} />
                            </div>
                        </div>

                        <div className='ShopPropSettingBox'>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>WHITE HORSE ({whiteHorse.length - 1})</div>
                                <div>
                                    <Select value={whiteHorseValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 77, true)}>
                                        {whiteHorse.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={whiteHorse} value={whiteHorseValue} />
                            </div>
                            <div className='everyShopPropSettingBox'>
                                <div className='ShopPropSettingTitle'>NINE MARK ({nineMark.length - 1})</div>
                                <div>
                                    <Select value={nineMarkValue} style={{ width: '100%' }} onChange={(value) => handleChange(value, 78, true)}>
                                        {nineMark.map(i => <Option key={i.id} value={i.id}>{i.title}</Option>)}
                                    </Select>
                                </div>
                                <RenderPropItenDom list={nineMark} value={nineMarkValue} />
                            </div>
                        </div>
                    </Panel>
                </Collapse>
            </div>
            <Modal title={t(179)} visible={visible} centered footer={null} width='50%' onCancel={() => setVisible(false)}>
                <div className='RowBox' style={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}>{propObj.title}</div>
                <div className='renewalImgBox'><img src={propObj.url && propObj.url.split(',')[0]} alt="" /></div>
                <div className='myListRedeemBox'>
                    <div>
                        <div>{t(182)}</div>
                        <div>{propObj.coin}</div>
                    </div>
                    <div>
                        <div>{t(226)}</div>
                        <div>{propObj.price}</div>
                    </div>
                    <div>
                        <div>{t(183)}</div>
                        <div>{propObj.coin - propObj.price}</div>
                    </div>
                </div>
                <div className='myListTipsBox'><InfoCircleOutlined />{t(180)}</div>
                <Row justify="center">
                    <Col span='6' style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button type="primary" onClick={handleOk}>{t(19)}</Button>
                        <Button type="primary" onClick={() => setVisible(false)}>{t(127)}</Button>
                    </Col>
                </Row>
            </Modal>
            {/* 模板弹框 */}
            <Modal title={t(173)} visible={templateVisible} centered footer={null} width='50%' onCancel={() => setTemplateVisible(false)}>
                {dialogTemplate.length ? dialogTemplate.map((i, index) => {
                    return (
                        <div key={index}>
                            <div className='TemplateBox'>
                                <Input placeholder="Place Input Template Name" value={i.name} onChange={(e) => handleDialogTemplateChange(e.target.value, index)} />
                                <Button danger onClick={() => handleDelete(i.id)}>{t(97)}</Button>
                                <Button type="primary" onClick={() => handleSave(i.name, i.id)}>{t(174)}</Button>
                            </div>
                        </div>
                    )
                }) : <NoData />}
            </Modal>
        </div>
    )
}
export default MySetting