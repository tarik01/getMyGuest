export interface Guest {
  id: number;
  name: string;
  email: string;
  phone?: string;
  cover?: string;
  cpf?: string;
  instagram?: string;
  events?: Event[];
}

export interface Checkin {
  id: number;
  partyId: number;
  guest: Guest;
  checkInTime: Date;
  status?: string;
}

export interface Party {
  id: number;
  name: string;
  description?: string;
  date: Date;
  time: string;
  location?: string;
  locationUrl?: string;
  imageUrl?: string;
  status?: number;
  type?: number;
  checkins?: Checkin[];
  actionButton?: boolean;
  createdBy?: string;
  numberOfGuests?: number;
}
