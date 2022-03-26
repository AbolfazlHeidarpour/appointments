export default function convertUnixTimeStampToTimeOfDay (startAt: number): string {
  const [h, m] = new Date(startAt).toTimeString().split(':');

  return `${h}:${m}`;
}