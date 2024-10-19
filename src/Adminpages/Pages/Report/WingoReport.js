import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, MenuItem, TablePagination, TextField } from "@mui/material";
import CryptoJS from "crypto-js";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";


const WingoReport = () => {
    const [loding, setloding] = useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [visibleRows, setVisibleRows] = React.useState([]);
    const [data, setData] = useState([]);
    const [from_date, setFrom_date] = useState("");
    const [to_date, setTo_date] = useState("");
    const [game_id, setGame_id] = useState("1");
    const value =
        (localStorage.getItem("logindataen") &&
            CryptoJS.AES.decrypt(
                localStorage.getItem("logindataen"),
                "anand"
            )?.toString(CryptoJS.enc.Utf8)) ||
        null;
    const user_id = value && JSON.parse(value)?.UserID;
    const WingoReportFunction = async () => {
        setloding(true);
        try {
            const res = await axiosInstance.post(API_URLS?.get_wingo_report,
                {
                    start_date: from_date,
                    end_date: to_date,
                    game_id: game_id,
                    user_id: user_id,
                }
            );
            setData(res?.data?.data || []);
            if (res) {
                setTo_date("");
                setFrom_date("");
            }
        } catch (e) {
            console.log(e);
        }
        setloding(false);
    };
    useEffect(() => {
        WingoReportFunction();
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
        <span>User Id</span>,
        <span>Name</span>,
        <span>Winning Amount</span>
    ];

    const tablerow = visibleRows?.map((i, index) => {
        return [
            <span>{index + 1}</span>,
            <span>{i?.username}</span>,
            <span>{i?.full_name}</span>,
            <span>{i?.winning_amount}</span>,
           
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
                 <span className="font-bold">Select Game:</span>
                 <TextField
                    select
                    size="small"
                    value={game_id}
                    onChange={(e) => 
                        setGame_id(e.target.value)
                        
                    }
                >
                    <MenuItem value="1">One Min</MenuItem>
                    <MenuItem value="2">Two Min</MenuItem>
                    <MenuItem value="3">Three Min</MenuItem>
                </TextField>
                <Button
                    onClick={() => WingoReportFunction()}
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

export default WingoReport;
