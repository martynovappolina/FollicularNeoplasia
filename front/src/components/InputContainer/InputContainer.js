import './InputContainer.scss'

const InputContainer = ({ label, unit='', value, setValue, error, setError, result }) => {
    return (
        <div className='input-container'>
            <div className='custom-label'> {label} </div>
            <div className='input-container-box'>
                <input
                disabled={typeof result !== 'undefined'}
                type='number'
                placeholder='0' 
                value={value != 0? value: ''}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setError(false)}
                className={error? 'custom-input error': 'custom-input'} />
                {unit}
            </div>
        </div>
    )
}

export default InputContainer