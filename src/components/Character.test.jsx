  import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character image="a nice little tree" name="hey" description="Ross" />);
    expect(wrapper).toMatchSnapshot();
  });
});
