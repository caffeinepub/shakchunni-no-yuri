import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Tribute } from "../backend.d.ts";
import { useActor } from "./useActor";

export function useGetAllTributes() {
  const { actor, isFetching } = useActor();
  return useQuery<Tribute[]>({
    queryKey: ["tributes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTributes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLeaveTribute() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      message,
      author,
    }: { message: string; author: string }) => {
      if (!actor) throw new Error("No actor available");
      return actor.leaveTribute(message, author);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tributes"] });
    },
  });
}
