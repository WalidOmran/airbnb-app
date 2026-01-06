import FormItem from "../form/FormItem"
import AuthAlerts from "./AuthAlerts"
import AuthButton from "./AuthButton"
import AuthLink from "./AuthLink"

const AuthLayoutForm = ({ title, fields, onSubmit, loading, errors, successMsg, linkText, linkHref, linkHrefForgotText, linkHrefForgot }) => {
  return (
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold mb-6 text-center">{title}</h1>
          
          <AuthAlerts errors={errors} successMsg={successMsg} />
          
          {fields.map(field => (
            <FormItem key={field.id} {...field} />
          ))}

        

          <AuthButton type="submit" loading={loading}>
            {title.replace(' ', ' ')}
          </AuthButton>
          { linkHrefForgotText && linkHrefForgot &&
            <AuthLink href={linkHrefForgot}>{linkHrefForgotText}</AuthLink>
          }
          <AuthLink href={linkHref}>{linkText}</AuthLink>
      </form>
  )
}

export default AuthLayoutForm
