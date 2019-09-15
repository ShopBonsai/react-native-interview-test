interface Movie {
  _id: {
    $oid: string;
  };
  title: string;
  genre: string;
  price: number;
  inventory: number;
  image: string;
  date: string;
}

export default Movie;
