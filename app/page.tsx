// app/page.tsx
import styles from "./styles.module.css"
import ContentBlock from "@/components/ContentBlock"

export default function Home() {  
  return (
     <main className={styles.main}>
      <section className={styles.section}>
         <h1 className="-indent-[1ch] mb-12 font-bold">
         「これが欲しかった」、<br />
         そう言われる<br />
         デザインとシステムを。
         </h1>
         <p>BSTは数百のWEBサイト・システム構築を成功させたプロフェッショナル集団です。規模の大きさや業種に関わらず、クライアントが直面する課題に対し最適なプランで成功に導きます。</p>
         <p>BSTのサービスをご紹介します。</p>
       </section>
    
       <ContentBlock
       title="オーダーメイドのウェブデザイン & 開発"
       text="BSTでは、ビジネスニーズに合わせたウェブサイトやシステムを提供しています。高性能なウェブサイトやCMSを構築し、デジタルプレゼンスを強化し、業務の効率化を実現します。"
       images={[
        {
          path: "top_01.png",
          alt: "BSTのオーダーメイドWEB制作の実績のビジュアル。"
        }
       ]}
       subtitle="01"
       />

      <ContentBlock
       title="信頼できるITサポート & カスタムソリューション"
       text="ITサポートとデータ管理で、ビジネス運営をサポートします。トラブルシューティングやデータ入力、カスタムシステムの開発など、幅広いサービスを提供しています。"
       images={[
        {
          path: "top_02.png",
          alt: "二人の人が、書類や文房具で覆われた机の上でノートパソコンを使って作業しています。"
        }
       ]}
       subtitle="02"
       />

      <ContentBlock
       title="スタッフの行動が会社の運営を決める"
       text="BSTはスタッフが人生を大切に過ごすため公私どちらの時間も大切にする会社です。"
       images={[
        {
          path: "top_recruit_01.png",
          alt: "三人のウェブデザイナーがコンピュータの周りに立っています。"
        },
        {
          path: "top_recruit_02.png",
          alt: "三人のウェブデザイナーがコンピュータの周りに立っています。"
        }
       ]}
       subtitle="Recruit"
       />

       
       {/* <section className={styles.section}>
         <p>01</p>
         <h2>
         オーダーメイドのウェブデザイン & 開発
         </h2>        
         <p className={styles.grey}>BSTでは、ビジネスニーズに合わせたウェブサイトやシステムを提供しています。高性能なウェブサイトやCMSを構築し、デジタルプレゼンスを強化し、業務の効率化を実現します。</p>
         <div className={styles.wrapperImage}>
         <img
         src="/top_01.png"
         width={620}
         height={300}
         alt='BSTのオーダーメイドWEB制作の実績のビジュアル。'
         />
         </div>
       </section> */}
       
      {/* <section className={styles.section}>        
        <p>02</p>
        <h2>
        信頼できるITサポート & カスタムソリューション
        </h2>        
        <p className={styles.grey}>ITサポートとデータ管理で、ビジネス運営をサポートします。トラブルシューティングやデータ入力、カスタムシステムの開発など、幅広いサービスを提供しています。</p>
        <img
        src="/top_02.png"
        width={620}
        height={300}
        alt='二人の人が、書類や文房具で覆われた机の上でノートパソコンを使って作業しています。'
        />
      </section> */}
       
       {/* <section className={styles.section}>        
         <p>Recruit</p>
         <h2>
         スタッフの行動が会社の運営を決める
         </h2>        
         <p className={styles.grey}>BSTはスタッフが人生を大切に過ごすため公私どちらの時間も大切にする会社です。</p>
         <img
         src="/top_recruit_01.png"
         width={620}
         height={300}
         alt='三人のウェブデザイナーがコンピュータの周りに立っています。'
         />
       </section> */}
       
     </main>
     )
 }