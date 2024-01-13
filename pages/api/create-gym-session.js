import { createUserProfile } from "actions/user-profile";

export default async function handler(req, res) {
  const data = await createUserProfile(req.body);
  res.status(200).send({ data: data });
}
