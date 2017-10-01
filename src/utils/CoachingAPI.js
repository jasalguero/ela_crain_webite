const EVENTBRITE_URL = `https://www.eventbriteapi.com/v3/events/search/?organizer.id=14279858158&token=4EE6S6T6BO2ZFRBNCOLU&expand=venue`;

const headers = {
  Accept: 'application/json'
  // Authorization: token
};

//TODO: Implement API for Wordpress Writing posts

export const getPost = postId =>
  new Promise((resolve, reject) =>
    resolve({
      id: 1,
      title: 'Bond of Marriage',
      comment:
        'Bond of Marriage is a product of my inner-dilemmas about marriage—an institution I never believed in, yet I happily accepted to take a part. Considering that I wrote this story in 2013, shortly after I got married, I see it as a subconscious justification. It’s as if I’m telling myself, “Marriage is not an irreversible condition, Ela”. The real threat would be the marriage options in Mila and Rodin’s world.',
      head: '“Maybe we should postpone getting married, Mila.',
      excerpt:
        'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
      audio: 'SPOTIFY_LINK',
      content: `I don’ t think I’m ready yet,”I said, looking at my own reflection. I’ d been practising in front of the mirror for a while. Though the words were the same, my voice was always different: resentful, distressed, or even cranky.

This time, though, I wasn’ t standing in front of the mirror in our bathroom, but looking at a piece of reflective glass moulded into an office wall. A bald, stocky marriage consultant was sitting across the table. Mila, sitting at my side, was devastated, close to tears, and she had every right to be. Of all those attempts to say the words, this was the worst. My voice sounded weak, like the whine of a mosquito—high-pitched and irritating. 
He pasted a positive expression on his face. He could have said he was going back home to spend time with his grandchildren this evening. I knew this would be a lie, though, and he knew that I knew. 

As we were about to leave the consultation room, he said quietly, “I haven't wanted a child that badly, Mr Marko.”`,
      image1: '',
      image2: '',
      image3: ''
    })
  );
//   fetch(`${api}/posts/${postId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)

export const getAllPosts = () =>
  new Promise((resolve, reject) =>
    resolve([
      {
        id: 1,
        title: 'Bond of Marriage',
        comment:
          'Bond of Marriage is a product of my inner-dilemmas about marriage—an institution I never believed in, yet I happily accepted to take a part. Considering that I wrote this story in 2013, shortly after I got married, I see it as a subconscious justification. It’s as if I’m telling myself, “Marriage is not an irreversible condition, Ela”. The real threat would be the marriage options in Mila and Rodin’s world.',
        head: '“Maybe we should postpone getting married, Mila.',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        audio: 'SPOTIFY_LINK',
        content: `I don’ t think I’m ready yet,”I said, looking at my own reflection. I’ d been practising in front of the mirror for a while. Though the words were the same, my voice was always different: resentful, distressed, or even cranky.

He pasted a positive expression on his face. He could have said he was going back home to spend time with his grandchildren this evening. I knew this would be a lie, though, and he knew that I knew. 

As we were about to leave the consultation room, he said quietly, “I haven't wanted a child that badly, Mr Marko.”`,
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 2,
        title: 'Kuiper Court',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 3,
        title: 'Ru',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 4,
        title: 'The White Clinic',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 5,
        title: 'Coda',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 6,
        title: 'On the Verge',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 7,
        title: 'Ordinarily Human',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 8,
        title: 'Reckoning',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 9,
        title: 'The Palette',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 10,
        title: 'The Quest for God',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 11,
        title: 'The Temptress',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 12,
        title: 'Two Hills',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      },
      {
        id: 13,
        title: 'Uninhabited Body',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
        image1: '',
        image2: '',
        image3: ''
      }
    ])
  );

export const fetchEventbriteEvents = () => {
  return fetch(`${EVENTBRITE_URL}`, { headers })
    .then(res => res.json())
    .then(data => data.events);
};
