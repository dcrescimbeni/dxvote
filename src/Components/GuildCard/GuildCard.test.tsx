import GuildCard from './GuildCard';
import GuildCardHeader from './GuildCardHeader';
import GuildCardContent from './GuildCardContent';
import { render } from '../../utils/tests';
import '@testing-library/jest-dom';
import { validAddress, nullAddress } from './fixture';

describe('GuildCard', () => {
  it('Should render properly with a guild address', async () => {
    const { container } = render(
      <GuildCard {...validAddress}>
        <GuildCardHeader></GuildCardHeader>
        <GuildCardContent></GuildCardContent>
      </GuildCard>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render properly with a null guild address', async () => {
    const { container } = render(
      <GuildCard {...nullAddress}>
        <GuildCardHeader></GuildCardHeader>
        <GuildCardContent></GuildCardContent>
      </GuildCard>
    );

    expect(container).toMatchSnapshot();
  });
});
