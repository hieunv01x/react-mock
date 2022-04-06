import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { fetchData, deleteUser } from 'actions/dataActions';
import { UpdateModal, DeleteModal } from 'components/Modal'
import Table from 'components/Table';

function Repos2() {
    const dispatch = useDispatch();
    const initialUser = {
        id: '',
        name: '',
        description: '',
        watchers: 0,
        language: '',
        open_issues: 0,
        private: 'false'
    };
    const dataRepos = useSelector((state) => state.dataReducer.dataRepos);
    const [values, setValues] = useState(initialUser);
    const [mode, setMode] = useState('edit');

    // Create modal
    const handleCreate = () => {
        setMode('create');
        setValues(initialUser);
        toggleModal();
    }

    // Edit modal
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    const handleEdit = (user) => {
        setMode('edit');
        setValues({
            id: user.id,
            name: user.name,
            description: user.description,
            watchers: user.watchers,
            language: user.language,
            open_issues: user.open_issues,
            private: user.private
        });
        toggleModal();
    };

    // Delete modal
    const [delId, setDelId] = useState(0);
    const [showDelModal, setShowDelModal] = useState(false);
    const toggleDeleteModal = () => setShowDelModal(!showDelModal);
    const onDeleteClick = (record) => {
        setDelId(record.id);
        toggleDeleteModal();
    }
    const handleDelete = () => {
        dispatch(deleteUser({ id: delId }));
        toggleDeleteModal();
    }

    useEffect(() => {
        if (!dataRepos.length) {
            dispatch(fetchData());
        }
    }, [dataRepos, dispatch])

    return (
        <>
            <div className='container'>
                <div className='content'>
                    <div className='btn-create-wrapper' >
                        <Button type='primary' size='large' icon={<PlusOutlined />} onClick={handleCreate} >Create</Button>
                    </div>
                    <Space >
                        <Table dataRepos={dataRepos} handleEdit={handleEdit} onDeleteClick={onDeleteClick} />
                    </Space>
                </div>
                <UpdateModal showModal={showModal} toggleModal={toggleModal} data={values} mode={mode} />
                <DeleteModal showModal={showDelModal} toggleModal={toggleDeleteModal} handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default Repos2;