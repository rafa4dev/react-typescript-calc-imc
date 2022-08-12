import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {

  const [heighField, setHeightField ] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heighField && weightField){
      setToShow(calculateImc(heighField, weightField));
    }else{
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={170}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC significa Índice de Massa Corporal e trata-se de uma medida do peso de cada pessoa, sendo uma relação entre a massa da pessoa e a sua altura ao quadrado.</p>

          <input 
            placeholder="Digite a sua altura: 1.65 (em métros)"
            type="number"
            value={heighField > 0 ? heighField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true: false}
          />

          <input 
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            type="number"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseInt(e.target.value))}
            disabled={toShow ? true: false}

          />

          <button onClick={handleCalculateButton} disabled={toShow ? true: false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />     
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
