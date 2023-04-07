// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, updateActiveThumbId, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const activeThumbClassName = isActive ? 'active-img' : 'inactive-img'

  const onClickThumb = () => {
    updateActiveThumbId(id)
  }

  return (
    <li className="li">
      <button type="button" className="btn" onClick={onClickThumb}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
