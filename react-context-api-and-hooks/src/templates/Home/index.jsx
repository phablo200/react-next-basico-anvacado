import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
    const [state, actions] = useCounterContext();

    return (
        <div>
            <Heading />

            <div>
                <Button text="Increase" onClick={actions.increase} />
                <Button text="Decrease" onClick={actions.decrease} />
                <Button text="Reset" onClick={actions.reset} />
                <Button text="set 10" onClick={() => actions.setCounter({ counter: 10 })} />
                <Button text="set 100" onClick={() => actions.setCounter({ counter: 100 })} />
                <Button text="Increase Async" onClick={actions.asyncIncrease} disabled={state.loading} />
                <Button text="Increase Error" onClick={actions.asyncError} disabled={state.loading} />
            </div>
        </div>
    );
};
