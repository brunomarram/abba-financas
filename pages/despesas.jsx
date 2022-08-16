import React, { useContext } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { PlusOutlined } from '@ant-design/icons';
import { Divider, Row, Col, Typography, Tooltip, Button } from 'antd';

import { NotificationContext } from '../utils/notificationContext';
import Metrics from '../components/despesas/Metrics';
import DataList from '../components/despesas/DataList';

const expenses = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const { Title } = Typography;

export default withPageAuthRequired(function SSRPage() {
    const { openNotification } = useContext(NotificationContext);

    const metrics = [
        { title: 'Total', value: 1123.8, type: 'currency', showArrow: true },
        { title: 'Maior despesa', value: 456.28, type: 'currency' },
        { title: 'Mês anterior', value: 890.67, type: 'currency' },
        { title: 'Diferença percentual', value: 11.67, type: 'percent', showArrow: true }
    ]

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
            <Metrics metrics={metrics}/>
            <Col span={24}>
                <Divider orientation="left">Últimas despesas</Divider>
                <DataList expenses={expenses}/>
            </Col>
        </Row>
    );
});
