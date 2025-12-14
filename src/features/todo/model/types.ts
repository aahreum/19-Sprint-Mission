export type TodoListStatus = 'TO DO' | 'DONE';

export interface TodoList {
  id: number;
  name: string;
  isCompleted: boolean;
}

export type TodoListResponse = TodoList[];

// create todo type
export interface CreateTodoReqBody {
  name: string;
}

// update todo type
export interface UpdateTodoReqBody {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}

export interface UpdateTodoResponse {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
  id: number;
  tenantId: number;
}
