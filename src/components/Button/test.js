import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from './index';

describe('Button', () => {

  const props = {
    onClick: () => {
      //dummy function
    }
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button { ...props }>Give Me More</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button { ...props }>Search</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});