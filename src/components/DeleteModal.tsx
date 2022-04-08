import React from 'react';
import { Modal } from 'antd';

export interface Props {
    showModal: boolean;
    toggleModal: () => void;
    handleDelete: () => void;
}

export function DeleteModal({ showModal, toggleModal, handleDelete }: Props) {
    return (
        <Modal title='Delete modal' visible={showModal} okText='Delete'
            onOk={handleDelete} okType='danger' onCancel={toggleModal} >
            <p>Are you sure to delete it?</p>
        </Modal>
    )
}