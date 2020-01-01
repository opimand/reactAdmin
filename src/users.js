import React from 'react';
import { List, Datagrid, TextField, UrlField } from 'react-admin';
import MyUrlField from "./MyUrlField";

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);