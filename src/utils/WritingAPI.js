const WP_API =
  'http://www.elacrain.com/wp/wp-json/wp/v2/posts?fields=id,content,title,status,categories,tags,acf';

const headers = {
  Accept: 'application/json'
  // Authorization: token
};

//TODO: Implement API for Wordpress Writing posts

export const getAllPosts = () => {
  return fetch(`${WP_API}`, { headers })
    .then(res => res.json())
    .then(data =>
      data.map(post => {
        return {
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt,
          content: post.content.rendered,
          status: post.status,
          tags: post.tags,
          categories: post.categories,
          fields: post.acf
        };
      })
    );
};
