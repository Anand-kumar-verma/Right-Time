import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, TablePagination, TextField } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getSelfDepositBonus } from "../../Services";
import CustomTable from "../../Shared/CustomTable";
const SelfDepositBonus = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [search, setSearch] = useState("");
  const [value, setvalue] = useState(1);

  const { isLoading, data: Deposit_bonus } = useQuery(
    ["self_deposit_bonus_data" , value],
    () => getSelfDepositBonus({ username:`${search}`}),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const player_new_data = Deposit_bonus?.data?.data || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setVisibleRows(
      player_new_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )
    );
  }, [page, rowsPerPage, player_new_data]);

  const tablehead = [
    <span>S.No.</span>,
    <span>User Id</span>,
    <span>Name</span>,
    <span>Mobile</span>,
    <span>Email</span>,
    <span>Amount</span>,
    <span>Date/Time</span>,
    <span>Description</span>,
  ];

  const tablerow = visibleRows?.map((i,index) => {
    return [
      <span>{index+1}</span>,
      <span>{i?.username}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.mobile}</span>,
      <span>{i?.email}</span>,
      <span>{i?.l01_amount}</span>,
      <span>{moment(i?.l01_date).format("DD-MM-YYYY HH:mm:ss")}</span>,
      <span>{i?.l01_transection_type}</span>,
    ];
  });

  return (
    <div>
      <div className="flex px-2 !justify-start py-2 gap-2 !place-items-center">
        <TextField
          type="search"
          size="small"
          placeholder="Search by user id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={() => setvalue(value + 1)}
          variant="contained"
          endIcon={<FilterAltIcon />}
        >
          Filter
        </Button>
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
      />
    </div>
  );
};

export default SelfDepositBonus;
