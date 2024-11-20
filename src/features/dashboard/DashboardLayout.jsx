import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const { isLoading: isLoading2, stays, confirmedStays } = useRecentStays();

  if (isLoading1 || isLoading2) return <Spinner />;

  console.log(
    "bookngs",
    bookings,
    "stays",
    stays,
    "confirmed stays:",
    confirmedStays
  );

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Todays activities</div>
      <div>Statistics</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
