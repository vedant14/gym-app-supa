import { userRegisterWithGithub } from "actions/register";

export default async function handler(req, res) {
  const data = await userRegisterWithGithub();
  res.status(200).send({ data: data });
}
