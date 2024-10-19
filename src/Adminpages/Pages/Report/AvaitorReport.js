import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, TablePagination, TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const AviatorReport = () => {
  const [loding, setloding] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [data, setData] = useState([]);
   const [from_date, setFrom_date] = useState("");
  const [to_date, setTo_date] = useState("");

  const aviatorReportFunction = async () => {
    setloding(true);
    try {
      const res = await axiosInstance.get(API_URLS?.get_aviator_report);
      setData(res?.data?.data || []);
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  };
  useEffect(() => {
    aviatorReportFunction();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setVisibleRows(
      data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [page, rowsPerPage, data]);

  const tablehead = [
    <span>S.No.</span>,
    <span>Trading Amount</span>,
    <span>Winning Amount</span>, 
    <span>Credit</span>,
    <span>Debit</span>,
    <span>Date</span>,   
    <span>Status</span>,
  ];

  const tablerow = visibleRows?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{i?.trading_amount}</span>,
      <span>{Number(i?.winning_amount)?.toFixed(2)}</span>,
      <span>{i?.admin_cr}</span>,
      <span>{i?.admin_dr}</span>,
      <span>{moment(i?.createdAt)?.format("YYYY-MM-DD")}</span>,
      <span>{i?.sign ===0 ?
        <ArrowDownward className="!text-rose-500"/> :
        <ArrowUpward className="!text-green-500"/>
       }</span>,
  
     
    ];
  });

  return (
    <div>
      <div className="flex px-2 !justify-start py-2 gap-2 !place-items-center">
        <span className="font-bold">From:</span>
        <TextField
          type="date"
          size="small"
          value={from_date}
          onChange={(e) => setFrom_date(e.target.value)}
        />
        <span className="font-bold">To:</span>
        <TextField
          type="date"
          size="small"
          value={to_date}
          onChange={(e) => setTo_date(e.target.value)}
        />
        <Button
          onClick={() => aviatorReportFunction()}
          variant="contained"
          startIcon={<FilterAltIcon />}
        >
          Filter
        </Button>
      </div>
      <CustomTable
        tablehead={tablehead}
        tablerow={tablerow}
        isLoading={loding}
      />
      <TablePagination
        rowsPerPageOptions={[8, 10, 20, 50]}
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default AviatorReport;
