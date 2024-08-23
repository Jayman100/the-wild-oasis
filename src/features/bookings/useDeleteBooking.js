import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBook, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success(`Booking  successfully deleted`);

      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("There was an error while deleting booking");
    },
  });

  return { deleteBook, isDeletingBooking };
}

export default useDeleteBooking;
