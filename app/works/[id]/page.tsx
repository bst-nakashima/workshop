import styles from "@/app/styles.module.css"
import stylesWorks from "../stylesWorks.module.css"
import Image from "next/image"
import Link from "next/link"
import { postponeWithTracking } from "next/dist/server/app-render/dynamic-rendering";

interface WpPost {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: {
      rendered: string;
    };
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    author: number;
    featured_media: number;
    template: string;
    meta: [];
    acf: {
      project_title: string;
      "catch-copy": string;
      fv_image: string;
      b_headline01: string;
      s_headline01_01: string;
      txt01_01: string;
      s_headline01_02: string;
      txt01_02: string;
      image01: string | false;
      b_headline02: string;
      s_headline02_01: string;
      txt02_01: string;
      s_headline02_02: string;
      txt02_02: string;
      image02: string | false;
      b_headline03: string;
      s_headline03_01: string;
      txt03_01: string;
      s_headline03_02: string;
      txt03_02: string;
      image03: string | false;
      b_headline04: string;
      s_headline04_01: string;
      txt04_01: string;
      s_headline04_02: string;
      txt04_02: string;
      image04: string | false;
      handle: string;
      url: string;
      image05: string | false;
      image06: string | false;
      image07: string | false;
      image08: string | false;
      image09: string | false;
      link: string;
      description_text: string;
    };
    _links: {
      self: {
        href: string;
      }[];
      collection: {
        href: string;
      }[];
      about: {
        href: string;
      }[];
      author: {
        embeddable: boolean;
        href: string;
      };
      "wp:featuredmedia": {
        embeddable: boolean;
        href: string;
      };
      "wp:attachment": {
        href: string;
      }[];
      curies: {
        name: string;
        href: string;
        templated: boolean;
      };
    };
  }

export default async function Page( {params} :
    { params:Promise<{id: string}>
} ){

    const{ id } = await params

    const endpoint = 'https://bstinc.co.jp/wp-json/wp/v2/works/'
    const fetchUrl = endpoint + id

    const data = await fetch(fetchUrl)
    const post: WpPost = await data.json()

    return(

        <main className={`${styles.main} ${stylesWorks.mainWorks}`}>
            <section className={styles.section}>
                <h1 className="font-bold font-display">
                    詳細ページテスト
                </h1>

                <section>
                    <h1>{post.acf.project_title}</h1>
                    <Image
                        src={post.acf.fv_image}
                        alt="ジョブティサイト画面"
                        width={1200}
                        height={700}
                    ></Image>

                    <h2>{post.acf.b_headline01}</h2>
                    <h3>{post.acf.s_headline01_01}</h3>
                    <p dangerouslySetInnerHTML={{__html: post.acf.txt01_01}}></p>

                    {
                      post.acf.image01 && (
                        <Image
                          src={post.acf.image01}
                          alt="ビジネスしている様子"
                          width={1200}
                          height={700}
                        ></Image>
                      )
                    }


                    <h3>{post.acf.s_headline02_01}</h3>
                    <p dangerouslySetInnerHTML={{__html: post.acf.txt02_01}}></p>

                    {
                      post.acf.image02 && (
                        <Image
                            src={post.acf.image02}
                            alt={post.acf["catch-copy"]}
                            width={1200}
                            height={700}
                        ></Image>
                      )
                    }

                    <h2>{post.acf.b_headline03}</h2>
                    <h3>{post.acf.s_headline03_01}</h3>
                    <p dangerouslySetInnerHTML={{__html: post.acf.txt03_01}}></p>

                    {
                        post.acf.b_headline04 && (
                            <h2>{post.acf.b_headline04}</h2>
                        )
                    }
                    {
                        post.acf.s_headline04_01 && (
                            <h3>{post.acf.s_headline04_01}</h3>
                        )
                    }
                    {
                        post.acf.txt04_01 && (
                            <p dangerouslySetInnerHTML={{__html: post.acf.txt04_01}}></p>
                        )
                    }
                    {
                        post.acf.s_headline04_02 && (
                            <h3>{post.acf.s_headline04_02}</h3>
                        )
                    }
                    {
                        post.acf.txt04_02 &&(
                            <p dangerouslySetInnerHTML={{__html: post.acf.txt04_02}}></p>
                        )
                    }
                    {
                        post.acf.image04 && (
                            <Image
                                src={post.acf.image04}
                                alt={post.acf["catch-copy"]}
                                width={1200}
                                height={700}
                            >
                            </Image>
                        )
                    }  

                    <ul>
                        <h3>担当領域</h3>
                        <li dangerouslySetInnerHTML={{__html: post.acf.handle}}></li>
                    </ul>

                    <h3>URL</h3>
                    <Link href={post.acf.url}>{post.acf.url}</Link>

                </section>
            </section>
            </main>
    )
}