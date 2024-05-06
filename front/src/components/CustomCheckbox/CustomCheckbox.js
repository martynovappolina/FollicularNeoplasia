import './CustomCheckbox.scss'

const CustomCheckbox = ({ checked, disabled, onClick, error, label, style={} }) => {
    
    return (
        <div 
        onClick={() => {
            if (!disabled) {
                onClick()
            }
        }}
        style={style}
        className='t-checkbox__control checkbox-container-option-box'>
            <input 
            checked={checked}
            disabled={disabled}
            className='t-checkbox js-tilda-rule'
            type='checkbox' />
            
            <div 
            onClick={() => {
                if (!disabled) onClick()
            }}
            className={`t-checkbox__indicator ${error ? 'error': disabled ? 'disabled': ''}`} />
            {label}
        </div>
    )
}

export default CustomCheckbox