//Slug is the unique id on each case study in contentful
export const getProjectCards = (slug) => {
    // console.log(slug.slug);

    const query = `
  {
      cardsCollection(where: { slug: "${slug.slug}" }) {
        items {
          cards
        }
      }
    }
    `
    console.log(query);
    return (window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authenticate the request
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
            if (errors) {
                console.error(errors);
            }
            return data;
        }))
}