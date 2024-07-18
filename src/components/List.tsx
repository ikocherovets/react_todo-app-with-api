/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import { Todo as TodoType } from '../types/Todo';
import { Todo } from './Todo';
import { TempTodo } from './TempTodo';

interface Props {
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, data: Partial<TodoType>) => Promise<void>;
  todos: TodoType[];
  tempTodoTitle: string | null;
  idsProccesing: number[];
}

export const List: FC<Props> = ({
  todos,
  tempTodoTitle,
  onDelete,
  onEdit,
  idsProccesing,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {/* This is a completed todo */}
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          idsProccesing={idsProccesing}
        />
      ))}

      {tempTodoTitle && <TempTodo title={tempTodoTitle} />}

      {/* This todo is an active todo */}
      {/* <div data-cy="Todo" className="todo">
        <label className="todo__status-label">
          <input
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
          />
        </label>

        <span data-cy="TodoTitle" className="todo__title">
          Not Completed Todo
        </span>
        <button type="button" className="todo__remove" data-cy="TodoDelete">
          ×
        </button>

        <div data-cy="TodoLoader" className="modal overlay">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div> */}

      {false && (
        <>
          {/* This todo is being edited */}
          <div data-cy="Todo" className="todo">
            <label className="todo__status-label">
              <input
                data-cy="TodoStatus"
                type="checkbox"
                className="todo__status"
              />
            </label>

            {/* This form is shown instead of the title and remove button */}

            <div data-cy="TodoLoader" className="modal overlay">
              <div className="modal-background has-background-white-ter" />
              <div className="loader" />
            </div>
          </div>

          {/* This todo is in loadind state */}
        </>
      )}
    </section>
  );
};
