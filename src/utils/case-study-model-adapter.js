
const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`
export const getCaseStudyModel = () => {
    let items = {};
    window
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
            items = data.pageCollection.items[0];
        })

    return items;

    // const title = page.title;
    // const logo = page.logo.url;
    // return items;
    // if (!page) {
    //     return "Loading...";
    // }

}