import { IForumulaItem } from "./formula-item/formula-item.inteface";

export const mechanicsFormulaData: IForumulaItem[] = [
    {
        title: 'Скорость тела',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'v-Скорость тела',
            'S-Путь, пройденный телом',
            't-промежуток времени, за который пройден путь S'
   
        ]
    },

    {
        title: 'Ускорение тела',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'a — ускорение',
            'v1 — скорость тела в момент времени t1',
            'v2 — скорость тела в момент времени t2',
            't — промежуток времени от t1 до t2'
   
        ]
    },

    {
        title: 'Скорость равномерно-ускоренного движения',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'v — скорость',
            'v0 — скорость тела в начальный момент времени',
            'a — ускорение',
            't — промежуток времени, протекший от начального момента времени'
   
        ] 
    },

    {
        title: 'Центростремительное ускорение',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'a — центростремительное ускорение',
            'v — скорость',
            'R — радиус кривизны траектории'
   
        ]  
    },

    {
        title: 'Второй закон Ньютона',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'F — равнодействующая всех сил, действующих на тело',
            'm — масса тела',
            'a — ускорение, получаемое телом под действием силы F'
        ]
    }
]

export const opticsFormulaData: IForumulaItem[] = [
    {
        title: 'Поток излучения',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'Φ — поток излучения',
            'W — энергия излучения',
            't — время прохождения энергии излучения'
   
        ]
    },

    {
        title: 'Сила света',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'I — сила света',
            'Φ — поток излучения',
            'Ω — телесный угол, через который проходит поток излучения'
   
        ] 
    },

    {
        title: 'Освещенность',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'E — освещенность',
            'Φ — поток излучения',
            'o — площадь, через которую проходит поток излучения'
   
        ] 
    },

    {
        title: 'Относительный показатель преломления',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'n — относительный показатель преломления для граничащих сред',
            'n2 — абсолютный показатель преломления для второй среды',
            'n1 — абсолютный показатель преломления для первой среды'
   
        ] 
    },

    {
        title: 'Закон преломления света',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'i — угол отражения',
            'r — угол преломления',
            'n — относительный показатель преломления для граничащих сред'
   
        ]
    }
]

export const molecularFormulaData: IForumulaItem[] = [
    {
        title: 'Количество вещества',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'm — масса',
            'μ — молярная масса вещества',
            'N — число молекул',
            'NA = 6,02·1023 моль-1 — число Авогадро'
   
        ]
    },

    {
        title: 'Давление идеального газа',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'n — концентрация молекул',
            'k — постоянная Больцмана',
            'T — абсолютная температура',
   
        ]
    },

    {
        title: 'Первый закон термодинамики',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'ΔQ — количество подведенной теплоты',
            'ΔA — работа, совершаемая веществом',
            'ΔU — изменение внутренней энергии вещества',
   
        ]
    },

    {
        title: 'Теплоемкость идеального газа',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'ΔQ — количество переданной системе теплоты на участке процесса',
            'ΔT — изменение температуры на этом участке процесса',
   
        ]
    },

    {
        title: 'Средняя квадратичная скорость молекул идеального газа',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'k = 1,38·10**-23 Дж/К — постоянная Больцмана',
            'R = kNA = 8,31 Дж/(моль·К) — универсальная газовая постоянная',
            'T = t+273 — абсолютная температура',
            't — температура по шкале Цельсия'
   
        ]
    }
]

export const electricityFormulaData: IForumulaItem[] = [
    {
        title: 'Емкость плоского кондесатора',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'C — электроёмкость',
            'q — заряд конденсатора',
            'U — модуль разности потенциалов между обкладками',
   
        ]
    },

    {
        title: 'Закон Ома для участка однородной цепи',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'I — сила тока',
            'U — напряжение на концах участка',
            'R — сопротивление участка цепи',
   
        ]
    },

    {
        title: 'Закон Ома для замкнутой цепи c источником тока',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'E — ЭДС (электродвижущая сила)',
            'r — внутреннее сопротивление источника ЭДС',
            'R — внешнее сопротивление источника ЭДС',
            'I — сила тока'
   
        ]
    },

    {
        title: 'Работа постоянного тока',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'A - работа',
            'U — напряжение на концах участка цепи',
            't — время, за которое совершается работа',
            'I — сила тока'
   
        ]
    },

    {
        title: 'Закон Джоуля-Ленца',
        image: require('../../../../assets/physics/elc_2.png'),
        properties: [ 
            'Q — теплота',
            'R — сопротивление проводника',
            't — время, за которое выделяется теплота',
            'I — сила тока'
   
        ]
    }
]
    //Началась МАТЕМАТИКА !!!!!!!!!!



export const shortformulasFormulaData: IForumulaItem [] = [
    {
        title: 'Формулы сокращенного умножения',
        image: require('../../../../assets/physics/elc_2.png'),
        
    }
]

export const stepeniFormulaData: IForumulaItem [] = [
    {
        title: 'Основные свойства степеней',
        image: require('../../../../assets/physics/elc_2.png'),
        
    }
]

export const korniFormulaData: IForumulaItem [] = [
    {
        title: 'Основные свойства математических корней',
        image: require('../../../../assets/physics/elc_2.png'),
        
    }
]

export const logsFormulaData: IForumulaItem [] = [
    {
        title: 'Свойства логарифмов',
        image: require('../../../../assets/physics/elc_2.png'),
        
    }
]

export const trigonometryFormulaData: IForumulaItem [] = [
    {
        title: 'Тригонометрия',
        image: require('../../../../assets/physics/elc_2.png'),
        
    }
]
