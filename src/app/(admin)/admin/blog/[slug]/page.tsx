interface Props {
  params: {
    slug: string;
  };
}
export default function AdminBlogDetailPage({ params }: Props) {
  const { slug } = params;
  return <div>AdminBlogDetailPage {slug}</div>;
}
