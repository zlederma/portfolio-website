const query = `
{
    caseStudyCollection(where: { slug: "instacart" }) {
      items {
        body
      }
    }
  }
  `

export const getCaseStudyModel = () => {
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