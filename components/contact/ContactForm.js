import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ContactFormField from "./ContactFormField";

import emailjs from "@emailjs/browser";

const ContactForm = ({ config }) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSendEmail = () => {
        const templateParams = {
            website: formData.website,
            name: formData.fields[0].value,
            email: formData.fields[1].value,
            phone: formData.fields[2].value,
            comment: formData.fields[3].value,
        };

        emailjs
            .send(
                "service_426n368",
                "template_ynu5a9o",
                templateParams,
                "HWFSg6moAb3K2Qgbh"
            )
            .then(function () {
                setIsSubmitted(true);
            });
        // David's Email Account
        // emailjs
        //     .send(
        //         "service_z7hpw17",
        //         "template_pfang7n",
        //         templateParams,
        //         "aMDOy4kUud9rd0Yg9"
        //     )
        //     .then(function () {
        //         setIsSubmitted(true);
        //     });
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
            }}
        >
            {!isSubmitted ? (
                <>
                    {formData.fields.map((field, index) => {
                        return (
                            <Box key={index}>
                                <ContactFormField
                                    index={index}
                                    field={field}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            </Box>
                        );
                    })}
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleSendEmail}
                    >
                        Submit
                    </Button>
                </>
            ) : (
                <Typography>Thanks! We will be in touch soon!</Typography>
            )}
        </Box>
    );
};

export default ContactForm;
