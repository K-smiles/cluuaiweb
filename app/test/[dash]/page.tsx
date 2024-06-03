export default function Page({ params }: { params: { slug: string } }) {
  return <div>My dash root: {params.slug}</div>
}