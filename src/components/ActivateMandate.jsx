import React, { useState } from "react";
import { useTransactionContext } from "../context/TransactionContext";

export default function ActivateMandate() {
  // input data
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(true);

  const { activateMandate, debitMandateFields } = useTransactionContext();
  const [fields] = debitMandateFields;

  const handleActivateMandate = (e) => {
    e.preventDefault();
    activateMandate(data);
    setSuccess(true);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    let updatedValue = {
      [name]: value,
    };
    setData((data) => ({
      ...data,
      ...updatedValue,
    }));
  };
  if (success) {
    return (
      <div className="flex justify-center flex-col items-center">
        <h1 className="block">Thank you! Your response has been recorded.</h1>
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setSuccess(false)}
        >
          Reset Form
        </button>
      </div>
    );
  }
  return (
    <div className="flex h-[800px] justify-center">
      <div className="flex justify-center items-center p-4">
        <form className="m-auto" onSubmit={handleActivateMandate}>
          <div className="rounded-md shadow-sm -space-y-px p-5">
            <h1 className="text-lg font-semibold p-2">Activate Mandate</h1>
            <div className="capitalize flex flex-col justify-center">
              <div className="flex justify-center gap-4 mb-4">
                <label className="w-[150px] text-left">
                  {fields ? fields.fieldone : ""}
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:capitalize placeholder:text-slate-400"
                  name="fieldone"
                  placeholder={fields ? fields.fieldone : ""}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex justify-center gap-4 mb-4">
                <label className="w-[150px] text-left">
                  {fields ? fields.fieldtwo : ""}
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:text-slate-400"
                  name="fieldtwo"
                  placeholder={fields ? fields.fieldtwo : ""}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="mb-4 p-4">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
