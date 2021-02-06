import { getGifs } from '../../helpers/getGifs';

jest.setTimeout(10000);

describe('Pruebas en getGifs Fetch', () => {


    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe( 10 );
    });

    test('No debe traer ningún elemento', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

});