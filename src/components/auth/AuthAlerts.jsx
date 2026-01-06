const  AuthAlerts = ({ errors, successMsg }) => {
  return (
    <>
      {errors.general && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 border border-red-200">
          {errors.general}
        </div>
      )}
      {successMsg && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4 border border-green-200">
          {successMsg}
        </div>
      )}
    </>
  );
}

export default AuthAlerts;