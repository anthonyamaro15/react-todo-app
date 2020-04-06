import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import uuid from "uuid/v4";

const validationSchema = yup.object().shape({
  todo: yup.string().required("please enter a value"),
});

const MainForm = ({ createTodo }) => {
  return (
    <Formik
      initialValues={{ todo: "" }}
      validationSchema={validationSchema}
      onSubmit={(data, { resetForm }) => {
        const obj = {
          id: uuid(),
          todo: data.todo,
        };
        console.log(data);
        createTodo(obj);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field type="text" name="todo" id="todo" />
          {errors.todo && touched.todo && <p>{errors.todo}</p>}
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
