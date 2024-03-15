import MobileDropDown from '../../MobileDropDown/MobileDropDown';
import styles from './styles/mobileBlock.module.scss';
import blackLogo from '../../../../imgs/black-logo.png';
import DropDownList from './types/dropDownProps';

const MobileBlock = () => {
    const dropDownLists = [{
        title: 'Экипировка' ,
        links: ["Велокуртки", "Велотрусы", "Термобелье", "Велообувь", "Велошлемы", "Велоперчатки", "Очки", "Аксессуары"]
    }, {
        title: 'Велосипеды', 
        links: [
            "Горные велосипеды", "Велосипеды для триатлона", "Городские велосипеды", "Двухподвесные велосипеды",
            "Шоссейные велосипеды", "Электровелосипеды", "Гравийные велосипеды", "Женские велосипеды", "Трековые велосипеды", "Детские велосипеды"
        ]
    }, {
        title: 'Запчасти',
        links: [
            "Группы оборудования", "Манетки/Шифтеры", "Рамы", "Педали", "Вилки", "Переключатели скоростей",
            "Запчасти для электронных групп", "Покрышки", "Сёдла и штыри", "Каретки", "Системы шатунов", "Камеры", "Тормоза", "Кассеты", "Цепи", "Колёса",
        ]
    }, {
        title: 'Велостанки',
        links: ["Аксессуары для велостанков"]
    }, {
        title: 'Экипировка',
        links: ["Велокомпьютеры", "Инструменты", "Вилки", "Велочехлы", "Крылья", "Насосы","Фляги, держатели",]
    }];

    return (
        <div className={styles.mobile}>
            <img className={styles.blackLogo} src={blackLogo} alt="blackLogo" />
            {dropDownLists.map(({title, links}: DropDownList) => {
                return (
                    <MobileDropDown 
                    key={title} 
                    title={title} 
                    links={links} />
                )
            })}
    </div>
    );
};

export default MobileBlock;