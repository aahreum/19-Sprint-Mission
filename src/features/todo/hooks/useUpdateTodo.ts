'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '@/features/todo/api/updateTodo';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
    },
  });
};
