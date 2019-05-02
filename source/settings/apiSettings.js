const baseUrl = `https://us-central1-bonsai-interview-endpoints.cloudfunctions.net`;

const apiSettings = {
  getMovieList: (skip, limit) => `${baseUrl}/movieTickets?skip=${skip}&limit=${limit}`,
};

export { apiSettings };
