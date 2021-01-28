export function pathFinder(pathname: string) {
  const [, , latlng, date] = pathname.split("/");
  if (!latlng) return;
  const [lat, lng] = latlng?.split(",");
  return { lat: Number(lat), lng: Number(lng), date };
}
