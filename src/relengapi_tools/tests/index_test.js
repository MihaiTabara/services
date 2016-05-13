import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Link } from 'react-router'
import { shallow } from 'enzyme'

import { Layout, Routes } from './../src/app'

const expect = chai.expect;

chai.use(chaiEnzyme())

describe('<Layout />', () => {

  it('renders nav and main element', () => {
    const wrapper = shallow(<Layout/>);
    expect(wrapper.find('nav')).to.have.length(1);
    expect(wrapper.find('main')).to.have.length(1);
  });

  it('renders <Link/> elements for all routes', () => {
    const wrapper = shallow(<Layout/>);
    expect(wrapper.find(Link)).to.have.length(Routes.length);
  });

});
