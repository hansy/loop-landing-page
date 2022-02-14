import { Client } from "@hubspot/api-client";
import { error } from "../../../util/response";

const hubspotClient = new Client({
  apiKey: process.env.HUBSPOT_API_KEY,
});

export const createContact = async (email) => {
  try {
    await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email,
      },
    });

    return true;
  } catch (e) {
    console.error(`Error adding Hubspot contact (${email})`, e);

    return Promise.reject(error(400, "Unable to add user"));
  }
};
