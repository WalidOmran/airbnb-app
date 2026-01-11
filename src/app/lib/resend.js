// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY || 'demo_key');

// const sendResetEmail = async (email, resetToken) => {
//   try {
//     const result = await resend.emails.send({
//       from: 'Booking App <no-reply@airbnb-app.com>',
//       to: email,
//       subject: 'Reset Your Password',
//       html: `<h2>🔐 Reset Password</h2><a href="${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${resetToken}">Reset</a>`,
//     });
//     console.log('✅ REAL EMAIL SENT:', email, result);
//   } catch (error) {
//     console.log('📧 DEMO MODE:', email, resetToken);
//   }
// };
// export { resend, sendResetEmail };