import { Event, Guest } from '../types';
import { API_URL } from './api';

export async function getParties() {
  const parties = await fetch(`${API_URL}/api/parties/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return parties;
}

export async function getParty(id: number | string) {
  const party = await fetch(`${API_URL}/api/parties/${id}/`).then(res =>
    res.json(),
  );
  return party;
}

export async function createEvent(event: Event) {
  const response = await fetch(`${API_URL}/api/parties`, {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}

export async function updateEvent(event: Event) {
  const response = await fetch(`${API_URL}/api/parties/${event.id}`, {
    method: 'PUT',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}

export async function deleteEvent(id: number) {
  const response = await fetch(`${API_URL}/api/parties/${id}`, {
    method: 'DELETE',
  }).then(res => res.json());
  return response;
}

export async function addGuestOnEvent(event: Event, guest: Guest) {
  const response = await fetch(`${API_URL}/api/parties/${event.id}/guests`, {
    method: 'POST',
    body: JSON.stringify(guest),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}
