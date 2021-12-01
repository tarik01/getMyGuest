import { Checkin } from '../types';

export async function updateCheckin(checkin: Checkin) {
  const response = await fetch(`/api/checkin/${checkin.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(checkin),
  });
  return response.json();
}
