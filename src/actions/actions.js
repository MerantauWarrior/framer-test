"use server";

export async function handleMyFormSubmit(data) {
  console.log({ firstName: data.firstName, lastName: data.lastName, email: data.email });
}
