import Customer from "./Customer";

export default interface Appointment {
  id: number;
  startAt: number;
  customer: Customer;
  stylist: string;
  salon: string;
  notes: string;
}