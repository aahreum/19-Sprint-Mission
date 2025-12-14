'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '@/features/todo/api/createTodo';
import { TodoList, TodoListResponse } from '@/features/todo/model/types';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,

    onMutate: async ({ body }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.TODO_LIST });

      const previous = queryClient.getQueryData<TodoListResponse>(QUERY_KEYS.TODO_LIST);

      queryClient.setQueryData<TodoListResponse>(QUERY_KEYS.TODO_LIST, (old) => {
        if (!old) {
          return [];
        }

        const newItem: TodoList = {
          id: Date.now(),
          name: body.name,
          isCompleted: false,
        };

        return [newItem, ...old];
      });

      return { previous };
    },

    onError: (_error, _variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(QUERY_KEYS.TODO_LIST, context.previous);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODO_LIST });
    },
  });
};
