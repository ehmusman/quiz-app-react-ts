import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { getQuestions } from '../../actions/quizActions';
import { categoriesDataI } from '../../actions/types';


interface Props {
    history: {
        push(url: '/'): void;
    };
}
const Categories: React.FC<Props> =(props) =>{

    const generateArray = (): number[] => {
        const array = [];
        for (let i = 10; i <= 50; i++) {
            array.push(i)
        }
        return array;
    }
    const totalQuestions:number[] = generateArray()

    interface categoriesI{
        id: number,
        category: string
    }
    const categories: categoriesI[] = [
        { id: 9, category: 'general knowledge' },
        { id: 10, category: 'Entertainment books' },
        { id: 11, category: 'Entertainment film' },
        { id: 12, category: 'Entertainment music' },
        { id: 13, category: 'Entertainment Musicals' },
        { id: 14, category: 'Entertainment  televisions' },
        { id: 15, category: 'Entertainment video games' },
        { id: 16, category: 'Entertainment board games' },
        { id: 17, category: 'Science nature' },
        { id: 18, category: 'Science computer' },
        { id: 19, category: 'Science mathematics' },
        { id: 20, category: 'Mythology' },
        { id: 21, category: 'supports' },
        { id: 22, category: 'Geography' },
        { id: 23, category: 'History' },
        { id: 24, category: 'Politics' },
        { id: 25, category: 'Art' },
        { id: 26, category: 'celebrities' },
        { id: 27, category: 'animals' },
        { id: 28, category: 'vehicles' },
        { id: 29, category: 'Entertainment Comics' },
        { id: 30, category: 'Science Gadgets' },
        { id: 31, category: 'Entertainment Japanese anime manga' },
        { id: 32, category: 'Entertainment cartoons and animations' }];
    interface difficultyI{
        level: string
    }
    const difficulty:difficultyI[] = [
        { level: 'easy' },
        { level: 'medium' },
        { level: 'hard' }
    ]

    const[totalQuestionsState, setTotalQuestionsState] = useState<number>(10)
    const[categoryState, setCategoryState] = useState<number>(9)
    const[difficultyState, setDifficultyState] = useState<string>('easy')

    const handleTotalQuestions = (e:any) => {
        setTotalQuestionsState(e.target.value)
    }
    const handleCategory = (e:any) =>{
        setCategoryState(e.target.value)
    }
    const handleLevel = (e:any) =>{
        setDifficultyState(e.target.value)
    }

 
    const dispatch = useDispatch()
    const handleOnSubmit = ():void =>{
        const data:categoriesDataI ={
            amount: totalQuestionsState,
            category: categoryState,
            difficulty: difficultyState
        }
        dispatch(getQuestions(data))
            props.history.push('/');
    }
    return (
        <div className='container'>
        <div className="row">
            <div className="form-group col-md-12">
                <label htmlFor="sel1">Select Total Questions:</label>
                <select
                    className="form-control"
                    onChange={handleTotalQuestions}
                >
                    {totalQuestions.map(question => (
                        <option key={question} value={question}>{question}</option>
                    ))}
                </select>
            </div>
            <div className="form-group col-md-12">
                <label htmlFor="sel1">Select Category:</label>
                <select
                    className="form-control"
                    onChange={handleCategory}
                >
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.category}</option>
                    ))}
                </select>
            </div>
            <div className="form-group col-md-12">
                <label htmlFor="sel1">Select Difficulty Level:</label>
                <select
                    className="form-control"
                    onChange={handleLevel}
                >
                    {difficulty.map(diff => (
                        <option key={diff.level} value={diff.level}>{diff.level}</option>
                    ))}
                </select>
            </div>
            <div className="form-group col-md-12">
                <input
                    type="submit"
                    value="Select"
                    className="btn btn-outline-dark btn-block btn-lg"
                    onClick={handleOnSubmit}
                />
            </div>
        </div>
    </div>
    )
}

export default Categories
