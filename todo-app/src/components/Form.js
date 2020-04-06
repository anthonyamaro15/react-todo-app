import React, { useEffect } from "react";
import { withFormik, Formik, Form, Field } from "formik";
import * as yup from "yup";

import uuid from "uuid/v4";

// const MainForm = ({ createTodo, status, errors, touched }) => {
//   useEffect(() => {
//     status && createTodo(status);
//   }, [status, createTodo]);

//   return (
//     <Form>
//       <Field type="text" name="todo" id="todo" />
//       {errors.todo && touched.todo && <p>{errors.todo}</p>}
//       <button type="submit">Add</button>
//     </Form>
//   );
// };

// export default withFormik({
//   mapPropsToValues: () => ({
//     todo: ""
//   }),
//   validationSchema: yup.object().shape({
//     todo: yup.string().required("please enter a value")
//   }),
//   handleSubmit: (values, { resetForm, setStatus }) => {
//     const obj = {
//       id: uuid(),
//       todo: values.todo
//     };
//     setStatus(obj);
//     resetForm();
//   }
// })(MainForm);

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
