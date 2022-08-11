import React, { useContext, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { BellOutlined, ArrowUpOutlined, PlusOutlined, MoreOutlined } from '@ant-design/icons';
import { Divider, List, Avatar, Row, Col, Typography, Statistic, Tooltip, Button, Dropdown } from 'antd';
import menu from '../utils/userMenuOptions';
import { NotificationContext } from '../utils/notificationContext';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const { Title, Paragraph, Text } = Typography;

export default withPageAuthRequired(function SSRPage() {
    const { openNotification } = useContext(NotificationContext);
    const [editableStr, setEditableStr] = useState('This is an editable text.');

    return (
        <Row justify="space-between">
            <Col span={20}>
                <Title>Despesas</Title>
            </Col>
            <Col span={1}>
                <Tooltip title="Nova Despesa">
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => openNotification('Aê imbecil', 'funcionou essa bosta', 'success')} />
                </Tooltip>
            </Col>
            <Col span={6}>
                <Statistic
                    title="Total"
                    value={1123.28}
                    precision={2}
                    decimalSeparator=','
                    groupSeparator='.'
                    valueStyle={{ color: 'var(--red)' }}
                    prefix={<ArrowUpOutlined />}
                />
            </Col>
            <Col span={6}>
                <Statistic
                    title="Maior despesa"
                    value={456.28}
                    precision={2}
                    decimalSeparator=','
                    groupSeparator='.'
                    valueStyle={{ color: 'var(--red)' }}
                />
            </Col>
            <Col span={6}>
                <Statistic
                    title="Mês anterior"
                    value={890.67}
                    precision={2}
                    decimalSeparator=','
                    groupSeparator='.'
                    valueStyle={{ color: 'var(--red)' }}
                />
            </Col>
            <Col span={6}>
                <Statistic
                    title="Diferença percentual"
                    value={11.67}
                    precision={2}
                    decimalSeparator=','
                    groupSeparator='.'
                    valueStyle={{ color: 'var(--red)' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
            </Col>
            <Col span={24}>
                <Divider orientation="left">Domingo, 07</Divider>
                <List
                    size="small"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={item}>
                            <List.Item.Meta
                                avatar={<Avatar icon={<BellOutlined />} />}
                                title={<Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>}
                                description={item}
                            />
                            <div className='value-with-menu'>
                                <Text type="danger">12,90</Text>
                                <Dropdown overlay={menu} trigger='click'>
                                    <Button type="link">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
});
