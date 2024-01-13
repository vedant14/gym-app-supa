import { getGymSessions } from "actions/gym-sessions";

export default async function handler(req, res) {
  const data = await getGymSessions(req.query);
  res.status(200).send({ data: data });
}
