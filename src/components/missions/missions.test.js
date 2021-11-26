import { screen, render as testRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import MissionList from './missions';
import store from '../../redux/configureStore';

const render = (component) => testRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Testing react testing library', () => {
  it('Renders react components correctly', async () => {
    render(<MissionList />);

    const buttons = await screen.findAllByText('Join Mission');
    const badges = await screen.findAllByText('NOT A MEMBER');

    expect(buttons).toHaveLength(10);
    expect(badges).toHaveLength(10);
  });

  it('Changes button and badge text when clicked', async () => {
    render(<MissionList />);

    const joinButtons = await screen.findAllByText('Join Mission');

    userEvent.click(joinButtons[0]);

    const leaveButtons = await screen.findAllByText('Leave Mission');
    const activeBadges = await screen.findAllByText('Active Member');

    expect(leaveButtons).toHaveLength(1);
    expect(activeBadges).toHaveLength(1);
  });
});
