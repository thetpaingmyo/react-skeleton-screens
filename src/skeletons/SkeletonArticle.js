import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonArticle = ({ theme }) => {
  return (
    <div className={`skeleton-wrapper ${theme || 'light'}`}>
      <div className="skeleton-article">
        <SkeletonElement type='title' />
        {Array(3).fill().map((_, i) => (
          <SkeletonElement key={i} type='text' />)
        )}
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonArticle
