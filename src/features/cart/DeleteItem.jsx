import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeFromCart } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeFromCart(pizzaId));
  }
  return (
    <Button onClick={handleDelete} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
