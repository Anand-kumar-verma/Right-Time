
import Signup from "../Adminpages/Authentication/Signup";
import Changepassword from "../Adminpages/Pages/changepassword/Changepassword";
import ColorPrediction1Min from "../Adminpages/Pages/colorprediction/ColorPrediction1Min";
import ColorPrediction2Min from "../Adminpages/Pages/colorprediction/ColorPrediction2Min";
import ColorPrediction3Min from "../Adminpages/Pages/colorprediction/ColorPrediction3Min";
import Dashboard from "../Adminpages/Pages/dashboard/Dashboard";
import DayBookReport from "../Adminpages/Pages/DayBookReport/daybookreport";
import Fund from "../Adminpages/Pages/fund/Fund";
import FundHistory from "../Adminpages/Pages/fund/FundHistory";
import ApprovedRequest from "../Adminpages/Pages/gamewithdrawlrequest/ApprovedRequest";
import GameWithdrawlRequest from "../Adminpages/Pages/gamewithdrawlrequest/GameWithdrawlRequest";
import PendingRequest from "../Adminpages/Pages/gamewithdrawlrequest/PendingRequest";
import RejectRequest from "../Adminpages/Pages/gamewithdrawlrequest/RejectRequest";
import BetBonus from "../Adminpages/Pages/genealogy/BetBonus";
import DailySalaryBonus from "../Adminpages/Pages/genealogy/DailySalaryBonus";
import DepositBonus from "../Adminpages/Pages/genealogy/DepositeBonus";
import DownLine from "../Adminpages/Pages/genealogy/DownLine";
import LevelBonus from "../Adminpages/Pages/genealogy/LevelBonus";
import RoiBonus from "../Adminpages/Pages/genealogy/RoiBonus";
import SelfDepositBonus from "../Adminpages/Pages/genealogy/SelfDepositBonus";
import WelcomeBonus from "../Adminpages/Pages/genealogy/WelcomeBonus";
import UserPermission from "../Adminpages/Pages/Permission/Userpermission";
import AddPlayer from "../Adminpages/Pages/player/AddPlayer";
import Player from "../Adminpages/Pages/player/Player";
import AviatorReport from "../Adminpages/Pages/Report/AvaitorReport";
import TrxReport from "../Adminpages/Pages/Report/TrxReport";
import WingoReport from "../Adminpages/Pages/Report/WingoReport";
import SetBonus from "../Adminpages/Pages/SetBonus/SetBonus";
import DownlineTeam from "../Adminpages/Pages/Team/DownlineTeam";
import UplineTeam from "../Adminpages/Pages/Team/UplineTeam";


export const adminroutes = [ 
  {
    id: 1,
    path: "/admindashboard",
    component: <Dashboard />,
    navItem: "Dashboard",
  },
  {
    id: 1,
    path: "/signUp",
    component: <Signup />,
    navItem: "Registration",
  },
  {
    id: 3,
    path: "/player",
    component: <Player />,
    navItem: "Player",
  },
 
  {
    id: 5,
    path: "/game-withdrawl-request",
    component: <GameWithdrawlRequest />,
    navItem: "Game Withdrawl Request",
  },
  {
    id: 6,
    path: "/welcomebonus",
    component: <WelcomeBonus/>,
    navItem: "Welcome Bonus",
  },
  {
    id: 7,
    path: "/genealogy/downline",
    component: <DownLine />,
    navItem: "Downline",
  },
  
  {
    id: 9,
    path: "/fund",
    component: <Fund/>,
    navItem: "Fund",
  },
  // {
  //   id: 10,
  //   path: "/player/add-player",
  //   component: <AddPlayer/>,
  //   navItem: "Add Player",
  // },
  {
    id: 11,
    path: "/change-password",
    component: <Changepassword/>,
    navItem: "Change Password",
  },
  {
    id: 12,
    path: "/game-withdrawl-request/approved-request",
    component: <ApprovedRequest/>,
    navItem: "Approved Request",
  },
  {
    id: 13,
    path: "/game-withdrawl-request/reject-request",
    component: <RejectRequest/>,
    navItem: "Reject Request",
  },
  {
    id: 14,
    path: "/depositBonus",
    component: <DepositBonus/>,
    navItem: " Referral Bonus",
  },
 
  {
    id: 15,
    path: "/selfdepositBonus",
    component: <SelfDepositBonus/>,
    navItem: "Self Deposit Bonus",
  },
  {
    id: 16,
    path: "/roiBonus",
    component: <RoiBonus/>,
    navItem: "ROI Bonus",
  },
  {
    id: 17,
    path: "/dailysalaryBonus",
    component: <DailySalaryBonus/>,
    navItem: "Daily Salary Bonus",
  },
  {
    id: 18,
    path: "/betBonus",
    component: <BetBonus/>,
    navItem: "Self Trading Bonus",
  },
  {
    id: 19,
    path: "/levelBonus",
    component: <LevelBonus/>,
    navItem: "Level Bonus",
  },
  {
    id: 20,
    path: "/game-withdrawl-request/pending-request",
    component: <PendingRequest/>,
    navItem: "Gateway Pending Request",
  },
  {
    id: 23,
    path: "/color-prediction-1-min",
    component: <ColorPrediction1Min/>,
    navItem: "Color Prediction 1 Min",
  },
  {
    id: 24,
    path: "/color-prediction-2-min",
    component: <ColorPrediction2Min/>,
    navItem: "Color Prediction 2 Min",
  },
  {
    id: 25,
    path: "/color-prediction-3-min",
    component: <ColorPrediction3Min/>,
    navItem: "Color Prediction 3 Min",
  },
  {
    id: 26,
    path: "/fund/transfer-fund-history",
    component: <FundHistory/>,
    navItem: "Fund History",
  },
  {
    id: 27,
    path: "/aviator_report",
    component: <AviatorReport/>,
    navItem: "Aviator Report",
  },
  {
    id: 28,
    path: "/wingo_report",
    component: <WingoReport/>,
    navItem: "Wingo Report",
  },
  {
    id: 29,
    path: "/trx_report",
    component: <TrxReport/>,
    navItem: "Trx Report",
  },
  {
    id: 30,
    path: "/user_permission",
    component: <UserPermission/>,
    navItem: "User Permission",
  },
  {
    id: 31,
    path: "/daybook_report",
    component: <DayBookReport/>,
    navItem: "Day Book Report",
  },
  {
    id: 32,
    path: "/upline_team",
    component: <UplineTeam/>,
    navItem: "UpLine Team",
  },
  {
    id: 33,
    path: "/down_team",
    component: <DownlineTeam/>,
    navItem: "DownLine Team",
  },
  {
    id: 34,
    path: "/set_bonus",
    component: <SetBonus/>,
    navItem: "Set Bonus ",
  },
];

// UpdatePermissions