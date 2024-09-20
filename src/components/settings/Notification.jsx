import { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notification = () => {
  const [notification, setNotification] = useState({
    push: true,
    email: false,
    sms: true,
  });
  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notification.push}
        onToggle={() =>
          setNotification({ ...notification, push: !notification.push })
        }
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notification.email}
        onToggle={() =>
          setNotification({ ...notification, email: !notification.email })
        }
      />
      <ToggleSwitch
        label={"SMS Notifications"}
        isOn={notification.sms}
        onToggle={() =>
          setNotification({ ...notification, sms: !notification.sms })
        }
      />
    </SettingSection>
  );
};

export default Notification;
