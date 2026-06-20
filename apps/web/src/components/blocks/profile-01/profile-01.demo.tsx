import { Profile01 } from "./profile-01";

export function Profile01DefaultDemo() {
  return (
    <Profile01
      onUpdateProfile={(data) => console.log("Profile updated:", data)}
      onUpdateNotifications={(settings) => console.log("Notifications updated:", settings)}
      onDeleteAccount={() => console.log("Delete account")}
    />
  );
}

export const demos = [{ name: "Default", component: Profile01DefaultDemo }];
