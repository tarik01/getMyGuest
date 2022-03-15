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

export interface Event {
  id: number;
  title: string;
  description?: string;
  date: Date;
  cover?: string;
  location?: string;
  locationUrl?: string;
  guests?: Guest[];
}

export interface Checkin {
  id: number;
  eventId: number;
  guestId: number;
  date: Date;
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
  image?: string;
  status?: number;
  type?: number;
  guests?: Guest[];
  actionButton?: boolean;
}
