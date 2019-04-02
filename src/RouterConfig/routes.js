// import Log from "../screens/login/log";
// import MainScreen from '../screens/notifications-list';
// import Cropper from '../screens/testScreens/editor';
// import Components from '../views/Components/Components';
// import LandingPage from '../views/LandingPage/LandingPage';
import Counter from '../views/notifications-list';

let indexRoutes = [
    { path: "/", name: "Home", component: Counter, exact: true },
    { path: "/notifications-list", name: "Notifications List", component: Counter, exact: true },
    { path: "/send-Notification", name: "Send Notification", component: Counter, exact: true },
];

export default indexRoutes;
