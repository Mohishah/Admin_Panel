import React, { useEffect, useState } from 'react';
import ModalContainer from '../../components/modalContainer';
import {Formik, Form} from 'formik'
import { initialValues, onSubmit, validationSchema } from './core';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/submitButton';
import { apiPath } from '../../services/httpService';

const Addbrands = ({setData,brandToEdit,setBrandToEdit}) => {

    const [reInitialvalues,setReInitialvalues] = useState(null)

    useEffect(()=>{
        if(brandToEdit) setReInitialvalues({
            original_name: brandToEdit.original_name,
            persian_name: brandToEdit.persian_name || "",
            descriptions: brandToEdit.descriptions || "",
            logo: null,
        })
        else setReInitialvalues(null)
    },[brandToEdit])

    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" 
            data-bs-toggle="modal" data-bs-target="#add_brand_modal" onClick={()=>setBrandToEdit(null)}>
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalContainer
            fullScreen={false}
            title={brandToEdit ? "ویرایش برند" : "افزودن برند"}
            id="add_brand_modal"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <Formik
                        initialValues={reInitialvalues || initialValues}
                        onSubmit={(values, actions)=>onSubmit(values, actions, setData , brandToEdit)}
                        validationSchema={validationSchema}
                        enableReinitialize
                        >
                            <Form>
                                <FormikControl
                                    control="input"
                                    type="text"
                                    name="original_name"
                                    label="عنوان لاتین"
                                    placeholder="کیبرد را در حالت لاتین قرار دهید"
                                />
                                <FormikControl
                                    control="input"
                                    type="text"
                                    name="persian_name"
                                    label="عنوان فارسی"
                                    placeholder="کیبرد را در حالت فارسی قرار دهید"
                                />
                                <FormikControl
                                    control="textarea"
                                    name="descriptions"
                                    label="توضیحات"
                                    placeholder="توضیحات"
                                />
                                {
                                    brandToEdit ? (
                                        <div className='btn-box text-center col-12 py-3'>
                                            <img src={apiPath+"/"+brandToEdit.logo} width="60px" alt='logo'/>
                                        </div>
                                    ) : null
                                }
                                <FormikControl
                                    control="file"
                                    name="logo"
                                    label="تصویر"
                                    placeholder="تصویر"
                                />
                                

                                <div className="btn_box text-center col-12">
                                    <SubmitButton />
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </ModalContainer>
        </>
    );
}

export default Addbrands;
