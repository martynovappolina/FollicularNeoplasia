import './RiskClarification.scss'
import Calculator from '../../components/Calculator/Calculator'
import { riskClarificationFields } from '../../data'

const RiskClarification = () => {
  
    return (
      <div className='follicular-neoplasia-container'>
        <Calculator 
        title={'Калькулятор уточнения риска злокачественности образования щитовидной железы с цитологической картиной неонкоцитарной фолликулярной неоплазии'}
        fields={riskClarificationFields}
        onNeedResult={(fields)=>{
            let result = 'Отсутствуют признаки, ассоциированные с повышенным риском'
            let riskOfMalignancy = '12 (7-20)'
            let probabilityOfLowRiskOrMalignantLesion = '27 (20-36)'
            let color = '#C5E0B3'
            if (
                fields.age === 1 || 
                fields.degreeOfCytologicalAtypiaPaintings === 1 ||
                fields.RASMutation === 1
            ) {
                result = <div>
                    Указаны признаки, ассоциированные со средним риском:
                    <ul>
                        {fields.age === 1 && <li>Возраст</li>}
                        {fields.degreeOfCytologicalAtypiaPaintings === 1 && <li>Степень атипии цитологической картины (баллы)</li>}
                        {fields.RASMutation === 1 && <li>Мутация RAS</li>}
                    </ul>
                </div>
                riskOfMalignancy = '35 (28-43)'
                probabilityOfLowRiskOrMalignantLesion = '46 (37-54)'
                color = '#FFE599'
            }
            if (
                fields.severelyReducedEchogenicity === 1 ||
                fields.contourUnevenness === 1 ||
                fields.notRoundShape === 1 ||
                fields.microcalcifications === 1 ||
                fields.macrocalcifications === 1 ||
                fields.degreeOfCytologicalAtypiaPaintings === 2
            ) {
                result = 'Высокий риск'
                riskOfMalignancy = '63 (49-75)'
                probabilityOfLowRiskOrMalignantLesion = '75 (60-86)'
                color = '#F7CAAC'
            }
            if (fields.BRAFMutation === 1) {
                result = <div>
                    Указан признак очень высокого риска
                    <ul>
                        <li>Мутация BRAF</li>
                    </ul>
                </div>
                riskOfMalignancy = '100'
                probabilityOfLowRiskOrMalignantLesion = '0'
                color = '#FD91B0'
            }

            return ([
                <table border="1" style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            <th rowSpan="2">Результат</th>
                            <th colSpan="2">Виды риска</th>
                        </tr>
                        <tr>
                            <th>Риск злокачественного образования, % (95% ДИ)</th>
                            <th>Вероятность образования низкого риска или злокачественного, % (95% ДИ)</th>
                        </tr>
                    </thead>
                    <tr style={{backgroundColor: color}}>
                        <td>{result}</td>
                        <td>{riskOfMalignancy}</td>
                        <td>{probabilityOfLowRiskOrMalignantLesion}</td>
                    </tr>
                </table>
            ])
        }} />

      </div>
    )
}

export default RiskClarification