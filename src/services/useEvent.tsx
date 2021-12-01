import { Event, Guest } from '../types';

export async function getEvents() {
  const events = await fetch('/api/events').then(res => res.json());
  return events;
}

export async function getEvent(id: number) {
  const event = await fetch(`/api/events/${id}`).then(res => res.json());
  return event;
}

export async function createEvent(event: Event) {
  const response = await fetch('/api/events', {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}

export async function updateEvent(event: Event) {
  const response = await fetch(`/api/events/${event.id}`, {
    method: 'PUT',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}

export async function deleteEvent(id: number) {
  const response = await fetch(`/api/events/${id}`, {
    method: 'DELETE',
  }).then(res => res.json());
  return response;
}

export async function addGuestOnEvent(event: Event, guest: Guest) {
  const response = await fetch(`/api/events/${event.id}/guests`, {
    method: 'POST',
    body: JSON.stringify(guest),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}
