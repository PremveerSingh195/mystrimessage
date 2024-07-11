import { resend } from '@/lib/resend'
import VerificationEmail from '../../emails/VerificationEmail'
import { Apiresponse } from '@/types/ApiResponse'

export async function sendVerificationCode(
    email: string,
    username: string,
    verifyCode: string
): Promise<Apiresponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry Message Verification Code',
            react: VerificationEmail({ username, otp: verifyCode })
        });
        return { success: true, message: 'verification email send succesfully ' }
    } catch (emailError) {
        console.log("Error sending verification email", emailError);
        return { success: false, message: 'Failed to send verification email' }
    }
}