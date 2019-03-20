// eslint-disable-next-line react/react-in-jsx-scope
import React from 'react';
import Header from './index.js'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const headerData = {
  headerData: {
    name: 'name',
    apellidos: 'apellidos',
  }
}

describe('first test', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header headerData={headerData} />)
  });
  it('Shoul render the component', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('Should render the profession', () => {
    const H4 = wrapper.find('Fonts__H4')

    expect(H4.children().text()).toBe('Chef ejecutivo');
  });

});