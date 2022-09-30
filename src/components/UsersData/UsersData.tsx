import React, { useEffect } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import "aos/dist/aos.css";
import AOS from "aos";

import { CreateButton } from "../CreateButton/CreateButton";

import { User } from "../../types/User";
import "./../../index.scss";

type Props = {
  users: User[];
};

export const UsersData: React.FC<Props> = (props) => {
  const { users } = props;

  function createData(
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    gender: string
  ) {
    return {
      id,
      firstName,
      lastName,
      address,
      email,
      gender,
    };
  }

  const rows: User[] = [];

  users.forEach((user) => {
    rows.push(
      createData(user.id, user.firstName, user.lastName, user.address, user.email, user.gender)
    );
  });

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-sine", offset: 0 });
  }, []);

  return (
    <>
      <CreateButton>Create New Contact</CreateButton>
      <TableContainer component={Paper} elevation={3}>
        <TableBody>
          <TableRow>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
          </TableRow>
          {users.map((user: User) => (
            <TableRow key={user.id} data-aos="fade-left zoom-in">
              <TableCell align="left">{user.id}</TableCell>
              <TableCell align="right">{user.firstName}</TableCell>
              <TableCell align="right">{user.lastName}</TableCell>
              <TableCell align="left">{user.address}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="right">{user.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </>
  );
};
