import React from 'react';

import bancos from 'bancos-brasileiros';
import { Avatar, Checkbox, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select } from 'antd';
import moment from 'moment';

import { currencyFormater, currencyParser } from '../../utils/utils';

const { Option } = Select;


const FormData = ({ closeModal, openFormData, openNotification }) => {
    const [form] = Form.useForm();

    const submit = () => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            values.value = parseFloat((values.value / 100).toFixed(2))
            console.log(values) //Prontinho pra submeter :)

            openNotification('Sucesso', 'Despesa registrada', 'success')
            closeModal()
          });
    }

    return (
        <Modal title="Nova despesa" visible={openFormData} onOk={submit} onCancel={closeModal}>
            <Form
                form={form}
                name="expenses"
                layout='vertical'
                initialValues={{ paid: true }}
                autoComplete="off"
            >
                <Row justify="space-between">
                    <Col span={24}>
                        <Form.Item
                            label="Descrição"
                            name="description"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item
                            label="Valor"
                            name="value"
                            rules={[{ required: true, message: 'Precisa de um valor' }]}
                        >
                            <InputNumber
                                addonBefore="R$"
                                defaultValue={0}
                                parser={currencyParser}
                                formatter={currencyFormater}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Data" name="date">
                            <DatePicker defaultValue={moment(new Date(), "YYYY-MM-DD")} style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item label="Conta/Cartão" name="acccount_credit_card">
                            <Select showSearch filterOption={(input, option) => option.children[2].toLowerCase().includes(input.toLowerCase())}>
                                {bancos.map(banco =>
                                    <Option key={banco.COMPE} value={banco.COMPE}>
                                        <Avatar size="small" src={`https://s2.googleusercontent.com/s2/favicons?domain=${banco.Url}`} /> {banco.ShortName}
                                    </Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Categoria" name="category">
                            <Select>
                                {bancos.map(banco =>
                                    <Option key={banco.COMPE} value={banco.COMPE}>{banco.ShortName}</Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name="paid" valuePropName="checked">
                    <Checkbox>Pago?</Checkbox>
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default FormData