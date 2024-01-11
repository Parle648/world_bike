import styles from './styles/workshopHero.module.scss';
import heroBackground from '../../imgs/workshop-background.png'

const WorkshopHeroSection = () => {
    return (
        <div>
            <div className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
                <div className="wrapper">
                    <a className={styles.link} href="/">Главная /  </a><a className={styles.link} href="bicycle-workshop">Веломастерская</a>
                    <h2 className={styles.ttl}>Веломастерская</h2>
                </div>
            </div>
            <div className={styles.body}>
                <div className="wrapper">
                    <div className={styles.bodyGrid}>
                        <p className={styles.paragraph}>
                            Если вы купили велосипед в нашем магазине, то то можете не волноваться о настройке и проверке, так как мы это выполняем в рамках предпродажной 
                            подготовки. Но если вы откатались уже сезон и ваш железный конь уже выглядит и ведёт себя потрёпанно, мы с удовольствием приведём его в порядок. 
                            Наша веломастерская работает ежедневно и выполняет не только периодическое обслуживание, но и ремонт велосипеда любой сложности
                        </p>
                        <p className={styles.paragraph}>
                            Отличное оснащение и опытные специалисты обеспечат максимально короткий срок ремонта. Какой бы ни была поломка, наличие большого количества узлов и деталей на складе позволит быстро вернуть технике работоспособность. Мы берём в работу горные модели, шоссейные и городские велосипеды
                        </p>
                        <p className={styles.paragraph}>
                        Являясь профессиональными велосипедистами, мастера нашей компании быстро и чётко выявят неисправность и предложат максимально эффективный способ ремонта. Очень скоро ваш байк будет вновь на ходу
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WorkshopHeroSection