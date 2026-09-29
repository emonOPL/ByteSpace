export default function AuthHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="text-body-l text-persian-blue-800">{eyebrow}</p>
      <h1 className="font-heading text-heading-s text-shuttle-gray-950 sm:text-heading-m">
        {title}
      </h1>
    </div>
  )
}
