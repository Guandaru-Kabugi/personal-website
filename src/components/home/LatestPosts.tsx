import { useLatestPosts } from '../../hooks/usePublicData'
import { Card, CardGrid, TagList } from '../ui/Card'
import Section from '../ui/Section'
import Skeleton from '../ui/Skeleton'

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

export default function LatestPosts() {
  const { data: posts, isLoading } = useLatestPosts(3)

  return (
    <Section id="blog" eyebrow="03 / writing" title="Latest posts">
      <CardGrid>
        {isLoading
          ? [1, 2, 3].map((n) => (
              <Card key={n} aria-hidden="true">
                <Skeleton width="40%" height="0.8rem" style={{ marginBottom: '1rem' }} />
                <Skeleton width="85%" height="1.3rem" style={{ marginBottom: '1rem' }} />
                <Skeleton style={{ marginBottom: '0.5rem' }} />
                <Skeleton width="70%" />
              </Card>
            ))
          : posts?.map((post) => (
              // Will become <Link to={`/blog/${post.slug}`}> once the blog page exists.
              <Card key={post.id} hoverable>
                <p className="mb-3 font-mono text-xs text-muted">
                  {dateFormat.format(new Date(post.publishedAt))} · {post.readingMinutes} min read
                </p>
                <h3 className="mb-2.5 text-lg">{post.title}</h3>
                <p className="mb-5 flex-1 text-muted">{post.excerpt}</p>
                <TagList tags={post.tags} />
              </Card>
            ))}
      </CardGrid>
    </Section>
  )
}
