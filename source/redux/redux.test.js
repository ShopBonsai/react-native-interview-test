
import { fetchMovies, mapMovies } from './actions/movies'
import { ERROR_MOVIE_REQUEST, SUCCESS_MOVIE_REQUEST, START_MOVIE_REQUEST } from './reducers/moviesReducer'

const expectedTypes = {
  ERROR_MOVIE_REQUEST,
  SUCCESS_MOVIE_REQUEST,
  START_MOVIE_REQUEST
}

describe('Redux tests', () => {
  it('Testing fetchMovie', async () => {
    expect.assertions(4)
    function dispatch(action) {
      expect(action).toBeInstanceOf(Object)
      expect(action.type).toBe(expectedTypes[action.type])
    }
    await fetchMovies()(dispatch)
  })

  it('Testing mapMovies when with empty array', () => {
    const result = mapMovies([], 'whatever')
    expect(result).toEqual([])
  })

  it('Testing mapMovies with array', () => {
    const items = [
      {
        _id: {
          $oid: '5b8701a1fc13ae6569000000'
        },
        title: 'Long Live Death (Viva la muerte)',
        genre: 'Drama|War',
        price: 28.704,
        inventory: 4,
        image: 'http://dummyimage.com/1459x751.png/cc0000/ffffff',
        date: '2017-09-27T05:06:56Z'
      },
      {
        _id: {
          $oid: '5b8701a1fc13ae6569000001'
        },
        title: 'Home',
        genre: 'Drama',
        price: 10.622,
        inventory: 3,
        image: 'http://dummyimage.com/1567x1523.jpg/dddddd/000000',
        date: '2017-12-10T15:20:41Z'
      },
      {
        _id: {
          $oid: '5b8701a1fc13ae6569000002'
        },
        title: 'Russian Specialist, The (Mechanik, The)',
        genre: 'Action|Drama|Thriller',
        price: 14.292,
        inventory: 4,
        image: 'http://dummyimage.com/693x461.png/ff4444/ffffff',
        date: '2018-08-29T23:22:08Z'
      }
    ]
    const result = mapMovies(items, 'genre')
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          genre: expect.any(String),
          items: expect.any(Array)
        })
      ])
    )
    expect(result).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          genre: expect.any(Number),
          items: expect.any(Object)
        })
      ])
    )
  })
})
