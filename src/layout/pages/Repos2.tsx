import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { fetchData, deleteUser } from 'actions/dataActions';
import { UpdateModal } from 'components/UpdateModal';
import { DeleteModal } from 'components/DeleteModal';
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
    private: 'false',
  };
  const dataRepos = useSelector((state: RootStateOrAny) => state.dataReducer.dataRepos);
  const [values, setValues] = useState(initialUser);
  const [mode, setMode] = useState('edit');
  // Edit modal
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // Create modal
  const handleCreate = () => {
    setMode('create');
    setValues(initialUser);
    toggleModal();
  };

  const handleEdit = (user: any) => {
    setMode('edit');
    setValues({
      id: user.id,
      name: user.name,
      description: user.description,
      watchers: user.watchers,
      language: user.language,
      open_issues: user.open_issues,
      private: user.private,
    });
    toggleModal();
  };

  // Delete modal
  const [delId, setDelId] = useState(0);
  const [showDelModal, setShowDelModal] = useState(false);
  const toggleDeleteModal = () => setShowDelModal(!showDelModal);
  const onDeleteClick = (record: any) => {
    setDelId(record.id);
    toggleDeleteModal();
  };
  const handleDelete = () => {
    dispatch(deleteUser({ id: delId }));
    toggleDeleteModal();
  };

  useEffect(() => {
    if (!dataRepos.length) {
      dispatch(fetchData());
    }
  }, [dataRepos, dispatch]);

  return (
    <div className="container">
      <div className="content">
        <div className="btn-create-wrapper">
          <Button type="primary" size="large" icon={<PlusOutlined />} onClick={handleCreate}>
            Create
          </Button>
        </div>
        <Space>
          <Table dataRepos={dataRepos} handleEdit={handleEdit} onDeleteClick={onDeleteClick} />
        </Space>
      </div>
      <UpdateModal showModal={showModal} toggleModal={toggleModal} data={values} mode={mode} />
      <DeleteModal showModal={showDelModal} toggleModal={toggleDeleteModal} handleDelete={handleDelete} />
    </div>
  );
}

export default Repos2;
