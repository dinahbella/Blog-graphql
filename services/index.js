import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            car {
              bio
              id
              name
              image {
                url
              }
            }
            createdAt
            slug
            title
            except
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await fetch(graphqlAPI, query);
};
