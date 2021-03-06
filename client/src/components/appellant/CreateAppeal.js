import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAppeal } from '../../actions/appeal';
import Header from '../frontend/Header';

import './CreateAppeal.css';

const FormC = ({ createAppeal, history }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        ar_line1: '',
        ar_line2: '',
        ar_landmark: '',
        ar_city: '',
        ar_district: '',
        ar_pin: '',
        ar_state: '',
        ar_country: '',
        as_line1: '',
        as_line2: '',
        as_landmark: '',
        as_city: '',
        as_district: '',
        as_pin: '',
        as_state: '',
        as_country: '',
        appellant_mobile_no: '',
        appellant_email_id: '',
        res_first_name: '',
        res_last_name: '',
        res_ao_line1: '',
        res_ao_line2: '',
        res_ao_landmark: '',
        res_ao_city: '',
        res_ao_district: '',
        res_ao_pin: '',
        res_ao_state: '',
        res_ao_country: '',
        res_as_line1: '',
        res_as_line2: '',
        res_as_landmark: '',
        res_as_city: '',
        res_as_district: '',
        res_as_pin: '',
        res_as_state: '',
        res_as_country: '',
        res_mobile_no: '',
        res_email_id: '',
        is_within_jurisdiction: true,
        reg_num: '',
        is_limitation_specified: true,
        reason_for_delay: '',
        facts_of_case: '',
        ground_of_appeal: '',
        reliefs_sought: '',
        interim_order: '',
        is_matter_pending: true,
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const {
        first_name,
        last_name,
        ar_line1,
        ar_line2,
        ar_landmark,
        ar_city,
        ar_district,
        ar_pin,
        ar_state,
        ar_country,
        as_line1,
        as_line2,
        as_landmark,
        as_city,
        as_district,
        as_pin,
        as_state,
        as_country,
        appellant_mobile_no,
        appellant_email_id,
        res_first_name,
        res_last_name,
        res_ao_line1,
        res_ao_line2,
        res_ao_landmark,
        res_ao_city,
        res_ao_district,
        res_ao_pin,
        res_ao_state,
        res_ao_country,
        res_as_line1,
        res_as_line2,
        res_as_landmark,
        res_as_city,
        res_as_district,
        res_as_pin,
        res_as_state,
        res_as_country,
        res_mobile_no,
        res_email_id,
        is_within_jurisdiction,
        reg_num,
        is_limitation_specified,
        reason_for_delay,
        facts_of_case,
        ground_of_appeal,
        reliefs_sought,
        interim_order,
        is_matter_pending,
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheck = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formData));
        setIsSubmit(true);

        createAppeal(formData, history);
    };

    const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const mobile_regex = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;

        if (!values.first_name) {
            errors.first_name = 'First name is required';
        }
        if (!values.last_name) {
            errors.last_name = 'Last name is required';
        }
        if (!values.ar_line1) {
            errors.ar_line1 = 'Address Line 1 is required';
        }
        if (!values.ar_line2) {
            errors.ar_line2 = 'Address Line 2 is required';
        }
        if (!values.ar_country) {
            errors.ar_country = 'Country is required';
        }
        if (!values.ar_state) {
            errors.ar_state = 'State is required';
        }
        if (!values.ar_city) {
            errors.ar_city = 'City is required';
        }
        if (!values.ar_district) {
            errors.ar_district = 'District is required';
        }
        if (!values.ar_pin) {
            errors.ar_pin = 'Pin is required';
        }
        if (!values.as_line1) {
            errors.as_line1 = 'Address Line 1 is required';
        }
        if (!values.as_line2) {
            errors.as_line2 = 'Address Line 2 is required';
        }
        if (!values.as_country) {
            errors.as_country = 'Country is required';
        }
        if (!values.as_state) {
            errors.as_state = 'State is required';
        }
        if (!values.as_city) {
            errors.as_city = 'City is required';
        }
        if (!values.as_district) {
            errors.as_district = 'District is required';
        }
        if (!values.as_pin) {
            errors.as_pin = 'Pin is required';
        }
        if (!values.appellant_mobile_no) {
            errors.appellant_mobile_no = 'Mobile Number is required';
        } else if (!mobile_regex.test(values.appellant_mobile_no)) {
            errors.appellant_mobile_no = 'Please enter a valid Mobile Number';
        }

        if (!values.appellant_email_id) {
            errors.appellant_email_id = 'Email Address is required';
        } else if (!email_regex.test(values.appellant_email_id)) {
            errors.appellant_email_id = 'Please enter a valid Email';
        }

        if (!values.res_first_name) {
            errors.res_first_name = 'First Name is required';
        }
        if (!values.res_last_name) {
            errors.res_last_name = 'Last Name is required';
        }
        if (!values.res_ao_line1) {
            errors.res_ao_line1 = 'Address Line 1 is required';
        }
        if (!values.res_ao_line2) {
            errors.res_ao_line2 = 'Address Line 2 is required';
        }
        if (!values.res_ao_country) {
            errors.res_ao_country = 'Country is required';
        }
        if (!values.res_ao_state) {
            errors.res_ao_state = 'State is required';
        }
        if (!values.res_ao_city) {
            errors.res_ao_city = 'City is required';
        }
        if (!values.res_ao_district) {
            errors.res_ao_district = 'District is required';
        }
        if (!values.res_ao_pin) {
            errors.res_ao_pin = 'Pin is required';
        }
        if (!values.res_as_line1) {
            errors.res_as_line1 = 'Address Line 1 is required';
        }
        if (!values.res_as_line2) {
            errors.res_as_line2 = 'Address Line 2 is required';
        }
        if (!values.res_as_country) {
            errors.res_as_country = 'Country is required';
        }
        if (!values.res_as_state) {
            errors.res_as_state = 'State is required';
        }
        if (!values.res_as_city) {
            errors.res_as_city = 'City is required';
        }
        if (!values.res_as_district) {
            errors.res_as_district = 'District is required';
        }
        if (!values.res_as_pin) {
            errors.res_as_pin = 'Pin is required';
        }
        if (!values.res_mobile_no) {
            errors.res_mobile_no = 'Mobile Number is required';
        } else if (!mobile_regex.test(values.res_mobile_no)) {
            errors.res_mobile_no = 'Please enter a valid Mobile Number';
        }

        if (!values.res_email_id) {
            errors.res_email_id = 'Email Address is required';
        } else if (!email_regex.test(values.res_email_id)) {
            errors.res_email_id = 'Please enter a valid Email';
        }

        if (!values.reg_num) {
            errors.reg_num = 'Project Registration Number is required';
        }
        if (!values.facts_of_case) {
            errors.facts_of_case = 'Please specify Facts of the case';
        }
        if (!values.ground_of_appeal) {
            errors.ground_of_appeal = 'Please specify Grounds of Appeal';
        }
        if (!values.reliefs_sought) {
            errors.reliefs_sought = 'Please specify Relief(s) Sought';
        }
        return errors;
    };

    return (
        <Fragment>
            <Header />
            <section className="section-form mb-5">
                <div className="container mt-5">
                    <form className="row g-3" onSubmit={(e) => onSubmit(e)}>
                        <h5>1. Particulars of the Appellant</h5>
                        <h6>Name of the Appellant</h6>
                        <div className="col-md-6 mb-3 required">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="first_name"
                                value={first_name}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.first_name}
                            </p>
                        </div>
                        <div className="col-md-6 mb-3 required">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="last_name"
                                value={last_name}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.last_name}
                            </p>
                        </div>
                        <h6>
                            Address of the Existing Office/ Residence of the
                            Appellant
                        </h6>
                        <div className="mb-3 required">
                            <label htmlFor="AddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine1"
                                name="ar_line1"
                                value={ar_line1}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ar_line1}
                            </p>
                        </div>
                        <div className="mb-3 required">
                            <label htmlFor="AddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine2"
                                name="ar_line2"
                                value={ar_line2}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ar_line2}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="country" className="form-label">
                                Country
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="ar_country"
                                value={ar_country}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ar_country}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="ar_state"
                                value={ar_state}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ar_state}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="landmark" className="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="landmark"
                                name="ar_landmark"
                                value={ar_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="city" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="ar_city"
                                value={ar_city}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ar_city}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="district" className="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="district"
                                name="ar_district"
                                value={ar_district}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ar_district}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="pin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="pin"
                                name="ar_pin"
                                value={ar_pin}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ar_pin}
                            </p>
                        </div>
                        <h6>Address for Service of all Notices</h6>
                        <div className="mb-3 required">
                            <label htmlFor="serAddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serAddLine1"
                                name="as_line1"
                                value={as_line1}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.as_line1}
                            </p>
                        </div>
                        <div className="mb-3 required">
                            <label htmlFor="serAddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serAddLine2"
                                name="as_line2"
                                value={as_line2}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.as_line2}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label
                                htmlFor="serAddCountry"
                                className="form-label"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="as_country"
                                value={as_country}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.as_country}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="serAddState" className="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="as_state"
                                value={as_state}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.as_state}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="serLandMark" className="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serLandMark"
                                name="as_landmark"
                                value={as_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="SerAddCity" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="SerAddCity"
                                name="as_city"
                                value={as_city}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.as_city}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label
                                htmlFor="SerAddDistrict"
                                className="form-label"
                            >
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="SerAddDistrict"
                                name="as_district"
                                value={as_district}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.as_district}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="serAddPin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serAddPin"
                                name="as_pin"
                                value={as_pin}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.as_pin}
                            </p>
                        </div>
                        <h6>Contact Details</h6>
                        <div className="col-md-6 mb-3 required">
                            <label
                                htmlFor="mobileNumber"
                                className="form-label"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="mobileNumber"
                                name="appellant_mobile_no"
                                value={appellant_mobile_no}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.appellant_mobile_no}
                            </p>
                        </div>
                        <div className="col-md-6 mb-3 required">
                            <label htmlFor="emailAdd" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailAdd"
                                name="appellant_email_id"
                                value={appellant_email_id}
                                placeholder="name@example.com"
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.appellant_email_id}
                            </p>
                        </div>
                        <h5>2. Particulars of the Respondent</h5>
                        <h6>Name of the Respondent</h6>
                        <div className="col-md-6 mb-3 required">
                            <label
                                htmlFor="resfirstName"
                                className="form-label"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resfirstName"
                                name="res_first_name"
                                value={res_first_name}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_first_name}
                            </p>
                        </div>
                        <div className="col-md-6 mb-3 required">
                            <label htmlFor="reslastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="reslastName"
                                name="res_last_name"
                                value={res_last_name}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_last_name}
                            </p>
                        </div>
                        <h6>Office Address of the Respondent</h6>
                        <div className="mb-3 required">
                            <label htmlFor="resAddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resAddLine1"
                                name="res_ao_line1"
                                value={res_ao_line1}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_ao_line1}
                            </p>
                        </div>
                        <div className="mb-3 required">
                            <label htmlFor="resAddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resAddLine2"
                                name="res_ao_line2"
                                value={res_ao_line2}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_ao_line2}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="resCountry" className="form-label">
                                Country
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="res_ao_country"
                                value={res_ao_country}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_ao_country}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="resState" className="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="res_ao_state"
                                value={res_ao_state}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_ao_state}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="resLandmark" className="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resLandmark"
                                name="res_ao_landmark"
                                value={res_ao_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="resCity" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resCity"
                                name="res_ao_city"
                                value={res_ao_city}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_ao_city}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="resDistrict" className="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resDistrict"
                                name="res_ao_district"
                                value={res_ao_district}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_ao_district}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="resPin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resPin"
                                name="res_ao_pin"
                                value={res_ao_pin}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_ao_pin}
                            </p>
                        </div>
                        <h6>Address for Service of all Notices</h6>
                        <div className="mb-3 required">
                            <label
                                htmlFor="ResSerAddLine1"
                                className="form-label"
                            >
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerAddLine1"
                                name="res_as_line1"
                                value={res_as_line1}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_as_line1}
                            </p>
                        </div>
                        <div className="mb-3 required">
                            <label
                                htmlFor="ResSerAddLine2"
                                className="form-label"
                            >
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerAddLine2"
                                name="res_as_line2"
                                value={res_as_line2}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_as_line2}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label
                                htmlFor="ResSerCountry"
                                className="form-label"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="res_as_country"
                                value={res_as_country}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_as_country}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="ResSerState" className="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="res_as_state"
                                value={res_as_state}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_as_state}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label
                                htmlFor="ResSerLandmark"
                                className="form-label"
                            >
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerLandmark"
                                name="res_as_landmark"
                                value={res_as_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="ResSerCity" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerCity"
                                name="res_as_city"
                                value={res_as_city}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_as_city}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label
                                htmlFor="ResSerDistrict"
                                className="form-label"
                            >
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerDistrict"
                                name="res_as_district"
                                value={res_as_district}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_as_district}
                            </p>
                        </div>
                        <div className="col-md-4 mb-3 required">
                            <label htmlFor="ResSerPin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerPin"
                                name="res_as_pin"
                                value={res_as_pin}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_as_pin}
                            </p>
                        </div>
                        <h6>Contact Details</h6>
                        <div className="col-md-6 mb-3 required">
                            <label
                                htmlFor="resMobileNumber"
                                className="form-label"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resMobileNumber"
                                name="res_mobile_no"
                                value={res_mobile_no}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_mobile_no}
                            </p>
                        </div>
                        <div className="col-md-6 mb-3 required">
                            <label htmlFor="resEmail" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="resEmail"
                                name="res_email_id"
                                value={res_email_id}
                                placeholder="name@example.com"
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.res_email_id}
                            </p>
                        </div>
                        <h5>3. Jurisdiction of the Appellant Tribunal :</h5>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="juridiction"
                                name="is_juridiction"
                                value={is_within_jurisdiction}
                                checked={is_within_jurisdiction}
                                onChange={(e) => handleCheck(e)}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="juridiction"
                            >
                                The appellant declares that the subject matter
                                of the appeal falls within the jurisdiction of
                                the Appellate Tribunal
                            </label>
                        </div>
                        <div className="col-md-6 mb-3 required">
                            <label
                                htmlFor="registrationNum"
                                className="form-label"
                            >
                                Project Registration Number
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="registrationNum"
                                name="reg_num"
                                value={reg_num}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.reg_num}
                            </p>
                        </div>
                        <h5>4. Limitation :</h5>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="limitationCheck"
                                name="is_limitation_specified"
                                value={is_limitation_specified}
                                checked={is_limitation_specified}
                                onChange={(e) => {
                                    handleCheck(e);
                                    if (!is_limitation_specified) {
                                        setFormData({
                                            ...formData,
                                            is_limitation_specified:
                                                e.target.checked,
                                            reason_for_delay: '',
                                        });
                                    }
                                }}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="limitationCheck"
                            >
                                The appellant declares that the appeal is within
                                the limitation specified in sub-section (2) of
                                section 44
                            </label>
                        </div>
                        <p style={{ textAlign: 'center' }}>OR</p>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="limitationReason"
                                className="form-label"
                            >
                                If the appeal is filed after the expiry of the
                                limitation period specified under sub-section
                                (2) of section 44 specify reasons for delay:
                            </label>
                        </div>
                        <div className="col-md-6 mb-3 ">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="limitationReason"
                                name="reason_for_delay"
                                disabled={is_limitation_specified}
                                value={reason_for_delay}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>5. Facts of the case:</h5>
                        <div className="col-md-6 mb-3 required">
                            <label htmlFor="facts" className="form-label">
                                Give concise statement of facts and grounds of
                                appeal against the specific order of the
                                Authority of the Adjudicating Officer, as the
                                case may be passed under :
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="facts"
                                name="facts_of_case"
                                value={facts_of_case}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.facts_of_case}
                            </p>
                        </div>
                        <h5>6. Grounds of Appeal</h5>
                        <div className="col-md-6 mb-3 required">
                            <label
                                htmlFor="groundsOfAppeal"
                                className="form-label"
                            >
                                Please Specify the grounds of the Appeal:
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="groundsOfAppeal"
                                name="ground_of_appeal"
                                value={ground_of_appeal}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.ground_of_appeal}
                            </p>
                        </div>
                        <h5>7. Relief(s) sought</h5>
                        <div className="col-md-6 mb-3 required">
                            <label
                                htmlFor="reliefSought"
                                className="form-label"
                            >
                                Specify the relief(s) sought explaining the
                                grounds of relief(s) and the legal provisions(if
                                any) relied upon:
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="reliefSought"
                                name="reliefs_sought"
                                value={reliefs_sought}
                                onChange={(e) => onChange(e)}
                            />
                            <p className="invalid-feedback d-block">
                                {formErrors.reliefs_sought}
                            </p>
                        </div>
                        <h5>8. Interim order, if prayed for</h5>
                        <div className="col-md-6 mb-3 required">
                            <label
                                htmlFor="interimOrder"
                                className="form-label"
                            >
                                Pending final decision on the appeal, the
                                appellant seeks issue of the following interim
                                order: [Give here the nature of the interim
                                order prayed for with reasons]
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="interimOrder"
                                name="interim_order"
                                value={interim_order}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>
                            9. Matter not pending with any other court, etc:
                        </h5>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="matterPendingCheck"
                                name="is_matter_pending"
                                value={is_matter_pending}
                                checked={is_matter_pending}
                                onChange={(e) => handleCheck(e)}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="matterPendingCheck"
                            >
                                The appellant further declares that the matter
                                regarding which this appeal has been made, is
                                not pending before any court of law or any other
                                authority or any other Tribunal(s).{' '}
                            </label>
                        </div>{' '}
                        <div className="col-md-12 mb-3 ">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default connect(null, { createAppeal })(withRouter(FormC));
