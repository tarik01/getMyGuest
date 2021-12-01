import { Guest } from '../types';

export async function getGuests() {
  const response = await fetch('/api/guests');
  const guests = await response.json();
  return guests;
}

export async function getGuest(id: number) {
  const response = await fetch(`/api/guests/${id}`);
  const guest = await response.json();
  return guest;
}

export async function createGuest(guest: Guest) {
  const response = await fetch('/api/guests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(guest),
  });
  const createdGuest = await response.json();
  return createdGuest;
}

export async function updateGuest(guest: Guest) {
  const response = await fetch(`/api/guests/${guest.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(guest),
  });
  const updatedGuest = await response.json();
  return updatedGuest;
}

export async function getGuestEvents(id: number) {
  const response = await fetch(`/api/guests/${id}/events`);
  const events = await response.json();
  return events;
}
