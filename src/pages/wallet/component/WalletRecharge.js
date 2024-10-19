import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { cashDepositRequestValidationSchema } from "../../../Shared/Validation";
import {
  bgdarkgray,
  bggrad,
  bglightgray,
  bgtan,
  zubgmid,
  zubgshadow,
  zubgtext
} from "../../../Shared/color";
import audiovoice from "../../../assets/bankvoice.mp3";
import user from "../../../assets/check.png";
import dot from "../../../assets/images/circle-arrow.png";
import logo1 from "../../../assets/images/logotred.png";
import balance from "../../../assets/images/send.png";
import upipayment from "../../../assets/images/upi.jpg";
import usdt from "../../../assets/images/usdt.png";
import pay from "../../../assets/images/wallet.png";
import bg from "../../../assets/img/download.png";
import Layout from "../../../component/Layout/Layout";
import { apiConnectorGet, apiConnectorPost } from "../../../services/apiconnector";
import { endpoint } from "../../../services/urls";
import theme from "../../../utils/theme";

function WalletRecharge() {
  const deposit_amount = localStorage.getItem("amount_set");
  const audioRefMusic = React.useRef(null);
  const [deposit_req_data, setDeposit_req_data] = React.useState();
  const [loding, setloding] = React.useState(false);
  const [selectedGateway, setSelectedGateway] = React.useState("");
  const [amount, setAmount] = React.useState({
    wallet: 0,
    winning: 0,
    cricket_wallet: 0,
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    handlePlaySound();

  }, []);


  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      console.error("Error during play:", error);
    }
  };

  const walletamountFn = async () => {
    try {
      const response = await apiConnectorGet(
        `${endpoint.userwallet}`
      );

      setAmount(response?.data?.data);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    walletamountFn();
  }, []);


  const initialValues = {
    amount: deposit_amount || 0,
  };

  const fk = useFormik({
    initialValues: initialValues,
    validationSchema: cashDepositRequestValidationSchema,
    onSubmit: () => {
      paymentRequest(fk.values.amount);
    },
  });
  async function paymentRequest(amnt) {
    if (!amnt) {
      toast("Please Enter the amount");
      return;

    }
    const reqbody = {
      u_req_amount: amnt || 110,
      u_gateway_type: selectedGateway === "Gateway1" ? "1" : "2"
    };
    try {
      const res = await apiConnectorPost(`${endpoint.payment_request}`, reqbody);
      const qr_url =
        (res?.data?.data?.upi_deep_link) || "";

      if (qr_url) {
        setDeposit_req_data(qr_url);
      } else {
        res?.data?.msg ? toast(res?.data?.msg) : toast("Something went wrong");
      }
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }


  const audio = React.useMemo(() => {
    return (
      <audio ref={audioRefMusic} hidden>
        <source src={`${audiovoice}`} type="audio/mp3" />
      </audio>
    );
  }, []);

  const rechargeInstruction = React.useMemo(() => {
    return (
      <Box
        sx={{
          padding: "10px",
          width: "95%",
          margin: "auto",
          mt: "20px",
          background: theme.palette.primary.main,
          borderRadius: "10px",
          mb: 8,
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={user} width={30}></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "15px ", color: 'white !important', ml: "10px" }}
          >
            {" "}
            Recharge instructions
          </Typography>
        </Stack>
        <Box
          sx={{
            border: "1px solid white",
            padding: 2,
            borderRadius: "10px",
          }}
        >
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15} sx={{ filter: 'brightness(0.5)' }}></Box>
            <Typography variant="body1" sx={{ color: 'white !important', fontSize: '12px' }}>
              If the transfer time is up, please fill out the deposit form
              again.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15} sx={{ filter: 'brightness(0.5)' }}></Box>
            <Typography variant="body1" sx={{ color: 'white !important', fontSize: '12px' }}>
              The transfer amount must match the order you created, otherwise
              the money cannot be credited successfully.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15} sx={{ filter: 'brightness(0.5)' }}></Box>
            <Typography variant="body1" sx={{ color: 'white !important', fontSize: '12px' }}>
              If you transfer the wrong amount, our company will not be
              responsible for the lost amount!
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15} sx={{ filter: 'brightness(0.5)' }}></Box>
            <Typography variant="body1" sx={{ color: 'white !important', fontSize: '12px' }}>
              Note: do not cancel the deposit order after the money has been
              transferred.
            </Typography>
          </Stack>
        </Box>
      </Box>
    );
  }, []);

  const payment_button = React.useMemo(() => {
    return (
      <>
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={pay} width={30} sx={{ filter: 'saturate(-1)' }}></Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "15px ", color: 'white !important', ml: "10px" }}
          >
            Deposit amount
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mt: "10px",
          }}
        >
          <Button
            sx={style.paytmbtn}
            onClick={() => {
              setDeposit_req_data(null);
              fk.setFieldValue("amount", 500);
            }}
          >
            {" "}
            ₹ 500
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => {
              setDeposit_req_data(null);
              fk.setFieldValue("amount", 1000)
            }
            }
          >
            {" "}
            ₹ 1K
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => {
              setDeposit_req_data(null);
              fk.setFieldValue("amount", 5000)
            }
            }
          >
            {" "}
            ₹ 5K
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => {
              setDeposit_req_data(null);
              fk.setFieldValue("amount", 10000)
            }
            }

          >
            {" "}
            ₹ 10K
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => {
              setDeposit_req_data(null);
              fk.setFieldValue("amount", 15000)
            }
            }
          >
            {" "}
            ₹ 15K
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => {
              setDeposit_req_data(null);
              fk.setFieldValue("amount", 20000)
            }
            }
          >
            {" "}
            ₹ 20K
          </Button>
        </Stack>
      </>
    );
  }, []);

  if (deposit_req_data)
    window.open(deposit_req_data);
  return (
    <Layout header={false}>
      {audio}
      <Container
        className="no-scrollbar"
        sx={{
          background: bgdarkgray,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <Box sx={style.header}>
          <Box onClick={() => {
            setDeposit_req_data(null);
            navigate('/account')
          }
          }>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Deposit
          </Typography>
          <Box component={NavLink} to="/depositHistory">
            <HistoryIcon />
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            padding: "15px 15px",
            width: "95%",
            margin: "auto",
            background: '#d9ac4f6e',
            position: "relative",
            backgroundImage: `url(${bg})`,
            backgroundSize: '100% 100%',
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box
              component="img"
              src={balance}
              width={50}
              sx={{
                position: "relative",
                zIndex: 10,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "16px ",
                fontWeight: 500,
                color: "white",
                ml: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {" "}
              Balance
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              mt: "10px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "30px ",
                fontWeight: "600",
                color: "white",
                mr: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
                 ₹ {Number(
                  Number(amount?.wallet || 0) + Number(amount?.winning || 0) + Number(amount?.working_wallet || 0)
                )?.toFixed(2)}
              {/* {deposit_amount
                ? Number(amount?.cricket_wallet || 0)?.toFixed(2)
                : Number(
                  Number(amount?.wallet || 0) + Number(amount?.winning || 0)
                )?.toFixed(2)} */}
            </Typography>
            <CachedIcon
              sx={{
                color: "white",
                position: "relative",
                zIndex: 10,
              }}
            />
          </Stack>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%', padding: '10px 0px 0px 0px' }}>
            <div class="visa_info">
              <img style={{ width: '50px' }} src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
            </div>
            <div class="visa_logo">
              <Box component={'img'} src={logo1} sx={{ width: '90px' }}></Box>
            </div>
          </Stack>
        </Box>
        <Box className="fccsb w95" mt={2}>
          <Box sx={{ width: '48%', background: '#FFFFFF', borderRadius: "5px" }} className="fccc" component={NavLink} onClick={() => navigate("/wallet/Recharge")}>
            <Box component="img" src={upipayment} sx={{ width: "100%", height: '55px', borderRadius: "10px", pt: 1, px: 1, }}></Box>
            <Typography className="fp13 " sx={{ fontWeight: 'bolder', borderRadius: "0px 0px  5px 5px", background: bggrad, width: '100%', py: 1, textAlign: 'center', fontFamily: 'roboto !important' }} mt={1}>
              UPI
            </Typography>
          </Box>
          {/* <Box sx={{ width: '48%', background: '#FFFFFF', borderRadius: "5px" }} className="fccc" onClick={() => navigate('/rechargeusdt')}>
            <Box component="img" src={usdt} sx={{ width: "100%", height: '55px', borderRadius: "10px", pt: 1, px: 1, }}></Box>
            <Typography className="fp13 " sx={{ fontWeight: 'bolder', borderRadius: "0px 0px  5px 5px", background: bggrad, width: '100%', py: 1, textAlign: 'center', fontFamily: 'roboto !important' }} mt={1}>
              USDT
            </Typography>
          </Box> */}
        </Box>


        <Box
          sx={{
            padding: "10px",
            width: "95%",
            margin: "auto",
            mt: "10px",
            background: bglightgray,
            borderRadius: "10px",
            mb: 2,
          }}
        >
          {payment_button}
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: "10px",
            }}
          >
            <OutlinedInput
              fullWidth
              placeholder="Enter amount"
              className="wallet-textfield"
              type="number"
              id="amount"
              name="amount"
              value={fk.values.amount}
              onChange={fk.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end"
                    onClick={() => {
                      setDeposit_req_data(null);
                      fk.setFieldValue("amount", "")
                    }
                    }  >
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
            {fk.touched.amount && fk.errors.amount && (
              <div className="error">{fk.errors.amount}</div>
            )}

            <Button sx={style.paytmbtntwo} onClick={fk.handleSubmit}>
              Deposit
            </Button>
          </Stack>
        </Box>
        {rechargeInstruction}


        <CustomCircularProgress isLoading={loding} />
      </Container>
    </Layout>
  );
}

export default WalletRecharge;

const style = {
  header: {
    padding: "10px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 3,
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: bgtan,
    },
    "& > a > svg": {
      color: bgtan,
      fontSize: "35px",
    },
  },
  wthui: {
    textAlign: "center",
    width: "32%",
    minHeight: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: "white" },
  },
  paymentlink: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    background: zubgtext,
    boxShadow: zubgshadow,
    padding: "10px 0px",
    borderRadius: "10px",
    "&>p": {
      color: "white",
      fontSize: "12px",
      fontWeight: "500",
      textAlign: "center",
      mt: "5px",
    },
  },
  paymentBoxOuter: {
    // width: "50%",
    // marginLeft: "5%",
    my: "20px",
    // display: "flex",
    // flexWrap: "wrap",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  paytmbtn: {
    mb: 2,
    background: bggrad,
    color: bgtan,
    width: "31%",
    // border: "1px solid white",
    padding: "10px",
    "&:hover": { background: theme.palette.primary.dark, },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: bggrad,
    color: bgtan,
    width: "100%",
    mt: "20px",
    // border: "1px solid white",
    padding: "10px",
    "&:hover": { background: theme.palette.secondary.dark, },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": {
      marginLeft: "10px",
      color: zubgtext,
      fontSize: "12px",
    },
  },
};
