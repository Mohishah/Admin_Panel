import React, { useEffect, useState } from 'react';
import { getAllRolesService } from '../../services/users';
import PaginatedTable from '../../components/paginatedTable';
import AddButtonLink from '../../components/AddButtonLink';
import {Outlet} from 'react-router-dom'
import Actions from './tableAddition/Actions';

const RolesTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const dataInfo = [
      { field: "id", title: "#" },
      { field: "title", title: "عنوان" },
      { field: "description", title: "توضیحات" },
      {
        field: null,
        title: "عملیات",
        elements: (rowData) => (
          <Actions rowData={rowData} handleDeleteRole={handleDeleteRole}/>
        ),
      },
    ];

    const searchParams = {
      title: "جستجو",
      placeholder: "قسمتی از عنوان را وارد کنید",
      searchField: "title",
    };

    const handleGetAllRoles = async ()=>{
      setLoading(true)
      const res = await getAllRolesService();
      res && setLoading(false)
      if (res.status === 200) {
          console.log(res.data.data);
          setData(res.data.data);
      }
    }

    const handleDeleteRole = async () => {};

    useEffect(()=>{
        handleGetAllRoles()
    },[])

    return (
        <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numOfPAge={8}
        searchParams={searchParams}
        loading={loading}
      >
          <AddButtonLink href={"/roles/add-role"} />
          <Outlet context={{setData}}/>
      </PaginatedTable>
    );
}

export default RolesTable;
