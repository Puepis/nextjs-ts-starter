import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../utils/hooks';
import { increment, decrement, reset } from '../redux/modules/example/actions';
import { Count } from '../styles';

type Empty = Record<string, never>;

const Counter: FC<Empty> = () => {
  const count = useAppSelector((state) => state.example.count);
  const dispatch = useDispatch();

  return (
    <div>
      <Count>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </Count>
    </div>
  );
};

export default Counter;
