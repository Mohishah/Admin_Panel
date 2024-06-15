import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/paginatedTable';
import Addbrands from './addbrands';
import Actions from './tableAdditional/Action';
import { apiPath } from '../../services/httpService';
import { deleteBrandService, getAllBrandsService } from '../../services/brands';
import { Alert, Confirm } from '../../utils/alert';

const BrandsTable = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [brandToEdit,setBrandToEdit] = useState(null)

    const handleGetAllBrands = async ()=>{
        setLoading(true)
        try {
          const res = await getAllBrandsService()
          if (res.status === 200){
            setData(res.data.data)
          }
        } catch (error) {
        }finally {
          setLoading(false)
        }
    }

    useEffect(()=>{
        handleGetAllBrands()
    },[])

    const handleDeleteBrand = async (brand)=>{
      if (await Confirm('حذف  برند', `آیا از حذف ${brand.original_name} اطمینان دارید؟`)) {
        try {
          const res = await deleteBrandService(brand.id);
          if (res.status === 200) {
            setData(data.filter(d=>d.id != brand.id))
            Alert('انجام شد', res.data.message, 'success')
          }
        } catch (error) {
          console.log(error);
        }
       }
    }

    const dataInfo = [
        { field: "id", title: "#" },
        { field: "original_name", title: "عنوان لاتین" },
        { field: "persian_name", title: "عنوان فارسی" },
        { field: "descriptions", title: "توضیحات" },
        {
          field: null,
          title: "لوگو",
          elements: (rowData) =>
            rowData.logo ? (<img src={apiPath+"/"+rowData.logo} width="40" alt='logo' /> ): null,
        },
        {
          field: null,
          title: "عملیات",
          elements: (rowData) => <Actions rowData={rowData} setBrandToEdit={setBrandToEdit} handleDeleteBrand={handleDeleteBrand} />,
        },
    ];

    const searchParams = {
        title: "جستجو",
        placeholder: "قسمتی از عنوان را وارد کنید",
        searchField: "original_name",
    };

    return (
        <>
            <PaginatedTable
            data={data} dataInfo={dataInfo}
            numOfPage={10} searchParams={searchParams}
            loading={loading}
            >
                <Addbrands setData={setData} brandToEdit={brandToEdit} setBrandToEdit={setBrandToEdit}/>
            </PaginatedTable>
        </>
    );
}

export default BrandsTable;
