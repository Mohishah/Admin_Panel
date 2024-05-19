import React from 'react';
import CardTable from './cardTable';
import AddCard from './addCard';

const Card = () => {
    return (
        <div id="manage_cart_section" className="manage_cart_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت سبد خرید</h4>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder="قسمتی از نام یا شماره سبد را وارد کنید"/>
                        <span className="input-group-text" >جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    <AddCard/>
                </div>
            </div>
            <CardTable/>
        </div>
    );
}

export default Card;
