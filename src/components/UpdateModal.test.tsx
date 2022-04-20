import React from 'react';
import { shallow, mount } from 'enzyme';
import UpdateModal from './UpdateModal';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

test('renders with shallow', () => {
  const store = mockStore({
    isShowForm: true,
  });

  const component = shallow(
    <Provider store={store}>
      <UpdateModal showModal={true} toggleModal={() => {}} data={undefined} mode={''}/>
    </Provider>
  );

  console.log(component.html())
});

// test('renders with mount', () => {
//   const store = mockStore({
//     isShowForm: true,
//   });

//   const component = mount(
//     <Provider store={store}>
//       <UpdateModal showModal={true} toggleModal={() => {}} data={undefined} mode={''}/>
//     </Provider>
//   );
  
//   console.log(component)
// });