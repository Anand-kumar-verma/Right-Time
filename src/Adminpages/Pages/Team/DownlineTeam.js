import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, TablePagination, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { getDownlineTeam } from "../../Services";
import CustomTable from "../../Shared/CustomTable";

const DownlineTeam = () => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [visibleRows, setVisibleRows] = useState([]);
    const [search, setSearch] = useState("");
    const [downlinedata, setdownlinedata] = useState([]);
    const [loding, setloding] = useState(false);
    const client = useQueryClient();

    const getDownlineTeamfunction = async (value) => {
        setloding(true)
        try {
            await getDownlineTeam({ username: value }).then((result) => {
                setdownlinedata(result?.data?.data)
            }).catch((e) => {
               toast("Something went wrong")
            })
        }
        catch (e) {
            console.log(e)
        }
        setloding(false)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        setVisibleRows(
            downlinedata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        );
    }, [page, rowsPerPage, downlinedata]);

    const tablehead = [
        <span>S.No.</span>,
        <span>Level</span>,
        <span>User Id</span>,
        <span>Name</span>,
        <span>Mobile</span>,
        <span>Password</span>,
        <span>Type</span>
    ];

    const tablerow = visibleRows.map((i, index) => [
        <span>{index + 1}</span>,
        <span>{i?.level_id}</span>,
        <span>{i?.username}</span>,
        <span>{i?.full_name}</span>,
        <span>{i?.mobile}</span>,
        <span>{i?.password}</span>,
        <span>{i?.user_type}</span>
    ]);

    return (
        <div>
            <div className="flex px-2 !justify-start py-2 gap-2 !place-items-center">
                <div>

                    <TextField
                        className="!h-[10%]"
                        size="small"
                        id="username"
                        name="username"
                        placeholder="User Id"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <Button
                    onClick={() => getDownlineTeamfunction(search)}
                    variant="contained"
                    endIcon={<FilterAltIcon />}
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
                count={downlinedata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default DownlineTeam;
