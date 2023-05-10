import React from 'react';
import './App.module.css';
import Form from "./components/form/Form";
import {useTypedSelector as useSelector} from "./hooks/useTypedSelector";
import Result from "./components/result/Result";
import classes from './App.module.css'
const App: React.FC = () => {
    const {data, error, loading} = useSelector(state => state.dishes)
    const {id, name, preparation_time, type} = data

    return (
        <div className={classes.app}>
            <Form/>
            {(data?.id && !error && !loading) ?
                <Result id={id!} name={name!} preparation_time={preparation_time!} type={type!}/> : ''
            }
            {error && <div>{error}</div>}
            {loading && <div>Fetching data...</div>}
        </div>
    );
}

export default App;
