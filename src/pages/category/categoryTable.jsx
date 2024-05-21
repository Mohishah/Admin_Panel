import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/paginatedTable';
import AddCategory from './addCategory';
import { getCategoriesService } from '../../services/category';
import { Alert } from '../../utils/alert';
import ShowInMenu from './tableAdditons/showInMenu';
import Actions from './tableAdditons/actions';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { convertDateToJalali } from '../../utils/convertDate';

const CategoryTable = () => {

    const params = useParams()
    const location = useLocation()

    const [data,setData] = useState([])

    const handleGetCategories = async ()=>{
      try {
        const res = await getCategoriesService(params.categoryId)
        if (res.status === 200){
          setData(res.data.data)
        }
      } catch (error) {
      }
    }

    useEffect(()=>{
      handleGetCategories()
    },[])

    const dataInfo = [
      { field: "id", title: "#" },
      { field: "title", title: "عنوان محصول" },
      { field: "parent_id", title: "والد" },
    ];

    const additionField = [
      {
        title: "تاریخ",
        elements: (rowData) => convertDateToJalali(rowData.created_at),
      },
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
            <Outlet/>
            {data.length? (
              <PaginatedTable data={data} dataInfo={dataInfo}
              additionField={additionField} searchParams={searchParams}
              numOfPage={10}
              children={<AddCategory/>}
              />
            ) : (
              <h5 className="text-center my-5 text-danger">هیچ دسته بندی یافت نشد</h5>
            )}
            
        </>
    );
}

export default CategoryTable;
