import { getCurrentUser } from "actions/current-user";

export default async function handler(req, res) {
  const data = await getCurrentUser();
  res.status(200).send({ data: data });
}
