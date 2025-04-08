import styles from "@/app/styles.module.css"
import stylesWorks from "./stylesWorks.module.css"
import Link from "next/link"

export default async function Page() {

    const endpoint ='https://bstinc.co.jp/wp-json/wp/v2/works/'

    const data = await fetch(endpoint)
    const posts = await data.json()

    console.log(posts[0])

    return (
        <main className={`${styles.main} ${stylesWorks.mainWorks}`}>
            <section className={styles.section}>
                <h1 className="font-bold font-display">制作実績</h1>
                
            </section>
            <section className={styles.section}>
                <ol className={stylesWorks.listWorks}>
                {
                    posts.map((post) => (
                        <li className={stylesWorks.itemWorks} key={post.title.rendered}>
                            <Link
                                href={post.link}
                            >
                                <h2>{post.title.rendered}</h2>
                                <p>{post.acf.description_text}</p>
                                <time dateTime={post.date}>{post.date}</time>
                            </Link>
                        </li>

                    ))
                }
                </ol>
                
            </section>

            



       
        </main>
    );
}