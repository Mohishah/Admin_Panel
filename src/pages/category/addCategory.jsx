import React, { useEffect, useState } from 'react';
import ModalContainer from '../../components/modalContainer';
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../../components/form/FormikControl";
import { createNewCategoryService, editCategoryService, getCategoriesService, singleGetCategoryService } from "../../services/category";
import { Alert } from '../../utils/alert';
import SubmitButton from '../../components/form/submitButton';
import { useParams } from 'react-router-dom';
import { CategoryContext } from "../../context/categoryContext";
import { useContext } from 'react';


const initialValues = {
    parent_id: "",
    title: "",
    description: "",
    image: '',
    is_active: true,
    show_in_menu: true,
};

const onSubmit = async (values, actions, setForceRender, editId) => {
  try {
    values = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };
    if (editId) {
      const res = await editCategoryService(editId, values);
      console.log(res);
      if (res.status == 200) {
        Alert("ویرایش رکورد", res.data.message, "success");
        setForceRender((last) => last + 1);
      }
    } else {
      const res = await createNewCategoryService(values);
      console.log(res);
      if (res.status == 201) {
        Alert("ثبت رکورد", res.data.message, "success");
        actions.resetForm();
        setForceRender((last) => last + 1);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(values);
};

const validationSchema = Yup.object({
    parent_id: Yup.number(),
    title: Yup.string()
      .required("لطفا این قسمت را پر کنید")
      .matches(
        /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از حروف و اعداد استفاده شود"
      ),
    description: Yup.string().matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
    image: Yup.mixed()
      .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) => 
        (!value) ? true : value.size <= 500 * 1024 
      )
      .test("format", "فرمت فایل باید jpg باشد", (value) =>
        (!value )? true : value.type === "image/jpeg"
      ),
    is_active: Yup.boolean(),
    show_in_menu: Yup.boolean(),
});

const AddCategory = ({ setForceRender }) => {

    const params = useParams()
    const [reInitialValues,setReInitialValues] = useState(null)
    const [parents, setParents] = useState([]);
    const {editId,setEditId} = useContext(CategoryContext)
    const [editCategory,setEditCategory] = useState(null)


    const handleGetParentsCategories = async () => {
        try {
          const res = await getCategoriesService();
          if (res.status == 200) {
            const allParents = res.data.data;
            setParents(
              allParents.map((p) => {
                return { id: p.id, value: p.title };
              })
            );
          }
        } catch (error) {
          Alert("مشکل...!", "متاسفانه دسته بندی های والد دریافت نشد", "warning");
        }
    };

    const handleGetSingleCategoryService = async () => {
      try {
        const res = await singleGetCategoryService(editId)
        if (res.status == 200){
          const oldCategory = res.data.data;
          setEditCategory(oldCategory)  
        }
      } catch (error) {
        Alert("مشکل...!", "متاسفانه دسته بندی های مورد نظر دریافت نشد", "warning");
      }
    }

    useEffect(() => {
        handleGetParentsCategories();
      }, []);

    useEffect(() => {
      if (editCategory) {
        setReInitialValues({
          parent_id: editCategory.parent_id || "",
          title: editCategory.title,
          description: editCategory.description,
          image: '',
          is_active: editCategory.is_active ? true : false,
          show_in_menu: editCategory.show_in_menu ? true : false,
        });
      }else if (params.categoryId) {
                setReInitialValues({
                ...initialValues ,
                parent_id :params.categoryId
            })
        }else {
            setReInitialValues(null)
        }
    }, [params.categoryId , editCategory]);

    useEffect(() => {
      if (editId) handleGetSingleCategoryService();
      else setEditCategory(null);
    }, [editId]);


    return (
    <>
    <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" 
    data-bs-target="#add_product_category_modal" onClick={()=>{setEditId(null)}}>
        <i className="fas fa-plus text-light"></i>
    </button>  
    <ModalContainer
    fullScreen={true}
    id="add_product_category_modal"
    title={
      editId
        ? "ویرایش : " + (editCategory ? editCategory.title : "")
        : "افزودن دسته محصولات"}
    >   
        <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values , actions )=>onSubmit(values , actions , setForceRender , editId)}
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <div className="container">
              <div className="row justify-content-center">
                {parents.length > 0 ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={parents}
                    name="parent_id"
                    label="دسته والد"
                  />
                ) : null}
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان دسته"
                  placeholder="عنوان دسته"
                />
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="description"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
                 {!editId ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="file"
                    name="image"
                    label="تصویر"
                    placeholder="تصویر"
                  />
                ) : null}
                <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="is_active"
                      label="وضعیت فعال"
                    />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="show_in_menu"
                      label="نمایش در منو"
                    />
                  </div>
                </div>
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                    <SubmitButton></SubmitButton> 
                </div>
              </div>
            </div>
          </Form>
        </Formik>
    </ModalContainer> 
    </>
    );
}

export default AddCategory;
