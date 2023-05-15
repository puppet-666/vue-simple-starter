import { ref } from 'vue';

export function useFold() {
  const isFold = ref(false);

  function setFold(fold: boolean) {
    isFold.value = fold;
  }

  return [isFold, setFold];
}
