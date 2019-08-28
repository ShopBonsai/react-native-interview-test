// libraries
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// components
import CardMovie from '../../components/CardMovie'
import CarouselMovie from '../../components/CarouselMovie'

// actions
import { fetchMovies } from '../../redux/actions/movies'

// styles
import { FeedContainer, FeedContent } from './Feed.styles'


/**
 * The renderCarouselItems it's
 * responsible by to render a array of cardmovie
 *
 * @param {Array} item
 * @returns {Array(JSX.Element)}
 */
export function renderCarouselItems(item = null) {
  if (!item || item.length === 0) return null
  return item.map(({ image, title, id }) => (
    <CardMovie
      key={id}
      title={title}
      thumbnail={image}
    />
  ))
}
/**
   * The renderCarousel it's responsible by to render
   * a carousel by genre
   *
   * @param {object} { item }
   * @returns {JSX.Element}
   */
export function renderCarousel({ item } = {}) {
  if (!item) return null
  return item && (
    <CarouselMovie
      key={item.genre}
      title={item.genre}
      items={renderCarouselItems(item.items)}
    />
  )
}

/**
 * The Feed it's function component responsible by
 * to render the screen feed
 *
 * @export {Fucntion}
 * @returns {JSX.Element}
 */
export default function Feed() {
  // redux by hooks
  const data = useSelector(({ movieReducer }) => movieReducer.data)
  const dispatch = useDispatch()

  /** **
   *  useEffect as "did mount"
   */
  useEffect(() => {
    dispatch(fetchMovies(0, 20))
  }, [])

  // Main return
  return (
    <FeedContainer>
      <FeedContent data={data} renderItem={item => renderCarousel(item)} />
    </FeedContainer>
  )
}
