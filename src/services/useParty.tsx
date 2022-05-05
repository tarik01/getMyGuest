import { getToken } from '../modules/userModel';
import { Party, Guest } from '../types';
import { API_URL } from './api';
import { throwNonFieldErrors } from './helpers';

export async function getParties() {
  const token = `Token ${getToken()}`;
  const parties = await fetch(`${API_URL}/api/parties/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then(res => res.json())
    .catch(err => {
      throwNonFieldErrors(err);
      throw new Error('Erro ao obter dados do servidor!');
    });
  return parties;
}

export async function searchParty(name: string) {
  const token = `Token ${getToken()}`;
  const parties = await fetch(`${API_URL}/api/parties/?search=${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then(res => res.json())
    .catch(err => {
      throwNonFieldErrors(err);
      throw new Error('Erro ao obter dados do servidor!');
    });
  return parties;
}

export async function getParty(id: number | string) {
  const token = `Token ${getToken()}`;
  const party = await fetch(`${API_URL}/api/parties/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then(res => res.json())
    .catch(err => {
      throwNonFieldErrors(err);
      throw new Error('Erro ao obter dados do servidor!');
    });
  return party;
}

export async function createParty(party: Party) {
  const response = await fetch(`${API_URL}/api/parties`, {
    method: 'POST',
    body: JSON.stringify(party),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}

export async function updateParty(party: Party) {
  const response = await fetch(`${API_URL}/api/parties/${party.id}`, {
    method: 'PUT',
    body: JSON.stringify(party),
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

export async function addGuestOnEvent(party: Party, guest: Guest) {
  const response = await fetch(`${API_URL}/api/parties/${party.id}/guests`, {
    method: 'POST',
    body: JSON.stringify(guest),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  return response;
}
