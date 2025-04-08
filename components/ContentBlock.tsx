import styles from "@/app/styles.module.css"

export default function ContentBlock({subtitle, title, text ,images}: {
    subtitle: string, title: string, text: string, images: {path: string, alt: string}[]
  }) {
    // console.log(props)
  
    const imgWrapperClasses = [styles.wrapperImage]
    if(images.length > 1){
      imgWrapperClasses.push("grid-cols-[2fr_1fr]", "gap-4")
    }
    // if(props.image && props.image2){
    //   imgWrapperClass.push("grid-cols-[2fr_1fr]","gap-4")
    // }
  
    const subtitleClass = "font-display"
  
    return(
        <section className={styles.section}>
          {subtitle && <p className={`${styles.grey} ${`font-display`}`}>{subtitle}</p>}
          {title && (<h2 className="font-display font-bold">{title}</h2>) }
          {text && (<p className={styles.grey} dangerouslySetInnerHTML={{__html:text}}></p>)}
          <div className={imgWrapperClasses.join(" ")}>
            {images.map((image) => (
              <img
              key={image.path}
              width={620}
              height={300}
              src={image.path} 
              alt={image.alt} />
            ))}
          </div>
           {/* {(image || image2) && (
            <div className={imgWrapperClass.join("")}>
            {
              props.image && (
                <img 
                  width={620}
                  height={300}
                  src={props.image} 
                  alt="BSTのオーダーメードWEB制作の実績のビジュアル" />
              )
            }
            {props.image2}
           </div>)} */}
         </section>
    )
  
  
  }