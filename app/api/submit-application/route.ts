import { NextRequest, NextResponse } from "next/server";

// TODO: Replace with actual email service or CRM integration
// Options: SendGrid, Resend, Nodemailer, or CRM API (HubSpot, Salesforce, etc.)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const linkedinUrl = formData.get("linkedinUrl") as string;
    const resume = formData.get("resume") as File | null;

    // Validate required fields
    if (!fullName || !phone || !email || !city || !state) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate resume file if provided
    if (resume && resume.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Resume file size must be less than 2MB" },
        { status: 400 }
      );
    }

    // Prepare application data
    const applicationData = {
      fullName,
      phone,
      email,
      city,
      state,
      linkedinUrl: linkedinUrl || "Not provided",
      hasResume: resume ? true : false,
      resumeFileName: resume ? resume.name : null,
      submittedAt: new Date().toISOString(),
    };

    // TODO: Implement email sending or CRM integration here
    // Example email structure:
    /*
    const emailContent = {
      to: "contact@orbitmarketinginc.org",
      subject: `New Application from ${fullName}`,
      text: `
        New Application Received:
        
        Name: ${fullName}
        Phone: ${phone}
        Email: ${email}
        Location: ${city}, ${state}
        LinkedIn: ${linkedinUrl || "Not provided"}
        Resume: ${resume ? resume.name : "Not provided"}
        
        Submitted: ${new Date().toLocaleString()}
      `,
      attachments: resume ? [{
        filename: resume.name,
        content: await resume.arrayBuffer(),
      }] : [],
    };
    */

    // For now, log the application data
    // In production, replace this with actual email/CRM integration
    console.log("=== NEW APPLICATION RECEIVED ===");
    console.log(JSON.stringify(applicationData, null, 2));
    if (resume) {
      console.log(`Resume file: ${resume.name} (${resume.size} bytes)`);
    }
    console.log("=================================");

    // TODO: Uncomment and configure when ready:
    // await sendEmail(emailContent);
    // OR
    // await submitToCRM(applicationData);

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: applicationData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}