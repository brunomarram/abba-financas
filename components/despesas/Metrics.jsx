import React from 'react';

import { Col, Statistic } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const Metrics = ({ metrics }) => {
    return (
        <>
            {metrics.map((metric, key) =>
                <Col span={6} key={key}>
                    <Statistic
                        title={metric.title}
                        value={metric.value}
                        precision={2}
                        decimalSeparator=','
                        groupSeparator='.'
                        valueStyle={{ color: 'var(--red)' }}
                        prefix={metric.showArrow && <ArrowUpOutlined />}
                        suffix={metric.type == 'percent' && '%'}
                    />
                </Col>
            )}
        </>
    )
}

export default Metrics