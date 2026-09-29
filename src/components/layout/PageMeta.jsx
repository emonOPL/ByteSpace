export default function PageMeta({ title, description }) {
  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </>
  )
}
