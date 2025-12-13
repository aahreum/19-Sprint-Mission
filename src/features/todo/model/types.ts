export type TodoListStatus = 'TO DO' | 'DONE';

export interface TodoList {
  id: number;
  name: string;
  isCompleted: boolean;
}

export type TodoListResponse = TodoList[];

export interface UpdateTodoReqBody {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
