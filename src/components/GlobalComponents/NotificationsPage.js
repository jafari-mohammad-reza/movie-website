import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNotification,
  selectNotification,
    readNotification,
    markAllNotifications,
} from "../../features/notificationsSlicer";

function NotificationsPage() {
  const selector = useSelector(selectNotification);
  const dispatch = useDispatch();
  return (
    <div className=' py-16 md:py-10 lg:py-5  px-6 md:px-12 lg:px-16 overflow-hidden h-screen'>
      <div className="flex px-6 md:px-10 lg:px-14 border-b-2   pb-4  items-center justify-between">
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
          Notifications
        </h3>
        <h3 className="text-blue-400 text-xs sm:text-sm md:text-base  cursor-pointer" onClick={() => dispatch(markAllNotifications)}>
          Mark all as read
        </h3>
      </div>
      {/* //! notifications */}
      <div className="flex flex-col space-y-4 py-4 px-3 overflow-y-scroll h-full ">
        {selector.length >= 1 ? (
          selector.map((notification) => {
            return (
              <div className="h-24 flex items-center justify-between border-b-2 border-red-600 pb-4">
                <div>
                  <div className="flex items-center space-x-1">
                    {notification.isRead === false && (
                      <span class="flex relative h-3 w-3 cursor-pointer" onClick={() => dispatch(readNotification(notification))}>
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75" />
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                      </span>
                    )}
                    <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                      {notification.title}
                    </h3>
                  </div>
                  <p className="font-sans text-base md:text-lg w-60">
                    {notification.text}
                  </p>
                </div>
                <div>
                  <span>{notification?.date}</span>
                  <FaRegTrashAlt
                    className="text-red-600 cursor-pointer transition-all duration-200 hover:-translate-x-2 hover:scale-110 "
                    onClick={() => dispatch(deleteNotification(notification))}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">
            There Is No Notification
          </h1>
        )}
      </div>
    </div>
  );
}

export default NotificationsPage;
