import styles from './styles/basicServiceCost.module.scss';

const BasicServiceCost = () => {
    return (
        <div className={styles.block}>
            <div className="wrapper">
                <h2 className={styles.ttl}>Стоимость Основных услуг</h2>
                <table>
                    <tr className={styles.row}>
                        <td className={styles.cell}><span>Диагностика</span><span>Бесплатно</span></td>
                        <td className={styles.cellgray}><span className={styles.techServiceTtl}>Комплексное тех. обслуживание</span><span>5 000 ₽</span></td>
                    </tr>
                    <tr className={styles.row}>
                        <td className={styles.cellgray}><span>Тех обслуживание</span><span>2 500 ₽</span></td>
                        <td className={styles.cell}><span>Сборка велосипеда индивидуальная</span><span>5 000 - 12 000 ₽</span></td>
                    </tr>
                    <tr className={styles.row}>
                        <td className={styles.cell}><span>Мойка</span><span>1500 ₽</span></td>
                    </tr>              
                </table>
            </div>            
        </div>
    );
};

export default BasicServiceCost;