
import Patient from '../Models/Patient.js';


export const registerPatient = async (req, res) => {
    console.log("Incoming request:", req.method, req.url); // Log the request method and URL
    console.log("Request body:", req.body);
  try {
    const { title, firstName, lastName, email, dateOfBirth, mobileNumber, age, bloodGroup, gender, address1, address2, city, state, country, pincode } = req.body;

    const newPatient = new Patient({
      title,
      firstName,
      lastName,
      email,
      dateOfBirth,
      mobileNumber,
      age,
      bloodGroup,
      gender,
      address1,
      address2,
      city,
      state,
      country,
      pincode,
    });

    await newPatient.save();
    console.log("Patient saved successfully:", newPatient); 


    return res.status(201).json({
      message: 'Patient registered successfully',
      patient: newPatient,
    });
  } catch (error) {
    console.error('Error registering patient:', error);
    return res.status(500).json({
      message: 'Error registering patient',
      error: error.message,
    });
  }
};
