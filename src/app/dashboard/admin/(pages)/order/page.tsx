import { api } from "@/lib/api-fetch";
import OrderTable from "../../_components/order-table";
export type OrderResponse = {
  order: {
    id: string;
    createdAt: string;
    updatedAt: string;
    customerId: string;
    paymentId: string;
    address: string;
    totalPrice: number;
    status: 'pending' | 'processing' | 'completed' | 'cancelled';
    cardImage: string;
    fullName: string;
    phoneNumber: string[];
    email: string[];
    designation: string;
    comment: string
    companyLogoUrl: string
    companyName: string
    companySlogan: string
    companyUrl: string
    image: string
  };
  cards: {
    id: string;
    createdAt: string;
    updatedAt: string;
    customerId: string;
    orderId: string;
    cardImage: string | null;
    status: 'pending' | 'active' | 'expired' | 'paid' | 'inactive';
    startDate: string;
    expiryDate: string;
  }[];
  user: {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    email: string;
    phone_number: string;
    password: string;
    google_id: string | null;
    role_id: string;
  };
  profiles: string[];
}[];

export default async function Page() {

  const res = await api.get('orders/admin')

  console.log(res);

  return (
    <OrderTable res={res.data} />
  );
}
