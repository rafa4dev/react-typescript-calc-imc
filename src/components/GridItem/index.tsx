import { Level } from "../../helpers/imc"

import styles from './GridItem.module.css';

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type GridItemProps = {
    item: Level
}
export const GridItem = ({item}: GridItemProps) => {

    return (
        
            <div className={styles.main} 
            style={
                item.yourImc ? 
                { backgroundColor: item.color} :
                {  borderWidth: '5px', borderStyle: 'solid', borderColor: item.color}
            }
            >
        
            <div className={styles.gridIcon} style={{ backgroundColor: item.color}}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} km/m²</div>
            }
           
            <div className={styles.gridInfo}>
                <>
                    IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}