import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Saree } from '../backend';

export function useAllSarees() {
  const { actor, isFetching } = useActor();

  return useQuery<Saree[]>({
    queryKey: ['sarees', 'all'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSarees();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useOffers() {
  const { actor, isFetching } = useActor();

  return useQuery<Saree[]>({
    queryKey: ['sarees', 'offers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getOffers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNewArrivals() {
  const { actor, isFetching } = useActor();

  return useQuery<Saree[]>({
    queryKey: ['sarees', 'newArrivals'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getNewArrivals();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSaree(id: bigint | undefined) {
  const { actor, isFetching } = useActor();

  return useQuery<Saree | null>({
    queryKey: ['sarees', 'detail', id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      try {
        return await actor.getSaree(id);
      } catch (error) {
        console.error('Error fetching saree:', error);
        return null;
      }
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}
