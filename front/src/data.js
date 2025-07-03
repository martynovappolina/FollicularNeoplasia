const noYesOptions = [
    {
        title: 'Нет',
        value: 0
    },
    {
        title: 'Да',
        value: 1,
    }
]

export const riskClarificationFields = [
    {
        val: 'age',
        defaultValue: null,
        optionLabels: [
            {
                title: '>=35',
                value: 0
            },
            {
                title: '<35',
                value: 1,
            }
        ],
        label: 'Возраст',
        checkbox: true,
    },
    {
        val: 'severelyReducedEchogenicity',
        defaultValue: null,
        optionLabels: noYesOptions,
        label: '(УЗИ) Сильно сниженная эхогенность',
        checkbox: true,
    },
    {
        val: 'contourUnevenness',
        defaultValue: null,
        optionLabels: noYesOptions,
        label: '(УЗИ) Неровность контура',
        checkbox: true,
    },
    {
        val: 'notRoundShape',
        defaultValue: null,
        optionLabels: noYesOptions,
        label: '(УЗИ) Не округлая форма',
        checkbox: true,
    },
    {
        val: 'microcalcifications',
        defaultValue: null,
        optionLabels: noYesOptions,
        label: '(УЗИ) Микрокальцинаты',
        checkbox: true,
    },
    {
        val: 'macrocalcifications',
        defaultValue: null,
        optionLabels: noYesOptions,
        label: '(УЗИ) Макрокальцинаты',
        checkbox: true,
    },
    {
        val: 'degreeOfCytologicalAtypiaPaintings',
        defaultValue: null,
        optionLabels: [
            {
                title: '0-3',
                value: 0
            },
            {
                title: '4-7',
                value: 1,
            },
            {
                title: '8-13',
                value: 2,
            },
        ],
        label: <a className="link" href="/severityOfAtypia" target="_blank">Степень атипии цитологической картины (баллы)</a>,
        checkbox: true,
    },
    {
        val: 'RASMutation',
        defaultValue: null,
        optionLabels: noYesOptions,
        label: 'Мутация RAS',
        checkbox: true,
    },   
    {
        val: 'BRAFMutation',
        defaultValue: null,
        optionLabels: noYesOptions,
        label: 'Мутация BRAF',
        checkbox: true,
    },   
]

export const severityOfAtypiaFields = [
    {
        val: 'highCellularity',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Высокая клеточность',
        checkbox: true,
    },
    {
        val: 'predominanceOfMixedStructures',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Преобладание смешанных структур',
        checkbox: true,
    },
    {
        val: 'layeringOfCores',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Напластование ядер',
        checkbox: true,
    },
    {
        val: 'nuclearPolymorphism',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Ядерный полиморфизм',
        checkbox: true,
    },
    {
        val: 'nucleomegaly',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Нуклеомегалия',
        checkbox: true,
    },
    {
        val: 'chromatinClearing',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Просветление хроматина',
        checkbox: true,
    },
    {
        val: 'darkCytoplasm',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Темная цитоплазма',
        checkbox: true,
    },
    {
        val: 'nuclearPseudoinclusions',
        defaultValue: 0,
        optionLabels: noYesOptions,
        label: 'Ядерные псевдовключения',
        checkbox: true,
    },
]