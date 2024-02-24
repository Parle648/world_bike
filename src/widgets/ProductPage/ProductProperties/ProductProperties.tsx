import React from 'react';
import styles from './styles/productProps.module.scss';
import getProductProperties from './api/getProperties';

const ProductProperties = () => {
    const [properties, setProperties] = React.useState<any>();
    const productId = +window.location.href.split('/')[4].slice(1);

    const tableData = [
        ["Цвет", properties?.bike_color],
        ["Размер", properties?.bike_size],
        ["Год выпуска", properties?.bike_year],
        ["Тормозная система", properties?.brake_system],
        ["тип тормозов", properties?.brake_type],
        ["Материал рамы", properties?.connecting_rod],
        ["Страна призводитель", properties?.country],
        ["Вилка", properties?.fork],
        ["Рама", properties?.frame],
        ["Материал рамы", properties?.frame_material],
        ["Гарантия", properties?.guarantee],
        ["Изготовитель", properties?.manufacturer],
        ["Задний переключатель", properties?.rear_derailleur],
        ["Седло", properties?.saddle],
        ["Подседельный штырь", properties?.seatpost],
        ["Переключатели", properties?.shifters],
        ["Количество скоростей", properties?.speeds_count],
        ["Вынос", properties?.takeaway],
        ["Покрышки", properties?.tires],
        ["Диаметр колес", properties?.wheel_diametr],
        ["Производитель колес", properties?.wheels_manufacturer],
    ]

    React.useEffect(() => {
        getProductProperties(productId).then((data:any) => setProperties(data[0]))
    }, [])
    
    return (
        <div className={styles.block}>
            <div className='wrapper'>
                <h2 className={styles.ttl}>Характеристика</h2>
                <ul>
                    {tableData.map((elem: any, index: number) => {
                        return (
                            <li className={index++ % 2 === 0 ? styles.listItem : styles.whiteListItem} key={elem[0]}><span>{elem[0]}</span><span>{elem[1]}</span></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ProductProperties;