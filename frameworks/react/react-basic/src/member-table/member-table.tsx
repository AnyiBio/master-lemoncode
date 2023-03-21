import React from "react";
import { Column, MemberEntity } from "./member-table-model";
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'avatar_url', label: 'Photo', minWidth: 100 },
  {
    id: 'login',
    label: 'login',
    minWidth: 170,
    align: 'left',
  }
];
interface Props {
  members: MemberEntity[];
}

export const MemberTable: React.FC<Props> = ({ members }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 600 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {members
            .map((member) => {
              return (
                <TableRow key={member.id}>
                    <TableCell>{member.id}</TableCell>
                    <TableCell>
                      <Avatar
                        alt="lemmon member"
                        src={member.avatar_url}
                        sx={{ width: 74, height: 74 }}
                      /></TableCell>
                    <TableCell>{member.login}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={members.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
  );
};