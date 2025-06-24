
export default async function Home() {

  const fetchUrl = "http://localhost:8080/wp-json/wp/v2/works/"
  const data = await fetch(fetchUrl)
  const posts = await data.json()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {
          posts.map(post => (
            <div key={post.slug}>
              <h2>Title: {post.title.rendered}</h2>
              <p className="mb-2">Slug: {post.slug}</p>
              <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </div>
          ))
        }
      </main>
      
    </div>
  );
}
