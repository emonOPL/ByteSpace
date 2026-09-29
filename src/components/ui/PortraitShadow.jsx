import { Fragment } from 'react'

const layers = [
  { dx: 0.518, dy: 0.741, blur: 1.518, opacity: 0.04 },
  { dx: 2.233, dy: 3.19, blur: 2.862, opacity: 0.06 },
  { dx: 5.383, dy: 7.69, blur: 4.786, opacity: 0.07 },
  { dx: 10.208, dy: 14.582, blur: 8.044, opacity: 0.08 },
  { dx: 16.946, dy: 24.209, blur: 12, opacity: 0.09 },
  { dx: 25.838, dy: 36.912, blur: 18, opacity: 0.1 },
  { dx: 37.122, dy: 53.032, blur: 28, opacity: 0.105 },
  { dx: 51.038, dy: 72.912, blur: 36, opacity: 0.13 },
]

export default function PortraitShadow() {
  return (
    <svg aria-hidden="true" className="absolute size-0">
      <filter
        id="portrait-shadow"
        x="-20%"
        y="-20%"
        width="160%"
        height="160%"
        colorInterpolationFilters="sRGB"
      >
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="alpha"
        />
        {layers.map((layer, index) => (
          <Fragment key={layer.blur}>
            <feOffset in="alpha" dx={layer.dx} dy={layer.dy} />
            <feGaussianBlur stdDeviation={layer.blur} />
            <feColorMatrix
              values={`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${layer.opacity} 0`}
              result={`shadow-${index}`}
            />
          </Fragment>
        ))}
        <feMerge>
          {layers.map((layer, index) => (
            <feMergeNode key={layer.blur} in={`shadow-${index}`} />
          ))}
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </svg>
  )
}
