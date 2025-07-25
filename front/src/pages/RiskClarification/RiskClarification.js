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
            let result = 'Низкий риск'
            let justification = 'Отсутствуют признаки, ассоциированные с повышенным риском'
            let riskOfMalignancy = '7 (2; 15)'
            let color = '#C5E0B3'

            if (
                fields.age === 1 || 
                fields.degreeOfCytologicalAtypiaPaintings === 1 ||
                fields.RASMutation === 1
            ) {
                result = 'Средний риск'
                justification = <div>
                    Указаны признаки, ассоциированные со средним риском:
                    <ul>
                        {fields.age === 1 && <li>Возраст 18-34 лет</li>}
                        {fields.degreeOfCytologicalAtypiaPaintings === 1 && <li>4-7 баллов цитологической атипии</li>}
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
                justification = <div>
                    Указаны признаки, ассоциированные со средним риском:
                    <ul>
                        {fields.severelyReducedEchogenicity === 1 && <li>(УЗИ) Сильно сниженная эхогенность</li>}
                        {fields.contourUnevenness === 1 && <li>(УЗИ) Неровность контура</li>}
                        {fields.notRoundShape === 1 && <li>(УЗИ) Не округлая форма</li>}
                        {fields.microcalcifications === 1 && <li>(УЗИ) Микрокальцинаты</li>}
                        {fields.macrocalcifications === 1 && <li>(УЗИ) Макрокальцинаты</li>}
                        {fields.degreeOfCytologicalAtypiaPaintings == 2 && <li>8-13 баллов цитологической атипии</li>}
                    </ul>
                </div>
                color = '#F7CAAC'
            }
            if (fields.BRAFMutation === 1) {
                result = 'Высокий риск'
                justification = <div>
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
                            <th>Результат</th>
                            <th>Риск злокачественного образования, % (95% ДИ)</th>
                            <th>Обоснование</th>
                        </tr>
                    </thead>
                    <tr style={{backgroundColor: color}}>
                        <td>{result}</td>
                        <td>{riskOfMalignancy}</td>
                        <td>{justification}</td>
                    </tr>
                </table>
            ])
        }} />
        <br />
        *Расчет с помощью <a className="link" href="/severityOfAtypia" target="_blank">калькулятора</a> степени атипии цитологической картины неонкоцитарной фолликулярной неоплазии
      </div>
    )
}

export default RiskClarification