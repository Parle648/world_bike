import React from 'react'
import ContentLoader from 'react-content-loader';

const ImageGrid = () => (
  <ContentLoader
    width={900}
    height={1440}
    viewBox="0 0 900 1440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    >
    <rect x="12" y="0" rx="2" ry="2" width="280" height="500" />
    <rect x="310" y="0" rx="2" ry="2" width="280" height="500" />
    <rect x="610" y="0" rx="2" ry="2" width="280" height="500" />
    
    <rect x="12" y="533" rx="2" ry="2" width="280" height="500" />
    <rect x="310" y="531" rx="2" ry="2" width="280" height="500" />
    <rect x="610" y="529" rx="2" ry="2" width="280" height="500" />

    <rect x="12" y="950" rx="2" ry="2" width="280" height="500" />
    <rect x="310" y="950" rx="2" ry="2" width="280" height="500" />
    <rect x="610" y="950" rx="2" ry="2" width="280" height="500" />

    <circle cx="436" cy="1340" r="12" />
    <circle cx="469" cy="1340" r="12" />
    <circle cx="503" cy="1340" r="12" />
    <rect x="538" y="1328" rx="0" ry="0" width="52" height="24" />
    <rect x="360" y="1328" rx="0" ry="0" width="52" height="24" />
    <circle cx="360" cy="1340" r="12" />
    <circle cx="578" cy="1340" r="12" />
  </ContentLoader>
)

ImageGrid.metadata = {
  name: 'Hassan Tijani.A',
  github: 'surepeps',
  description: 'Image Grid with Pagination',
  filename: 'ImageGrid',
}

export default ImageGrid