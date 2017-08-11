//const api = "https://reactnd-books-api.udacity.com"

// const headers = {
//   Accept: "application/json",
//   Authorization: token
// };

//TODO: Implement API for Wordpress Writing posts

// export const getPost = (postId) =>
//   fetch(`${api}/posts/${postId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)

export const getAllPosts = () =>
  new Promise((resolve, reject) =>
    resolve([
      {
        id: 1,
        title: 'Bond of Marriage',
        excerpt:
          'I’m used to always deciding everything myself. It’s a blessing, but also a terrible defect.',
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
// fetch(`${api}/posts`, { headers })
//   .then(res => res.json())
//   .then(data => data.books)
