import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import './CheckboxContainer.scss'

const CheckboxContainer = ({ label, optionLabels, option, setOption, error, setError, result }) => {
    return(
        <div className='checkbox-container'>
            <div className='custom-label'> {label} </div>
            <div className='checkbox-container-box' >
                
                <CustomCheckbox
                checked={option===0}
                disabled={typeof result !== 'undefined'}
                error={error}
                label={optionLabels[0]}
                onClick={() => {
                    setOption(0)
                    setError(false)
                }} />

                <CustomCheckbox
                checked={option===1}
                error={error}
                disabled={typeof result !== 'undefined'}
                label={optionLabels[1]}
                onClick={() => {
                    setOption(1)
                    setError(false)
                }} />
                
            </div>
        </div>
    )
}

export default CheckboxContainer