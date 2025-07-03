import { redirect } from 'react-router-dom'
import Calculator from '../../components/Calculator/Calculator'
import { severityOfAtypiaFields } from '../../data'
import './SeverityOfAtypia.scss'

const SeverityOfAtypia = () => {
    return (
        <div className='follicular-neoplasia-container'>
          <Calculator 
          calculateOnChageField
          title={'Калькулятор оценки степени выраженности атипии цитологической картины неонкоцитарной фолликулярной неоплазии.'}
          fields={severityOfAtypiaFields}
          onNeedResult={(fields)=>{
            let result = 0
            let degreeOfAtypia = 'Умеренная (Типичный сценарий)'
            let riskOfMalignancy = '17 (11; 25)'
            let color = '#C5E0B3'

            if (fields.highCellularity === 1) result += 1
            if (fields.predominanceOfMixedStructures === 1) result += 1
            if (fields.layeringOfCores === 1) result += 1
            if (fields.nuclearPolymorphism === 1) result += 1
            if (fields.nucleomegaly === 1) result += 1
            if (fields.chromatinClearing === 1) result += 1
            if (fields.darkCytoplasm === 1) result += 3
            if (fields.nuclearPseudoinclusions === 1) result += 4

            if (result >= 4 && result <= 7) {
                degreeOfAtypia = 'Средняя (Атипичный сценарий)'
                riskOfMalignancy = '39 (32; 46)'
                color = '#FFE599'
            }

            if (result >= 8 && result <= 13) {
                degreeOfAtypia = 'Выраженная (Явно атипичный сценарий)'
                riskOfMalignancy = '66 (47; 81)'
                color = '#F7CAAC'
            }

            return [
                <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Сумма баллов</th>
                            <th>Степень атипии цитологической картины</th>
                            <th>Риск злокачественного образования, % (95% ДИ)*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{backgroundColor: color}}>
                            <td>{result}</td>
                            <td>{degreeOfAtypia}</td>
                            <td>{riskOfMalignancy}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                *Для более точной оценки риска злокачественности рекомендуется учитывать в контексте других признаков из <a className='link' target='_blank' href='/riskClarification'>калькулятора</a>.
                </div>
            ]
          }} />
  
        </div>
      ) 
}

export default SeverityOfAtypia