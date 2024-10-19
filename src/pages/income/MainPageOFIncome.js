import { Diversity2Outlined } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import RedeemIcon from "@mui/icons-material/Redeem";
import StoreIcon from "@mui/icons-material/Store";
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { bgdarkgray, bggrad, bgtan, zubgback, zubgbackgrad, zubgmid, zubgtext } from "../../Shared/color";
import Layout from "../../component/Layout/Layout";

function MainPageOFIncome() {
  const data_array = [
    {
      to: "/account/income-main/welcome-bonus",
      name: "Welcome Bonus",
      logo: <PriceCheckIcon className="!w-[40px] !h-[40px] " color="black" />,
    },

    {
      to: "/account/income-main/self-bonus",
      name: "Self Deposit Bonus",
      logo: <RedeemIcon className="!w-[40px] !h-[40px] " color="black" />,
    },
    {
      to: "/account/income-main/deposit-bonus",
      name: "Deposit Bonus",
      logo: <Diversity2Outlined className="!w-[40px] !h-[40px] " color="black" />,
    },
       {
      to: "/account/income-main/daily-salary-bonus",
      name: "Daily Salary Bonus",
      logo: <StoreIcon className="!w-[40px] !h-[40px] " color="black" />,
    },
    {
      to: "/account/income-main/team-trading-bonus",
      name: "Self Trading Bonus",
      logo: <CardGiftcardIcon className="!w-[40px] !h-[40px] " color="black" />,
    },
     {
       to: "/account/income-main/roi-bonus",
       name: "ROI Bonus",
       logo: <AccountBalanceIcon className="!w-[40px] !h-[40px] " color="black" />,
     },
    {
      to: "/account/income-main/level-bonus",
     name: "Level Bonus",
     logo: <PriceCheckIcon className="!w-[40px] !h-[40px] " color="black" />,
   },
  
  //    {
  //     to: "/account/income-main/referral-bonus",
  //     name: "Gift Bonus ",
  //     logo: <RedeemIcon className="!w-[40px] !h-[40px] " color="black" />,
  //   },
    // {
    //   to: "/account/income-main/referral-bonus",
    //   name: "Sponsor Income",
    //   logo: <RedeemIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/daily-salary-bonus",
    //   name: "Daily Salary",
    //   logo: <StoreIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/self-trading-bonus",
    //   name: "Self Trade Income",
    //   logo: <StoreIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/weekly-bonus",
    //   name: "Weekly Salary Income",
    //   logo: <Diversity2Outlined className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/cash_back_report",
    //   name: "Cashback Income",
    //   logo: <StoreIcon className="!w-[40px] !h-[40px] !text-white" color="#8f5206" sx={{ filter: 'invert(1)' }} />,
    // },
  ];

  return (
    <Layout header={false}>
      <Container
        sx={{
          background: bgdarkgray,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            // background: zubgtext,

          }}
        >
          <Typography
            variant="body1" color="initial" sx={{ color: bgtan, fontSize: "20px", fontWeight: "600", background: zubgtext, textAlign: 'center', padding: '10px' }}>
            Income
          </Typography>


          <Box sx={{}}>
            <TableContainer sx={{ background: bggrad, width: '95%', ml: '2.5%', mt: 2, }}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell className="!border !text-xs !border-r !border-black  !text-center" sx={{ color: "black !important", fontWeight: "600" }}>S.No</TableCell>
                    <TableCell className="!border !text-xs !border-r !border-black  !text-center" sx={{ color: "black !important", fontWeight: "600" }}>Title</TableCell>
                    <TableCell className="!border !text-xs !border-r !border-black  !text-center" sx={{ color: "black !important", fontWeight: "600" }}>Icon</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data_array.map((item, index) => (
                    <TableRow key={item.name}>
                      <TableCell className="!border !text-xs !border-r !border-black  !text-center">
                        <NavLink style={{ textDecoration: 'none', color: 'black' }}>
                          {index + 1}
                        </NavLink>
                      </TableCell>
                      <TableCell className="!border !text-xs !border-r !border-black  !text-center">
                        <NavLink to={item.to} style={{ textDecoration: '', color: 'black' }}>
                          {item.name}
                        </NavLink>
                      </TableCell>
                      <TableCell className="!border !text-xs !border-r !border-black  !text-center">
                        <NavLink to={item.to} style={{ textDecoration: '', color: 'black !important' }}>
                          {item.logo}
                        </NavLink>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default MainPageOFIncome;


