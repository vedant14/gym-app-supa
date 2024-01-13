import ApplicationLayout from "@/components/application-layout";
import SessionTable from "@/components/session-table";
import { getGymSessions } from "actions/gym-sessions";
import { useAuth } from "hooks/auth";
import { useEffect, useState } from "react";

export default function Sessions() {
  const [gymSessions, setGymSessions] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    callGetGymSessions();
  }, [gymSessions]);

  async function callGetGymSessions() {
    setGymSessions(await getGymSessions(user.id));
  }
  return (
    <ApplicationLayout title="Gym Sessions">
      {gymSessions && <SessionTable gymSessions={gymSessions} />}
    </ApplicationLayout>
  );
}
