import { createBoard } from '@wixc3/react-board';
import { Poipio } from '../../../components/poipio/poipio';

export default createBoard({
    name: 'Poipio',
    Board: () => <Poipio />,
    isSnippet: true,
});
