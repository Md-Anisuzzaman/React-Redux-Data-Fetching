import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllTodos } from "../Services/Actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => console.log(state));

const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getAllTodos());

  }, [])


  return (
    <div>
      <h2>Todos Data</h2>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos && todos.map((todo) => {
          return <p key={todo.id}>
            <h4>{todo.id}</h4>
            <h4>{todo.title}</h4>
          </p>
        })
        }
      </section>
    </div >
  )
}
export default Todos