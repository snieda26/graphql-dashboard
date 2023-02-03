





import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'Crime' },
    { id: '2', name: '1984', genre: 'Sci-Fi' },
    { id: 3, name: 'V for vendetta', genre: 'Sci-Fi-Triller' },
    { id: 4, name: 'Snatch', genre: 'Crime-Comedy' },
];

const MovieType = new GraphQLObjectType({
    name: "Movie",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // it doesn't work for unknown reason. It returns null now 
                return movies.find(movie => movie.id == args.id);
            }
        }
    }

});

export default new GraphQLSchema({
    query: Query
})
