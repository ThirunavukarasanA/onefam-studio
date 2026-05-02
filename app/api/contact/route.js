import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

const patterns = {
  name: /^[A-Za-z ]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]+$/,
  subject: /^[A-Za-z0-9 ]+$/,
  message: /^[A-Za-z0-9 ]*$/,
};

function validateContactForm(data) {
  const values = {
    name: String(data.name || "").trim(),
    email: String(data.email || "").trim().toLowerCase(),
    phone: String(data.phone || "").trim(),
    subject: String(data.subject || "").trim(),
    message: String(data.message || "").trim(),
  };

  const errors = {};

  if (!values.name) {
    errors.name = "Name is required.";
  } else if (!patterns.name.test(values.name)) {
    errors.name = "Name can contain alphabets and spaces only.";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!patterns.email.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required.";
  } else if (!patterns.phone.test(values.phone)) {
    errors.phone = "Phone number can contain numbers only.";
  }

  if (!values.subject) {
    errors.subject = "Subject is required.";
  } else if (!patterns.subject.test(values.subject)) {
    errors.subject = "Subject can contain alphabets, numbers, and spaces only.";
  }

  if (values.message && !patterns.message.test(values.message)) {
    errors.message = "Message can contain alphabets, numbers, and spaces only.";
  }

  return { values, errors };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { values, errors } = validateContactForm(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Please fix the form errors.", errors },
        { status: 400 }
      );
    }

    await connectToDatabase();
    await ContactMessage.create(values);

    return NextResponse.json(
      { message: "Message saved successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
