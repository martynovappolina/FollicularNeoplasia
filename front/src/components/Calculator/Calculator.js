import { useEffect, useState } from 'react';
import CheckboxContainer from '../../components/CheckboxContainer/CheckboxContainer';
import InputContainer from '../../components/InputContainer/InputContainer';
import './Calculator.scss'
import {baseUrl} from '../../baseUrl'
import {objectToFormData} from '../../utils/objectToFormData'

const Calculator = ({fields, title, url, onNeedResult, calculateOnChageField=false}) => {
    const [result, setResult] = useState()
    const [state, setState] = useState();

    const getInitState = () => {
        const initialState = {};
        
        fields.reduce((acc, curr) => {
            acc[curr.val] = curr.defaultValue !== null? curr.defaultValue: '';
            acc[`${curr.val}Error`] = false
            return acc;
        }, initialState);

        setResult()
        setState(initialState)
    }

    const calculate = () => {
        const body = {}

        fields.reduce((acc, curr) => {
            let val = state[curr.val] === '' ? curr.checkbox? curr.defaultValue: 0: state[curr.val] 
            acc[curr.val] = calculateOnChageField ? 0 : val
            return acc
        }, body)

        let tempState = state;
        let isError = false
        fields.map(f => {
            tempState[`${f.val}Error`] = tempState[`${f.val}`] === ''
            isError = isError || tempState[`${f.val}Error`]
        })

        setState(prevState => ({
            ...prevState,
            ...tempState
        }));

        if (isError && !calculateOnChageField) return

        if(onNeedResult !== undefined) {
            setResult(onNeedResult(body))
        }else{
            const bodyFormData = objectToFormData(body)
        
            fetch(`${baseUrl}${url}`, {
              method: 'POST',
              body: bodyFormData
            })
            .then(resp => resp.json())
            .then(resp => 
                setResult(resp.data.split('/n'))
            )    
        }
    }

    useEffect(()=>{
        getInitState()
    }, [])

    useEffect(()=>{
        if(calculateOnChageField && state != undefined){
            calculate()
        }
    }, [state])

    return(
        <div style={{paddingTop: '30px'}} className='container'>
            <div className='title'>{title}</div>
            {
                fields.map(field => <>
                    {
                        field.checkbox? 
                        <CheckboxContainer 
                        label={field.label}
                        option={state && state[field.val]}
                        setOption={v => {setState({...state, [field.val]: v})}}
                        optionLabels={field.optionLabels}
                        result={calculateOnChageField? undefined: result}
                        error={state && state[`${field.val}Error`]}
                        setError={()=>{
                            const initialState = state;
                            initialState[`${field.val}Error`] = false
                            setState(prevState => ({
                                ...prevState,
                                ...initialState
                            }));
                        }}
                        />: 
                        
                        field.subtitle?
                        <div className='subtitle'>{field.label}</div>:

                        <InputContainer 
                        label={field.label}
                        unit={field.unit}
                        value={state && state[field.val]}
                        setValue={v => {setState({...state, [field.val]: v})}}
                        result={calculateOnChageField? undefined: result}
                        />
                    }
                </>
                )
            }

            {calculateOnChageField ? '' : <>
                <div className='calculator-button-container'>
                    <button 
                    onClick={getInitState}
                    style={{marginRight: '15px'}}
                    className='button'>Сбросить</button>
                    {
                        result === undefined ? 
                        <button 
                        onClick={calculate}
                        className='button'>
                        Рассчитать
                        </button>            
                        : null
                    }
                </div>
            </>}
            {
                result && <>{result.map(res => <div style={{marginTop: '10px'}}>{res}</div>)}</>
            }
        </div>
    )
}

export default Calculator