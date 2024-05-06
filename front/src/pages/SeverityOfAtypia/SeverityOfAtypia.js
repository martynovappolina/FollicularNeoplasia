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
            //   alert(JSON.stringify(fields))
            if (fields.nuclearPseudoinclusions == 1)
              return [1]
          }} />
  
        </div>
      ) 
}

export default SeverityOfAtypia