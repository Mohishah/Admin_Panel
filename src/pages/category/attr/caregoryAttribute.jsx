import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ShowInFilter from './showInFilter';
import AttrAction from './attrAction';
import PaginatedTable from '../../../components/paginatedTable';
import PrevPageButton from '../../../components/PrevPageButton';
import { addCategoryAttrsService, deleteCategoryAttrService, editCategoryAttrService, getCategoryAttrsService } from '../../../services/categoryAttr';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import FormikControl from '../../../components/form/FormikControl';
import SubmitButton from '../../../components/form/submitButton';
import { Alert, Confirm } from '../../../utils/alert';


const initialValues = {
    title : "",
    unit : "",
    in_filter : true ,
}

const onSubmit = async (values,actions,catId,setData,attrToEdit,setAttrToEdit)=>{
    try {
        values = {
          ...values,
          in_filter: values.in_filter ? 1 : 0,
        }
        if (attrToEdit) {
            const res = await editCategoryAttrService(attrToEdit.id, values);
            console.log(res);
            if (res.status === 200) {
              setData(oldData=>{
                const newData = [...oldData]
                const index = newData.findIndex(d=>d.id === attrToEdit.id)
                newData[index] = res.data.data
                return newData
              });
              Alert('انجام شد', res.data.message, 'success');
              setAttrToEdit(null)
            }
          }else{
            const res = await addCategoryAttrsService(catId, values);
            if (res.status === 201) {
              Alert('انجام شد', res.data.message, 'success');
              setData(oldData=>[...oldData, res.data.data])
              actions.resetForm();
            }
          }
        } catch (error) {
          console.log(error.message);
        }
};

const validationSchema = Yup.object({
    title: Yup.string()
      .required("لطفا این قسمت را پر کنید")
      .matches(
        /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از حروف و اعداد استفاده شود"
      ),
    unit: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
    in_filter: Yup.boolean(),
});

const CaregoryAttribute = () => {

    const location = useLocation()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [attrToEdit,setAttrToEdit] = useState(null)
    const [reInitialValues,SetReInitialValues] = useState(null)


    const dataInfo = [
        { field: "id", title: "#" },
        { field: "title", title: "عنوان محصول" },
        { field: "unit", title: "واحد" },
    ];

    const additionField = [
        {
          title: "نمایش در فیلتر",
          elements: (rowData) => <ShowInFilter rowData={rowData} />,
        },
        {
          title: "عملیات",
          elements: (rowData) => <AttrAction rowData={rowData} attrToEdit={attrToEdit} setAttrToEdit={setAttrToEdit}
          handleDeleteCategoryAttr={handleDeleteCategoryAttr}/>,
        },
    ];

    const searchParams = {
        title: "جستجو",
        placeholder: "قسمتی از عنوان را وارد کنید",
        searchField: "title",
    };

    const handleGetCategoryAttrs = async ()=>{
        setLoading(true)
        try {
            const res = await getCategoryAttrsService(location.state.categoryData.id)
            console.log(res);
            if (res.status === 200) {
                setData(res.data.data);
            }
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }
   
    useEffect(() => {
        handleGetCategoryAttrs()
    }, []);

    useEffect(() => {
        if (attrToEdit) SetReInitialValues({
            title: attrToEdit.title,
            unit: attrToEdit.unit,
            in_filter: attrToEdit.in_filter ? true : false
        });
        else SetReInitialValues(null);
    }, [attrToEdit]);

    const handleDeleteCategoryAttr = async (attr)=>{
        if (await Confirm('حذف ویژگی ', `آیا از حذف ${attr.title} اطمینان دارید؟`)) {
            try {
              const res = await deleteCategoryAttrService(attr.id);
              if (res.status === 200) {
                setData(data.filter(d=>d.id != attr.id))
                Alert('انجام شد', res.data.message, 'success')
              }
            } catch (error) {
              console.log(error.message);
            }
           }
         }

    return (
            <>
            <h4 className="text-light text-center my-3">مدیریت ویژگی های دسته بندی</h4>
            <h6 className="text-light text-center my-3">
                    ویژگی های :
                <span className="text-warning mx-2">
                {location.state.categoryData.title}
                </span>
            </h6>
            <div className="container">
                    <div className="row justify-content-center">

                        <Formik
                        initialValues={reInitialValues || initialValues}
                        onSubmit={(values,actions)=>onSubmit(values,actions,location.state.categoryData.id,setData,
                            attrToEdit,setAttrToEdit
                        )}
                        validationSchema={validationSchema}
                        enableReinitialize
                        >
                            <Form>
                            <div className={`row my-3 ${attrToEdit ? "alert-danger danger_shadow" : ""
                                } justify-content-center align-items-center is_inline`}
                            >
                                <FormikControl
                                control="input"
                                type="text"
                                name="title"
                                label="عنوان"
                                className="col-md-6 col-lg-4 my-1"
                                placeholder="عنوان ویژگی جدید"
                                />
                                <FormikControl
                                control="input"
                                type="text"
                                name="unit"
                                label="واحد"
                                className="col-md-6 col-lg-4 my-1"
                                placeholder="واحد ویژگی جدید"
                                />
                                <div className="col-8 col-lg-2 my-1">
                                <FormikControl
                                control="switch"
                                name="in_filter"
                                label="نمایش در فیلتر"
                                />                        
                                </div>
                                <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start">
                                    <SubmitButton/>
                                    {attrToEdit ? (
                                        <button className="byn btn-sm btn-danger me-4 mt-1" onClick={() => setAttrToEdit(null)}>
                                            انصراف
                                        </button>
                                    ) : null}
                                </div>
                            </div>
                            </Form>
                        </Formik>
                        
                        <hr className='text-light'/>

                        <PaginatedTable data={data} dataInfo={dataInfo}
                        additionField={additionField} searchParams={searchParams}
                        numOfPage={10}
                        loading={loading}
                        >
                            <PrevPageButton/>
                        </PaginatedTable> 
                    </div>
            </div>
            </>
    );
}

export default CaregoryAttribute;
