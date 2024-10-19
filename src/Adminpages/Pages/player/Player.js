import { Edit } from "@mui/icons-material";
import { IconButton, Switch, TablePagination, TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { get_all_player_data, getUserList } from "../../Services";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import toast from "react-hot-toast";


const Player = () => {
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery({ maxWidth: 800 });
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [search, setSearch] = useState("");
  const client = useQueryClient();
  const { isLoading, data: player } = useQuery(
    ["user_data"],
    () => getUserList(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const player_new_data = player?.data?.data || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    const filteredRows = player_new_data.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(search.toLowerCase())
      )
    );

    setVisibleRows(
      filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [page, rowsPerPage, player_new_data, search]);

  const changePlayerStatusFunction = async (id) => {
    try {
      const res = await axiosInstance.get(
        `${API_URLS?.update_user_status}?u_id=${id}`
      );
     toast.success(res?.data?.msg)
      if (res) client.refetchQueries("user_data");
    } catch (e) {
      console.log(e);
    }
  };
  const tablehead = [
    <span>Id</span>,
    <span>Name</span>,
    <span>User Id</span>,
    <span>Mobile</span>,
    <span>Email</span>,
    <span>Password</span>,
    <span>Wallet</span>,
    <span>Winning Wallet</span>,
    <span>Active/Deactive</span>,
    <span>Total Deposit</span>,
    <span>Total Withdrawal</span>,
    <span>Yesterday Income</span>,
    <span>Direct Reg.</span>,
    <span>Team Reg.</span>,
    <span>Bet</span>,
    <span>Total Bet</span>,
    <span>Status</span>
  ];

  const tablerow = visibleRows?.map((i,index) => {
    return [
      <span>{index+1}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.username}</span>,
      <span>{i?.mobile}</span>,
      <span>{i?.email}</span>,
      <span>{i?.password}</span>,
      <span>{i?.wallet}</span>,
      <span>{i?.winning_wallet}</span>,
      <span>{String(i?.status) === "1" ? "Active" : "Inactive"}</span>,
      <span>{i?.total_payin}</span>,
      <span>{i?.total_payout}</span>,
      <span>{i?.yesterday_income}</span>,
      <span>{i?.direct_reg}</span>,
      <span>{i?.team_reg}</span>,
      <span>{i?.need_to_bet}</span>,
      <span>{i?.total_betting_by_user}</span>,
      <span>
        <Switch
        className="!text-green-500"
          onClick={() => {
            changePlayerStatusFunction( i?.id );
          }}
          checked={String(i?.status) === "1" ? true : false}
        />
      </span>,
      // <p className="!text-center">
      //   <IconButton
      //     onClick={() =>
      //       navigate("/player/add-player", {
      //         state: {
      //           id: i
      //         },
      //       })
      //     }
      //   >
      //     <Edit />
      //   </IconButton>
      // </p>,
    ];
  });

  return (
    <div>
      <div className="flex px-2 !justify-between py-2">
        <TextField
          type="search"
          size="small"
          placeholder="Search Entries"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <CustomTable
        tablehead={tablehead}
        tablerow={tablerow}
        isLoading={isLoading}
      />
      <TablePagination
        rowsPerPageOptions={[8, 10, 20, 50]}
        component="div"
        count={player_new_data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={isMediumScreen && "Rows"}
      />
    </div>
  );
};

export default Player;
