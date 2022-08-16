import React, { useContext, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { PlusOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Tooltip, Button, Affix } from 'antd';

import { NotificationContext } from '../utils/notificationContext';
import DataList from '../components/contas/DataList';
import FormData from '../components/contas/FormData';

const expenses = [
    'Racing car sprays burning fuel into crowd.',
];

const { Title } = Typography;

export default withPageAuthRequired(function SSRPage() {
    const [container, setContainer] = useState(null);
    const { openNotification } = useContext(NotificationContext);
    const [openFormData, setOpenFormData] = useState(false);

    return (
        <div className="scrollable-container" ref={setContainer}>
            <Affix target={() => container}>
                <Row justify="space-between">
                    <Col span={20}>
                        <Title>Contas</Title>
                    </Col>
                    <Col span={1}>
                        <Tooltip title="Nova Despesa">
                            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => setOpenFormData(true)} />
                        </Tooltip>
                    </Col>
                </Row>
            </Affix>
            <Row justify="space-between">
                <Col span={24}>
                    <DataList expenses={expenses} />
                </Col>
                <FormData closeModal={() => setOpenFormData(false)} openFormData={openFormData} openNotification={openNotification} />
            </Row>
        </div>
    );
});
