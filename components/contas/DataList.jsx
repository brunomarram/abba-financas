

import React, { useState } from 'react';

import { BellOutlined, MoreOutlined } from '@ant-design/icons';
import { List, Avatar, Button, Dropdown, Typography } from 'antd';
import menu from '../../utils/userMenuOptions';

const { Paragraph, Text } = Typography;

const DataList = ({ expenses }) => {
    const [editableStr, setEditableStr] = useState('This is an editable text.');

    return (
        <List
            size="small"
            dataSource={expenses}
            renderItem={item => (
                <List.Item key={item}>
                    <List.Item.Meta
                        avatar={<Avatar icon={<BellOutlined />} />}
                        title={<Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>}
                        description={item}
                    />
                    <div className='value-with-menu'>
                        <Text type="success">12,90</Text>
                        <Dropdown overlay={menu} trigger='click'>
                            <Button type="link">
                                <MoreOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </List.Item>
            )}
        />
    )
}

export default DataList