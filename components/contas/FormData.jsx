import React from 'react';

import bancos from 'bancos-brasileiros';
import { Avatar, Col, Form, Input, InputNumber, Modal, Row, Select } from 'antd';

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

                openNotification('Sucesso', 'Conta registrada', 'success')
                closeModal()
            });
    }

    const changeName = (compe) => {
        const bank = bancos.find(element => element.COMPE == compe)
        form.setFieldValue('name', bank.ShortName)
    }

    return (
        <Modal title="Nova conta" visible={openFormData} onOk={submit} onCancel={closeModal}>
            <Form
                form={form}
                name="account"
                layout='vertical'
                initialValues={{ }}
                autoComplete="off"
            >
                <Row justify="space-between">
                    <Col span={24}>
                        <Form.Item label="Instituição" name="bank">
                            <Select showSearch filterOption={(input, option) => option.children[2].toLowerCase().includes(input.toLowerCase())} onSelect={changeName}>
                                {bancos.map(banco =>
                                    <Option key={banco.COMPE} value={banco.COMPE}>
                                        <Avatar size="small" src={`https://s2.googleusercontent.com/s2/favicons?domain=${banco.Url}`} /> {banco.ShortName}
                                    </Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item
                            label="Nome"
                            name="name"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Saldo"
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
                </Row>
            </Form>
        </Modal>
    )
}

export default FormData