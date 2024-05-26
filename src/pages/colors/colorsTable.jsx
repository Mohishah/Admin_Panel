import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/paginatedTable';
import AddColors from './addColors';
import Actions from './tableAddition/Action';
import { deleteColorService, getAllColorsService } from '../../services/colors';
import { Alert, Confirm } from '../../utils/alert';

const ColorsTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [colorToEdit, setColorToEdit] = useState(null)

    const dataInfo = [
        { field: "id", title: "#" },
        { field: "title", title: "عنوان" },
        { field: "code", title: "کد رنگ" },
    ];
    
    const additionField = [
        {
          title: "رنگ",
          elements: (rowData) => <div className="w-100 h-100 d-block" style={{ background: rowData.code, color: rowData.code }}>...</div>,
        },
        {
          title: "عملیات",
          elements: (rowData) => (
            <Actions rowData={rowData} setColorToEdit={setColorToEdit} handleDeleteColor={handleDeleteColor}/>
          ),
        },
    ];

    const searchParams = {
        title: "جستجو",
        placeholder: "قسمتی از عنوان را وارد کنید",
        searchField: "title",
    };

    const handleGetAllColors = async ()=>{
        setLoading(true)
        const res = await getAllColorsService();
        res && setLoading(false)
        if (res.status === 200) {
            setData(res.data.data);
        }
    }

    const handleDeleteColor = async (color) => {
        if (await Confirm("حذف برند",`آیا از حذف ${color.title} اطمینان دارید؟`)) {
          const res = await deleteColorService(color.id);
          if (res.status === 200) {
            Alert("انجام شد", res.data.message, "success");
            setData((lastData) => lastData.filter((d) => d.id != color.id));
          }
        }
    };

    useEffect(()=>{
        handleGetAllColors()
    },[])
  
    return (
        <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        searchParams={searchParams}
        loading={loading}
        numOfPage={10}
        additionField={additionField}
        >
            <AddColors setData={setData} colorToEdit={colorToEdit} setColorToEdit={setColorToEdit}/>
        </PaginatedTable>
    );
}

export default ColorsTable;
