import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/paginatedTable';
import AddCategory from './addCategory';
import { getCategoriesService } from '../../services/category';
import { Alert } from '../../utils/alert';
import ShowInMenu from './tableAdditons/showInMenu';
import Actions from './tableAdditons/actions';

const CategoryTable = () => {

    const [data,setData] = useState([])

    const handleGetCategories = async ()=>{
      try {
        const res = await getCategoriesService()
        if (res.status === 200){
          setData(res.data.data)
        }else{
          Alert('مشکلی رخ داد', res.data.message ,'error')
        }
      } catch (error) {
          Alert('مشکلی رخ داد', 'مشکلی از سمت سرور' ,'error')
      }
    }

    useEffect(()=>{
      handleGetCategories()
    },[])

    const dataInfo = [
      { field: "id", title: "#" },
      { field: "title", title: "عنوان محصول" },
      { field: "parent_id", title: "والد" },
      { field: "created_at", title: "تارخ" },
    ];

    const additionField = [
      {
        title: "نمایش در منو",
        elements: (rowData) => <ShowInMenu rowData={rowData}/>,
      },
      {
        title: "عملیات",
        elements: (rowData) => <Actions rowData={rowData}/>,
      }
    ];

    const searchParams = {
      title: "جستجو",
      placeholder: "قسمتی از عنوان را وارد کنید",
      searchfield: "title"
    }

    return ( 
        <>
            <PaginatedTable data={data} dataInfo={dataInfo}
            additionField={additionField} searchParams={searchParams}
            numOfPage={3}
            children={<AddCategory/>}
            />
        </>
    );
}

export default CategoryTable;
