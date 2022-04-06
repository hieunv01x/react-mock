import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Form, Input, Select } from 'antd';
import { updateUser, createUser } from 'actions/dataActions';

export function UpdateModal({ showModal, toggleModal, data, mode }) {
    const dispatch = useDispatch();
    const { Option } = Select;
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const handleSubmit = () => {
        form
            .validateFields()
            .then((values) => {
                onSubmit(values);
                form.resetFields();
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    }

    const onSubmit = (user) => {
        if (mode === 'edit') {
            dispatch(updateUser({ user: user }));
        } else if (mode === 'create') {
            dispatch(createUser({ user: user }));
        }
        toggleModal();
    };

    const validateNumber = (e) => {
        if (e.which < 48 || e.which > 57) e.preventDefault();
    }

    useEffect(() => {
        form.resetFields();
        form.setFieldsValue({
            id: data.id,
            name: data.name,
            description: data.description,
            watchers: data.watchers,
            language: data.language,
            open_issues: data.open_issues,
            private: data.private
        })
    }, [form, data])

    return (
        <Modal visible={showModal} title='Edit modal' okText={`${mode === 'edit' ? 'Update' : 'Create'}`} getContainer={false}
            onCancel={toggleModal} onOk={handleSubmit} forceRender >
            <Form {...formItemLayout} form={form}
                layout="horizontal" name="updateForm" autoComplete="off" >
                <Form.Item name="id" label="ID" hidden={mode === 'edit' ? false : true} >
                    <Input placeholder="Please input ID" disabled={mode === 'edit'} />
                </Form.Item>
                <Form.Item name="name" label="Name"
                    rules={[{ required: true, message: 'Please input name!' }]}>
                    <Input placeholder="Please input name" />
                </Form.Item>
                <Form.Item name="description" label="Description"
                    rules={[{ required: true, message: 'Please input description!' }]}>
                    <Input placeholder="Please input description" />

                </Form.Item>
                <Form.Item name="watchers" label="Watchers"
                    rules={[{ required: true, message: 'Please input watchers!' }]}>
                    <Input placeholder="Please input watchers" type='number'
                        onKeyPress={validateNumber} />
                </Form.Item>
                <Form.Item name="language" label="Language"
                    rules={[{ required: true, message: 'Please input language!' }]}>
                    <Input placeholder="Please input language" />
                </Form.Item>
                <Form.Item name="open_issues" label="Open issues"
                    rules={[{ required: true, message: 'Please input open issues!' }]}>
                    <Input placeholder="Please input open issues" type='number'
                        onKeyPress={validateNumber} />
                </Form.Item>
                <Form.Item name="private" label="Private"
                    rules={[{ required: true, message: 'Please select type of private!' }]}>
                    <Select placeholder="Please select type of private" allowClear >
                        <Option value={true} >True</Option>
                        <Option value={false} >False</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export function DeleteModal({ showModal, toggleModal, handleDelete }) {
    return (
        <Modal title='Delete modal' visible={showModal} okText='Delete'
            onOk={handleDelete} okType='danger primary' onCancel={toggleModal} >
            <p>Are you sure to delete it?</p>
        </Modal>
    )
}