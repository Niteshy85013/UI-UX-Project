import { Divider, Modal } from "antd";
import React from "react";

function Notifications({
  notifications = [],
  reloadNotifications,
  showNotifications,
  setShowNotifications,
}) {
  return (
    <Modal
      title="Notifications"
      open={showNotifications}
      onCancel={() => setShowNotifications(false)}
      centered
      width={1000}
      footer={null}
    >
      <div className="flex flex-col gap-2">
        {notifications.map((notification) => (
          <div className="flex flex-col   border border-solid p-2 border-gray-500 rounded">
            <h5 className="text-green-800">{notification.title}</h5>

            <span className="text-black">{notification.message}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default Notifications;
