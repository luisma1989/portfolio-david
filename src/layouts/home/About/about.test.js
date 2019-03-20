// eslint-disable-next-line react/react-in-jsx-scope
import React from 'react';
import About from './index.js'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const aboutData = {
  title: 'title',
  text: 'text',
  header: 'header'
}

describe('About:', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<About aboutData={aboutData} />)
  });
  it('Render the about component', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Should render a image', () => {
    const img = wrapper.find('img');

    expect(img.props().src).toBe('lemon.jpg');
    expect(img.props().alt).toBe(aboutData.title);
  });
  it('Should render a title', () => {
    const title = wrapper.find('styles__Title')

    expect(title.text()).toBe(aboutData.title)
  })
  it('Should render a text', () => {
    const text = wrapper.find('p')

    expect(text.text()).toBe(aboutData.text)
  })
})

