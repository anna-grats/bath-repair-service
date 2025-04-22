// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
//
// export async function POST(req: NextRequest) {
//     try {
//         const data = await req.json();
//         const { Name, Email, Phone, Zipcode } = data;
//
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 587,
//             secure: false,
//             auth: {
//                 user: 'info.biz.daniloff@gmail.com',
//                 pass: 'hluy oqbi lsls bijs'
//             }
//         });
//
//         const mailOptions = {
//             from: 'info.biz.daniloff@gmail.com',
//             to: 'biz.daniloff@gmail.com',
//             subject: `New client - ${Name ? Name : Phone}`,
//             html: `
//                 <h1>New client</h1>
//                 <p>Name: ${Name ? Name : '-'}</p>
//                 <p>Email: ${Email ? `<a href="mailto:${Email}">${Email}</a>` : '-'}</p>
//                 <p>Phone: ${Phone ? `<a href="tel:${Phone}">${Phone}</a>` : '-'}</p>
//                 <p>ZipCode: ${Zipcode ? Zipcode : '-'}</p>
//             `
//         };
//
//         await transporter.sendMail(mailOptions);
//
//         return NextResponse.json({ email: "Email sent successfully" }, { status: 200 });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return NextResponse.json({ email: "Failed to send email" }, { status: 500 });
//     }
// }
