export const baseUrl =
  process.env.BASE_URL || "https://us-central1-bonsai-interview-endpoints.cloudfunctions.net"
export const movieTicketsUrl = `${baseUrl}/movieTickets?skip={skip}&limit={limit}`
