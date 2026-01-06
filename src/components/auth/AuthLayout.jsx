import Header from '@/components/header/Header';
import AuthLayoutForm from './AuthLayoutForm';

export default function AuthLayout({ children, title, fields, onSubmit, loading, errors, successMsg, linkText, linkHref, linkHrefForgotText, linkHrefForgot }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-4 mb-10">
        <div className="flex flex-col gap-5 max-w-md w-full bg-white mt-10 p-8 rounded-lg shadow-md">
          <AuthLayoutForm
            title={title}
            fields={fields}
            onSubmit={onSubmit}
            loading={loading}
            errors={errors}
            successMsg={successMsg}
            linkText={linkText}
            linkHref={linkHref}
            linkHrefForgotText={linkHrefForgotText}
            linkHrefForgot={linkHrefForgot}
          />
          {children}
        </div>
      </div>
    </>
  );
}
