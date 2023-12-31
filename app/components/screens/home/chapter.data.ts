import { electricityFormulaData, korniFormulaData, logsFormulaData, mechanicsFormulaData, opticsFormulaData, shortformulasFormulaData, stepeniFormulaData, trigonometryFormulaData } from "../formula/formula.data";
import { IChapterItem, IChapterProps } from "./chapter-item/chapter-item.interface";


export const ChapterData: IChapterProps[] = [
    {
        title: 'Физика',
        image: require('../../../../assets/physics/physics.png'),
        chapters: [
            {
                title: 'Механика',
                desc: 'раздел физики, наука, изучающая движение материальных тел и взаимодействие между ними',
                image: require('../../../../assets/physics/mech_2.png'),
                formulas: mechanicsFormulaData
            },

            {
                title: 'Оптика',
                desc: 'раздел физики, изучающий поведение и свойства света',
                image: require('../../../../assets/physics/opt_2.png'),
                formulas: opticsFormulaData
            },

            {
                title: 'Молекулярная Физика',
                desc: 'раздел физики, который изучает физические свойства тел на основе рассмотрения их молекулярного строения',
                image: require('../../../../assets/physics/molecul_1.png'),
                formulas: opticsFormulaData
            },

            {
                title: 'Электричество',
                desc: 'раздел физики, охватывающий знания о статическом электричестве, электрических токах и магнитных явлениях',
                image: require('../../../../assets/physics/elc_2.png'),
                formulas: electricityFormulaData
            }
            //дальше другие разделы по типу оптики
        ]
    },

    {
        title: 'Математика',
        image: require('../../../../assets/physics/math_tree_new.png'),
        chapters: [
            {
                title: 'Формулы сокращенного умножения',
                desc: 'В этом разделе представлены формулы сокращённого умножения',
                image: require('../../../../assets/physics/physics.png'),
                formulas: shortformulasFormulaData
            },

            {
                title: 'Основные свойства степеней',
                desc: 'в этом разделе рассказывается, как работать со степенями',
                image: require('../../../../assets/physics/physics.png'),
                formulas: stepeniFormulaData
            },

            {
                title: 'Основные свойства математических корней',
                desc: 'В этом разделе рассказывается, как работать с корнями',
                image: require('../../../../assets/physics/physics.png'),
                formulas: korniFormulaData
            },

            {
                title: 'Свойства логарифмов',
                desc: 'В этом разделе представлены основные свойства логорифмов',
                image: require('../../../../assets/physics/physics.png'),
                formulas: logsFormulaData
            },

            {
                title: 'Тригонометрия',
                desc: 'В это разделе подробно рассказывается о тригонометрии с точки зрения алгебры и геометрии',
                image: require('../../../../assets/physics/physics.png'),
                formulas: trigonometryFormulaData
            }
        ]
        //написать chapters

    }
]



