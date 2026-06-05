import ReservationCard from "@components/ReservationCard";
import {
  getReservation,
  createReservation,
  updatedReservation,
  deleteReservation,
} from "@/services/reservation.service";
import { getSession } from "@/utils";

const renderReservations = async () => {
  const container = document.querySelector("#reservationsContainer");
  const user = getSession();

  if (!container || !user) return;

  const reservations = await getReservation();

  const filteredReservation =
  user.role === "admin"
  ? reservations
  : reservations.filter((reservation) => Number(reservation.userId) === Number(user.id));

container .innerHTML = filteredReservations.length
  ? filteredReservations.nap((reservation) => ReservationCard(reservation)).join("")
  :
  <div class = "w-full text-center py-8 col-span-2">
    <p class = "text-slate-500">No hay reservas disponibles</p>
  </div>
  ;
};

export const homeController = async () => {
  const form = document.querySelector("#reservationForm");
  const container = document.querySelector("#reservationContainer");
  const user = getSession();
}

await renderReservations();

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const startHour = formData.get("startHour");
  const endHour = formData.get("endHour");
  
  if (startHour >= endHour) {
    alert("La hora de inicio debe ser menor que la hora final");
    return;
  }
})