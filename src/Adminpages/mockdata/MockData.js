import { Approval, BoltRounded, Book, Cancel, Collections, ColorizeRounded, DownhillSkiing, Games, HistoryEdu, LeakRemoveOutlined, LoginOutlined, MonetizationOn, Money, MoneyOff, Pending, People, PlayCircleFilledSharp, Report, ReportGmailerrorred, ReportOff, ReportProblem, RequestPage, RowingSharp, SailingSharp, SelfImprovement, Transcribe, UpcomingSharp, WheelchairPickupOutlined } from "@mui/icons-material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import LockResetIcon from "@mui/icons-material/LockReset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
export const all_Data = [
  {
    id: 1,
    navLink: "/admindashboard",
    navItem: "Dashboard",
    navIcon: (
      <span>
        <DashboardCustomizeIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 31,
    navLink: "/signUp",
    navItem: "Registration",
    navIcon: (
      <span>
        <LoginOutlined color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 2,
    navLink: "/player",
    navItem: "Player",
    navIcon: (
      <span>
        <SportsEsportsIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 2.2,
        navLink: "/player",
        navItem: "All Player",
        navIcon: (
          <span>
            <Diversity1Icon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      // {
      //   id: 2.3,
      //   navLink: "/player/add-player",
      //   navItem: "Add Player",
      //   navIcon: (
      //     <span>
      //       <AddToPhotosIcon color="#15317E" fontSize="medium" />
      //     </span>
      //   ),
      // },
    ],
  },
 

  {
    id: 5,
    navLink: "/game-withdrawl-request",
    navItem: " Withdrawl Request",
    navIcon: (
      <span>
        <FormatShapesIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 5.1,
        navLink: "/game-withdrawl-request",
        navItem: "Withdrawl Request",
        navIcon: (
          <span>
            <RequestPage color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 5.2,
        navLink: "/game-withdrawl-request/reject-request",
        navItem: "Reject Request",
        navIcon: (
          <span>
            <Cancel color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 5.3,
        navLink: "/game-withdrawl-request/pending-request",
        navItem: "Gateway Pending Request",
        navIcon: (
          <span>
            <Pending color="#15317E" fontSize="medium" />
          </span>
        ),
      },
     
      {
        id: 5.4,
        navLink: "/game-withdrawl-request/approved-request",
        navItem: "Approved Request",
        navIcon: (
          <span>
            <Approval color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 6,
    navLink: "/welcomebonus",
    navItem: "Income",
    navIcon: (
      <span>
        <CardGiftcardIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 6.1,
        navLink: "/welcomebonus",
        navItem: "Welcome Bonus",
        navIcon: (
          <span>
            <WheelchairPickupOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.2,
        navLink: "/depositBonus",
        navItem: "Referral Bonus",
        navIcon: (
          <span>
            <MoneyOff color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.3,
        navLink: "/selfdepositBonus",
        navItem: "Self Deposit Bonus",
        navIcon: (
          <span>
            <SelfImprovement color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.4,
        navLink: "/roiBonus",
        navItem: "Roi Bonus",
        navIcon: (
          <span>
            <RowingSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.5,
        navLink: "/dailysalaryBonus",
        navItem: "Daily Salary Bonus",
        navIcon: (
          <span>
            <SailingSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.6,
        navLink: "/betBonus",
        navItem: "Self Trading Bonus",
        navIcon: (
          <span>
            <Collections color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.7,
        navLink: "/levelBonus",
        navItem: "Level Bonus",
        navIcon: (
          <span>
            <LeakRemoveOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 38,
    navLink: "/set_bonus",
    navItem: "Set Bonus",
    navIcon: (
      <span>
        <BoltRounded color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [ ],
  },
  {
    id: 8,
    navLink: "/fund",
    navItem: "Fund",
    navIcon: (
      <span>
        <Money color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 8.1,
        navLink: "/fund",
        navItem: "Add Fund",
        navIcon: (
          <span>
            <MonetizationOn color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.2,
        navLink: "/fund/transfer-fund-history",
        navItem: "Transfer Fund History",
        navIcon: (
          <span>
            <Transcribe color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
 
  
  {
    id: 11,
    navLink: "/color-prediction-1-min",
    navItem: "Wingo",
    navIcon: (
      <span>
        <Games color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 11.1,
        navLink: "/color-prediction-1-min",
        navItem: "Wingo 1 Min",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.2,
        navLink: "/color-prediction-2-min",
        navItem: "Wingo 2 Min",
        navIcon: (
          <span>
            <ColorizeRounded color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.3,
        navLink: "/color-prediction-3-min",
        navItem: "Wingo 3 Min",
        navIcon: (
          <span>
            <HistoryEdu color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    
    ],
  },
  {
    id: 22,
    navLink: "/upline_team",
    navItem: "Team",
    navIcon: (
      <span>
        <People color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 22.1,
        navLink: "/upline_team",
        navItem: "Upline Team",
        navIcon: (
          <span>
            <UpcomingSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 22.2,
        navLink: "/down_team",
        navItem: "Downline Team",
        navIcon: (
          <span>
            <DownhillSkiing color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 13,
    navLink: "/aviator_report",
    navItem: "Report",
    navIcon: (
      <span>
        <Report color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 13.1,
        navLink: "/aviator_report",
        navItem: "Aviator Report",
        navIcon: (
          <span>
            <ReportProblem color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 13.2,
        navLink: "/wingo_report",
        navItem: "Wingo Report",
        navIcon: (
          <span>
            <ReportOff color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 13.3,
        navLink: "/trx_report",
        navItem: "Trx Report",
        navIcon: (
          <span>
            <ReportGmailerrorred color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 17,
    navLink: "/daybook_report",
    navItem: "DayBook Report",
    navIcon: (
      <span>
        <Book color="#15317E" fontSize="medium" />
      </span>
    ),
  },
  {
    id: 14,
    navLink: "/user_permission",
    navItem: "User Permission",
    navIcon: (
      <span>
        <AddToPhotosIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 8,
    navLink: "/change-password",
    navItem: "Change Password",
    navIcon: (
      <span>
        <LockResetIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  
  {
    id: 12,
    navLink: "/dashboard",
    navItem: "User Panel",
    navIcon: (
      <span>
        <ViewCarouselIcon color="#15317E" fontSize="medium" />
      </span>
    ),
  },
];
