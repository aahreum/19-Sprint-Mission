'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo, UpdateTodoVariables } from '@/features/todo/api/updateTodo';
import { TodoListResponse, UpdateTodoResponse } from '@/features/todo/model/types';

interface UpdateContext {
  previous: TodoListResponse | undefined;
}

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateTodoResponse, Error, UpdateTodoVariables, UpdateContext>({
    mutationFn: updateTodo,
    onMutate: async ({ itemId, body }) => {
      await queryClient.cancelQueries({ queryKey: ['todoList'] });

      const previous = queryClient.getQueryData<TodoListResponse>(['todoList']);

      queryClient.setQueryData<TodoListResponse>(['todoList'], (old) => {
        if (!old) {
          return [];
        }
        return old.map((item) =>
          item.id === itemId ? { ...item, isCompleted: body.isCompleted! } : item
        );
      });

      return { previous };
    },
    onError: (_error, _variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['todoList'], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
    },
  });
};
