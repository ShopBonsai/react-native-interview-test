// libraries
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// components
import CardMovie from '../../components/CardMovie'
import CarouselMovie from '../../components/CarouselMovie'

// actions
import { fetchMovies } from '../../redux/actions/movies'

// styles
import { FeedContainer, FeedContent, FeedEmptyList } from './Feed.styles'
import LoadingSpinner from '../../components/LoadingSpinner'


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
      key={item.key.toString()}
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
  const { data, isLoading, noMoreItems } = useSelector(({ movieReducer }) => movieReducer)
  const dispatch = useDispatch()
  const [skip, setSkip] = useState(0)
  /** **
   *  useEffect as "did mount"
   */
  useEffect(() => {
    dispatch(fetchMovies(skip, 15))
  }, [skip])

  // Load more items
  const loadMore = () => (!noMoreItems && !isLoading ? setSkip(skip + 1) : null)

  // Main return
  return (
    <FeedContainer>
      <FeedContent
        keyExtractor={({ key }) => key.toString()}
        data={data}
        renderItem={item => renderCarousel(item)}
        onEndReached={() => loadMore() }
        onEndReachedThreshold={10}
        onRefresh={() => setSkip(0)}
        initialNumToRender={15}
        refreshing={isLoading && data.length > 0}
        ListEmptyComponent={ () => (
          !isLoading && data.length === 0 ? <FeedEmptyList>Oops! No data :/ </FeedEmptyList> : null
        )}
      />
      { isLoading && data.length === 0 && <LoadingSpinner />}
    </FeedContainer>
  )
}
