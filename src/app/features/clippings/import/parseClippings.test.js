import { parseText } from './parseClippings';

const clippingsTxtMock = `Homo Deus: A Brief History of Tomorrow (Yuval Noah Harari)
- Highlight Loc. 5919-21  | Added on Wednesday, May 19, 2021, 05:07 PM

1.  Are organisms really just algorithms, and is life really just data processing? 2.  What’s more valuable – intelligence or consciousness? 3.  What will happen to society, politics and daily life when non-conscious but highly intelligent algorithms know us better than we know ourselves?
==========
The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, Too (Dan Luca)
- Highlight Loc. 944-46  | Added on Wednesday, May 19, 2021, 10:24 PM

You use photo reading to read one book every 30 minutes. It’s a revolutionary technique, developed by Paul Scheele, that uses the whole brain to read and allows you to extract the essential knowledge from a book in the shortest time possible. It can literally change your life. I’m not kidding!
==========
Ludzie bezdomni (Stefan Żeromski)
- Note Loc. 2809  | Added on Saturday, May 09, 2015, 02:23 PM

Często mi się zdaje, że ludzie mają jakieś ukryte podobieństwo ze zwierzętami: osobniki wyróżniające się prześladują jednomyślnie, a bez porozumienia między sobą, jakimś odruchem stadowym. 
==========
The Force Awakens (Star Wars) (Alan Dean Foster)
- Note on Page 26 | Loc. 385  | Added on Monday, December 21, 2015, 11:51 PM

1
==========
`;

const expectedQuotes = {
    '5e1e56d5-8d2a-56a0-a3a9-8a2cf1cbbc0b': {
        raw: 'homodeus:abriefhistoryoftomorrow',
        book: 'Homo Deus: A Brief History of Tomorrow ',
        author: 'Yuval Noah Harari',
        quote: '1.  Are organisms really just algorithms, and is life really just data processing? 2.  What’s more valuable – intelligence or consciousness? 3.  What will happen to society, politics and daily life when non-conscious but highly intelligent algorithms know us better than we know ourselves?',
        location: '5919-21',
        time: 'Wednesday, May 19, 2021, 05:07 PM',
        favourite: false,
        deleted: false,
    },
    'b5550cb3-45f9-54cf-ad34-9cd5c75714ba': {
        raw: 'ludziebezdomni',
        book: 'Ludzie bezdomni ',
        author: 'Stefan Żeromski',
        quote: 'Często mi się zdaje, że ludzie mają jakieś ukryte podobieństwo ze zwierzętami: osobniki wyróżniające się prześladują jednomyślnie, a bez porozumienia między sobą, jakimś odruchem stadowym. ',
        location: '2809',
        time: 'Saturday, May 09, 2015, 02:23 PM',
        favourite: false,
        deleted: false,
    },
    '9e12a1f7-b63c-50c6-a73d-0d0850200f02': {
        raw: 'the5a.m.revolution:whyhighachieverswakeupearlyandhowyoucandoit,too',
        book: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, Too ',
        author: 'Dan Luca',
        quote: 'You use photo reading to read one book every 30 minutes. It’s a revolutionary technique, developed by Paul Scheele, that uses the whole brain to read and allows you to extract the essential knowledge from a book in the shortest time possible. It can literally change your life. I’m not kidding!',
        location: '944-46',
        time: 'Wednesday, May 19, 2021, 10:24 PM',
        favourite: false,
        deleted: false,
    },
};

test('parseClippings', () => {
    const quotes = parseText(clippingsTxtMock);
    expect(quotes).toEqual(expectedQuotes);
});
