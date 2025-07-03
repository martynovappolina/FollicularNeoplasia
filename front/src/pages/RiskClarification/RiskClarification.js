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
            let riskOfMalignancy = '7 (2; 15)'
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
                riskOfMalignancy = '43 (38; 48)'
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
                riskOfMalignancy = '62 (49; 73)'
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
                color = '#FD91B0'
            }

            return ([
                <table border="1">
                    <thead>
                        <tr>
                            <th rowSpan="2">Результат</th>
                            <th>Риск злокачественного образования, % (95% ДИ)</th>
                        </tr>
                    </thead>
                    <tr style={{backgroundColor: color}}>
                        <td>{result}</td>
                        <td>{riskOfMalignancy}</td>
                    </tr>
                </table>
            ])
        }} />
        <div className="notes">
            <p>Согласно гистологической классификации опухолей щитовидной железы ВОЗ 2022 года. Доступно по ссылке:</p>
            <p>Jung CK, Bychkov A, Kakudo K. Update from the 2022 World Health Organization Classification of Thyroid Tumors: A Standardized Diagnostic Approach. Endocrinol Metab. 2022;37(5):703-718. DOI: https://doi.org/10.3803/EnM.2022.1553</p>
        </div>
      </div>
    )
}

export default RiskClarification