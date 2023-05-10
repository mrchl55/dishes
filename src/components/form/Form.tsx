import TextInput from "./TextInput";
import React, {useEffect, useState} from "react";
import TimeInput from "./TimeInput";
import SelectInput from "./SelectInput";
import {useActions} from "../../hooks/useActions";
import NumberInput from "./NumberInput";
import Button from "./Button";
import {useTypedSelector as useSelector} from "../../hooks/useTypedSelector";
import classes from './Form.module.css';

enum Types {
    PIZZA = 'pizza',
    SOUP = 'soup',
    SANDWICH = 'sandwich'
}

const Form: React.FC = () => {
    const {loading} = useSelector(state => state.dishes)

    const {searchDishes} = useActions()
    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [type, setType] = useState<string>(Types.PIZZA)
    const [numberOfSlices, setNumberOfSlices] = useState<number>(0)
    const [diameter, setDiameter] = useState<number>(0)
    const [spicenessScale, setSpicenessScale] = useState<number>(0)
    const [slicesOfBread, setSlicesOfBread] = useState<number>(0)
    const types = Object.values(Types)

    useEffect(() => {
        switch (type) {
            case Types.PIZZA:
                if (name && time && type && numberOfSlices && diameter) {
                    setIsFormValid(true)
                } else {
                    setIsFormValid(false)
                }
                break;
            case Types.SOUP:
                if (name && time && type && spicenessScale) {
                    setIsFormValid(true)
                } else {
                    setIsFormValid(false)
                }
                break;
            case Types.SANDWICH:
                if (name && time && type && slicesOfBread) {
                    setIsFormValid(true)
                } else {
                    setIsFormValid(false)
                }
                break;

        }

    }, [name, time, type, numberOfSlices, diameter, spicenessScale, slicesOfBread])
    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();
        searchDishes({

            name,
            preparation_time: time,
            type,
            ...(type === Types.PIZZA && {
                no_of_slices: numberOfSlices, diameter
            }),
            ...(type === Types.SOUP && {
                spiciness_scale: spicenessScale,
            }),
            ...(type === Types.SANDWICH && {
                slices_of_bread: slicesOfBread,
            }),
        })
    }
    return <form className={classes.form} onSubmit={(e) => onSearch(e)}>
        <TextInput name={'Dish name'} value={name}
                   onChange={(e) => setName(e.target.value)} autofocus={true} placeholder={'e.g. pizza'}
                   required={true}/>
        <TimeInput name={'Time'} value={time} onChange={(e) => setTime(e.target.value)} required={true}/>
        <SelectInput name={'Type'} value={type} options={types} onChange={(e) => setType(e.target.value)}
                     required={true}/>
        {type === Types.PIZZA ?
            <div><NumberInput min={1} max={10} name={'Number of slices'}
                              value={(numberOfSlices !== 0) ? numberOfSlices : ''}
                              onChange={(e) => setNumberOfSlices(+e.target.value)} required={true}/><NumberInput
                step={0.1}
                name={'Diameter'} value={(diameter !== 0) ? diameter : ''} required={true}
                onChange={(e) => setDiameter(+e.target.value)} placeholder={'e.g. 33.4'}/></div> : ''}
        {type === Types.SOUP ?
            <div><NumberInput min={1} max={10} name={'Spiceness scale'} placeholder={'1-10'}
                              value={(spicenessScale !== 0) ? spicenessScale : ''} required={true}
                              onChange={(e) => setSpicenessScale(+e.target.value)}/></div> : ''}
        {type === Types.SANDWICH ?
            <div><NumberInput min={1} max={10} name={'Number of bread slices'}
                              value={(slicesOfBread !== 0) ? slicesOfBread : ''}
                              required={true}
                              onChange={(e) => setSlicesOfBread(+e.target.value)}/></div> : ''}
        <Button name={'Search'} type={'submit'} disabled={!isFormValid || loading}/>
    </form>
}
export default Form

