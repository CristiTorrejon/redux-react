import {
  CLOSE_MODAL,
  OPEN_MODAL, 
  SEARCH_VIDEO,
  SEARCH_ASYNC_VIDEO,
  IS_LOADING
} from '../action-types/index';

export function openModal(id) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId: id
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function searchVideo(query) {
  return {
    type: SEARCH_VIDEO,
      payload: {
        query
      }
  }
}

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncVideos(query) {
  return (dispatch) => {
    dispatch(isLoading(true))

    setTimeout(()=> {

      dispatch(isLoading(false))
      dispatch(searchVideo(query))

    }, 5000)
  }
}