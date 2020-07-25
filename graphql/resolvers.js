import { getMovies, getById, deleteMovie, addMovie } from './db';

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating)  
    }
}

export default resolvers;