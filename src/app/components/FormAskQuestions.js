"use client";
import ButtonC from "./ButtonC";
import HeaderC from "./HeaderC";
import NotificationC from "@/app/components/Notification/NotificationC";
import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

import { useTranslation } from "@/app/hooks/LanguageContext";

const FormAskQuestions = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 3000);
  };

  const onSubmit = (data) => {
    fetch(
      "https://enjoy-site-backend-production.up.railway.app/submit_webstudio",
      {
        // Local server endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        showNotification(t("your_request_sent_sucessfully"), "success");
        //  console.log("Success:", data);
        // Handle success - e.g., display a success message
      })
      .catch((error) => {
        showNotification("ERROR", "error");
        // Handle error - e.g., display an error message
      });
  };

  let textRequired = "*required";

  // size - large ,  small

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="post" action="#">
        <HeaderC title={t("form_1")}></HeaderC>
        <HeaderC title={t("form_2")}></HeaderC>

        <div class="row ">
          <div className="col-12 col-12-xsmall">
            <label for="name">Name *</label>
            <input
              className={errors.name && "error-input"}
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
            />
            <p className="error-text">
              {" "}
              {errors.name && errors.name.type === "required" && textRequired}
            </p>
          </div>
          <div className="col-12 col-12-xsmall">
            <label>Email *</label>
            <input
              className={errors.email && "error-input"}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              placeholder="Email"
            />
            <p className="error-text">
              {errors.email && errors.email.type === "required"
                ? textRequired
                : errors.email &&
                  errors.email.type === "pattern" &&
                  "Invalid email"}
            </p>
          </div>

          <div className="col-6 col-12-xsmall">
            <label>Country Code *</label>
            <select
              className={errors.countryCode && "error-input"}
              id="countryCode"
              {...register("countryCode", { required: true })}>
              <option value="">Select Country Code</option>
              <option value="+972">Israel (+972)</option>
              <option value="+48">Poland (+48)</option>
              <option value="+1">USA (+1)</option>
              <option value="+380">Ukraine (+380)</option>
              <option value="+375">Belarus (+375)</option>
              <option value="+33">France (+33)</option>
              <option value="+39">Italy (+39)</option>
              <option value="+34">Spain (+34)</option>
            </select>
            <p className="error-text">
              {errors.countryCode &&
                errors.countryCode.type === "required" &&
                textRequired}
            </p>
          </div>

          <div className="col-6 col-12-xsmall">
            <label>Phone *</label>
            <input
              className={errors.phone && "error-input"}
              {...register("phone", { required: true })}
              type="text"
              placeholder="Phone"
            />

            <p className="error-text">
              {errors.phone && errors.phone.type === "required"
                ? textRequired
                : errors.phone &&
                  errors.phone.type === "pattern" &&
                  "*Invalid phone"}
            </p>
          </div>

          <div className="col-12 col-12-xsmall">
            <label>Site type </label>
            <select
              className={errors.category && "error-input"}
              {...register("category", { required: true })}
              id="category">
              <option value="need_help">- Need help -</option>
              <option value="landing_page">Landing page</option>
              <option value="coorparate_site">Корпоративный сайт</option>
              <option value="shopping_site">Интернет магазин</option>
              <option value="site_visitka">Сайт Визитка</option>
              <option value="rework_site">Доработка сайта</option>
              <option value="another">Другое</option>
            </select>
            <p className="error-text">
              {errors.category &&
                errors.category.type === "required" &&
                textRequired}
            </p>
          </div>

          <div className="col-12 col-12-xsmall">
            <label>Additional comments</label>
            <textarea
              className={errors.comments && "error-input"}
              {...register("comments", {})}
              name="comments"
              id="comments"
              placeholder="Enter your message..."
              rows="6"></textarea>
          </div>
          <p className="error-text">
            {errors.comments &&
              errors.comments.type === "required" &&
              textRequired}
          </p>

          <div className="col-12 col-12-xsmall padding-top-m">
            <ButtonC
              type="submit"
              styles={{ width: "100%" }}
              size="large"
              label="Send"></ButtonC>
          </div>
        </div>
      </form>
      <NotificationC
        message={notification.message}
        type={notification.type}
        show={notification.show}
        onClose={() =>
          setNotification({ ...notification, show: false })
        }></NotificationC>
    </>
  );
};

export default FormAskQuestions;
