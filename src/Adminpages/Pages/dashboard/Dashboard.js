import React from "react";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GavelIcon from "@mui/icons-material/Gavel";
import MoneyIcon from "@mui/icons-material/Money";
import { useQuery } from "react-query";
import ReactApexChart from "react-apexcharts";

import {
  aviatorChart,
  businessChart,
  dashboard_counter_function,
  registrationCahrt,
  trxChart,
  wingoChart,
} from "../../Services";
import { CircularProgress } from "@mui/material";
import moment from "moment/moment";
const Dashboard = () => {
  const date_data = [
    moment(Date.now())?.format("DD-MM"),
    String(new Date().getDate() - 1) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 2) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 3) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 4) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 5) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 6) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 7) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 8) + "-" + String(new Date().getMonth() + 1),
    String(new Date().getDate() - 9) + "-" + String(new Date().getMonth() + 1),
  ];
  const { isLoading, data: dashboard_data } = useQuery(
    ["dashboard"],
    () => dashboard_counter_function(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const dashboard_new_data = dashboard_data?.data?.data?.[0];

  const { data: registration } = useQuery(
    ["registrationchart"],
    () => registrationCahrt(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const registrationnew_data = registration?.data?.data || [];

  const { data: business } = useQuery(
    ["businesschart"],
    () => businessChart(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const businessnew_data = business?.data?.data || [];

  const { data: trx } = useQuery(["trxchart"], () => trxChart(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
  const trxnew_data = trx?.data?.data || [];

  const { data: wingo } = useQuery(["wingochart"], () => wingoChart(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
  const wingonew_data = wingo?.data?.data || [];

  const { data: aviator } = useQuery(["aviatorchart"], () => aviatorChart(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
  const aviatornew_data = aviator?.data?.data || [];

  const chartState = {
    series: [
      {
        name: "Users",
        data: registrationnew_data?.map((item) => item?.["COUNT(id)"] || 0),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: date_data,
      },
      yaxis: {
        title: {
          text: "Counts",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => ` ${val} `,
        },
      },
    },
  };
  const businesschartState = {
    series: [
      {
        name: "Net Profit",
        data: businessnew_data?.map(
          (item) => item?.["IFNULL(SUM(IFNULL(`tr15_amt`,0)),0)"] || 0
        ),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: date_data,
      },
      yaxis: {
        title: {
          text: "Rs.",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `${val}`,
        },
      },
    },
  };
  const trxwingochart = {
    series: [
      {
        name: "series1",
        data: trxnew_data?.map(
          (item) => item?.["IFNULL(SUM(IFNULL(`amount`,0)),0)"] || 0
        ),
      },
      {
        name: "series2",
        data: wingonew_data?.map(
          (item) => item?.["IFNULL(SUM(IFNULL(`amount`,0)),0)"] || 0
        ),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "date",
        categories: date_data,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
      yaxis: {
        title: {
          text: "Rs.",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => ` ${val} `,
        },
      },
    },
  };
  const aviatorchart = {
    series: [
      {
        name: "series1",
        data: aviatornew_data?.map(
          (item) => item?.["IFNULL(SUM(IFNULL(`amount`,0)),0)"] || 0
        ),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "date",
        categories: date_data,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
    },
  };
  const dashboardcount1 = {
    series: [
      dashboard_new_data?.total_game,
      dashboard_new_data?.total_player,
      dashboard_new_data?.total_active_user,
      dashboard_new_data?.today_withdrawal_pending,
    ],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return;
              },
            },
          },
        },
      },
      labels: ["Game", "Player", "User", "WithdrawalPending"],
    },
  };
  const dashboardcount2 = {
    series: [
      dashboard_new_data?.total_bets,
      dashboard_new_data?.total_rejected_withdrawal,
      dashboard_new_data?.commisstion,
      dashboard_new_data?.total_withdrawal_approval,
    ],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return;
              },
            },
          },
        },
      },
      labels: [
        "Bets",
        "Rejected Withdrawal",
        "Commission",
        "Withdrawal Approval",
      ],
    },
  };
  const data = [
    {
      id: 1,
      item: "Total Game",
      icon: (
        <SportsVolleyballIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.total_game || 0,
    },
    {
      id: 2,
      item: "Total Player",
      icon: (
        <SportsKabaddiIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.total_player || 0,
    },
    {
      id: 3,
      item: "Active User",
      icon: (
        <PersonPinCircleIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.total_active_user || 0,
    },
    {
      id: 4,
      item: "Today Recharge",
      icon: (
        <MonetizationOnIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: Number(dashboard_new_data?.today_recharge)?.toFixed(2) || 0,
    },
    {
      id: 5,
      item: "Total Recharge",
      icon: (
        <CurrencyExchangeIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: Number(dashboard_new_data?.total_recharge)?.toFixed(2) || 0,
    },
    {
      id: 6,
      item: "Today Withdrawl Approval",
      icon: <PriceCheckIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.today_withdrawal_approval || 0,
    },
    {
      id: 7,
      item: "Today Withdrawl Pending",
      icon: (
        <CurrencyRubleIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.today_withdrawal_pending || 0,
    },
    {
      id: 9,
      item: "Total Withdrawl Approval",
      icon: <CreditScoreIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.total_withdrawal_approval || 0,
    },
    {
      id: 10,
      item: "Total Withdrawl Pending",
      icon: <CreditCardIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.total_withdrawal_pending || 0,
    },
    {
      id: 11,
      item: "Total Bets",
      icon: <GavelIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: Number(dashboard_new_data?.total_bets)?.toFixed(2) || 0,
    },
    {
      id: 12,
      item: "Total Commision",
      icon: <MoneyIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: Number(dashboard_new_data?.commisstion).toFixed(2) || 0,
    },
    {
      id: 13,
      item: "Today Turnover",
      icon: <GavelIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: Number(dashboard_new_data?.today_recharge)?.toFixed(2) || 0,
    },
    {
      id: 14,
      item: "Total Turnover",
      icon: <MoneyIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: Number(dashboard_new_data?.total_recharge)?.toFixed(2) || 0,
    },
    {
      id: 15,
      item: "Total Rejected Withdrawal",
      icon: <AddBusinessIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.total_rejected_withdrawal || 0,
    },
  ];
  if (isLoading)
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  return (
    <>
      <div id="chart" className="!bg-white !bg-opacity-50 !m-2">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center w-full  border-t border-gray-600 ">
        <div id="chart" className=" lg:border-r border-gray-600 !bg-white !bg-opacity-50 !m-2">
          <ReactApexChart
            options={trxwingochart.options}
            series={trxwingochart.series}
            type="area"
            height={350}
          />
        </div>
        <div id="chart" className="!bg-white !bg-opacity-50 !m-2">
          <ReactApexChart
            options={dashboardcount1.options}
            series={dashboardcount1.series}
            type="radialBar"
            height={400}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center w-full  border-t border-gray-600">
        <div id="chart" className=" lg:border-r border-gray-600 !bg-white !bg-opacity-50 !m-2">
          <ReactApexChart
            options={dashboardcount2.options}
            series={dashboardcount2.series}
            type="radialBar"
            height={400}
          />
        </div>
        <div id="chart" className="!bg-white !bg-opacity-50 !m-2 ">
          <ReactApexChart
            options={aviatorchart.options}
            series={aviatorchart.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div id="chart" className="border-t border-gray-600 !bg-white !bg-opacity-50 !m-2">
        <ReactApexChart
          options={businesschartState.options}
          series={businesschartState.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="grid lg:!grid-cols-4 md:!grid-cols-3 sm:grid-cols-1 p-5 gap-[2%] gap-y-4 ">
        {data?.map((i, index) => {
          return (
            <div
              key={index}
              className="!text-center !bg-white !bg-opacity-50 !rounded-lg !py-5 !cursor-pointer "
            >
              <div className="!text-lg !font-bold">{i?.icon}</div>
              <p className="!font-bold">{i?.item}</p>
              <p className="!font-extrabold !text-blue-700 !text-lg">
                {i?.count}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
