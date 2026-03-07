export async function useSubmitContact() {
  return {
    mutate: (data: any, { onSuccess }: any) => {
      console.log("Mock submission:", data);
      setTimeout(() => {
        onSuccess?.();
      }, 500);
    },
    isPending: false
  };
}
