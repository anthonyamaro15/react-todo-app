import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";

import uuid from "uuid/v4";

const MainForm = ({ createTodo, status }) => {
  useEffect(() => {
    status && createTodo(status);
  }, [status, createTodo]);

  return (
    <Form>
      <Field type="text" name="todo" id="todo" />
      <button type="submit">Add</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    todo: ""
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    const obj = {
      id: uuid(),
      todo: values.todo
    };
    setStatus(obj);
    resetForm();
  }
})(MainForm);
